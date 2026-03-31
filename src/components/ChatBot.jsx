import { useState } from "react";
import { askAI } from "../api";

const ChatBot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi 👋 Ask me anything about healthcare!", sender: "bot" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = { text: input, sender: "user" };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const res = await askAI(input);
      const botMsg = {
        text: res.data.reply || "No response",
        sender: "bot",
      };

      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { text: "Error getting response ❌", sender: "bot" },
      ]);
    }

    setLoading(false);
  };

  return (
    <>
      {/* Floating Button */}
      <div style={styles.floatingBtn} onClick={() => setOpen(!open)}>
        💬
      </div>

      {/* Chat Box */}
      {open && (
        <div style={styles.chatBox}>
          {/* Header */}
          <div style={styles.header}>
            <span>🧠 AI Health Assistant</span>
            <button onClick={() => setOpen(false)} style={styles.close}>
              ✖
            </button>
          </div>

          {/* Messages */}
          <div style={styles.messages}>
            {messages.map((msg, i) => (
              <div
                key={i}
                style={{
                  ...styles.message,
                  alignSelf:
                    msg.sender === "user" ? "flex-end" : "flex-start",
                  background:
                    msg.sender === "user"
                      ? "#2563eb"
                      : "#e2e8f0",
                  color: msg.sender === "user" ? "#fff" : "#000",
                }}
              >
                <div style={{ whiteSpace: "pre-line" }}>
                  {msg.text
                    .replace(/\*\*/g, "") // remove markdown **
                    .replace(/\d+\./g, "\n\n") // spacing for sections
                  }
                </div>
              </div>
            ))}

            {loading && (
              <div style={styles.botTyping}>Typing...</div>
            )}
          </div>

          {/* Input */}
          <div style={styles.inputBox}>
            <input
              type="text"
              placeholder="Ask health-related question..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              style={styles.input}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button onClick={sendMessage} style={styles.sendBtn}>
              ➤
            </button>
          </div>
        </div>
      )}
    </>
  );
};

const styles = {
  floatingBtn: {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    background: "#2563eb",
    color: "#fff",
    borderRadius: "50%",
    width: "60px",
    height: "60px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "24px",
    cursor: "pointer",
    boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
    zIndex: 999,
  },

  chatBox: {
    position: "fixed",
    bottom: "90px",
    right: "20px",
    width: "340px",
    height: "500px",
    background: "#fff",
    borderRadius: "16px",
    display: "flex",
    flexDirection: "column",
    boxShadow: "0 10px 40px rgba(0,0,0,0.2)",
    overflow: "hidden",
    zIndex: 999,
  },

  header: {
    background: "linear-gradient(90deg, #2563eb, #0ea5e9)",
    color: "#fff",
    padding: "12px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontWeight: "600",
  },

  close: {
    background: "none",
    border: "none",
    color: "#fff",
    fontSize: "16px",
    cursor: "pointer",
  },

  messages: {
    flex: 1,
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    overflowY: "auto",
    background: "#f8fafc",
  },

  message: {
    padding: "10px 14px",
    borderRadius: "14px",
    maxWidth: "75%",
    fontSize: "14px",
  },

  botTyping: {
    fontSize: "12px",
    color: "#64748b",
  },

  inputBox: {
    display: "flex",
    padding: "10px",
    borderTop: "1px solid #e2e8f0",
    background: "#fff",
  },

  input: {
    flex: 1,
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    outline: "none",
  },

  sendBtn: {
    marginLeft: "8px",
    padding: "10px 14px",
    background: "#2563eb",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
};

export default ChatBot;