import { useState } from "react";
import { loginUser } from "../api";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async () => {
    try {
      const res = await loginUser(form);
      const data = res.data;

      if (data.token) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("role", data.role);

        alert("Login successful");

        if (data.role === "admin") {
          navigate("/admin");
        } else {
          navigate("/");
        }
      } else {
        alert(data.msg || "Login failed");
      }
    } catch (err) {
      console.error(err);
      alert("User not found or incorrect password");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Welcome Back 👋</h2>
        <p style={styles.subtitle}>Login to your account</p>

        <input
          type="email"
          placeholder="Email Address"
          value={form.email}
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
          style={styles.input}
        />

        <input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) =>
            setForm({ ...form, password: e.target.value })
          }
          style={styles.input}
        />

        <button onClick={handleLogin} style={styles.button}>
          Login
        </button>

        <p style={styles.registerText}>
          Don’t have an account?{" "}
          <span
            style={styles.link}
            onClick={() => navigate("/register")}
          >
            Register
          </span>
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #3b82f6, #06b6d4)",
  },

  card: {
    width: "340px",
    padding: "35px",
    borderRadius: "16px",
    background: "rgba(255, 255, 255, 0.15)",
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
    boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
    textAlign: "center",
    color: "#fff",
  },

  title: {
    marginBottom: "5px",
  },

  subtitle: {
    marginBottom: "20px",
    fontSize: "14px",
    opacity: 0.8,
  },

  input: {
    width: "100%",
    padding: "12px",
    margin: "10px 0",
    borderRadius: "8px",
    border: "none",
    outline: "none",
    background: "rgba(255,255,255,0.2)",
    color: "#fff",
  },

  button: {
    width: "100%",
    padding: "12px",
    marginTop: "10px",
    borderRadius: "8px",
    border: "none",
    background: "#2563eb",
    color: "#fff",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "0.3s",
  },

  registerText: {
    marginTop: "15px",
    fontSize: "14px",
  },

  link: {
    color: "#fff",
    fontWeight: "bold",
    cursor: "pointer",
    textDecoration: "underline",
  },
};

export default Login;