import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../api";

const Register = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleRegister = async () => {
  // 🔥 VALIDATION
  if (!form.name || !form.email || !form.password) {
    alert("All fields are required ❗");
    return;
  }

  if (!form.email.includes("@")) {
    alert("Enter valid email ❗");
    return;
  }

  if (form.password.length < 6) {
    alert("Password must be at least 6 characters ❗");
    return;
  }

  if (form.password !== form.confirmPassword) {
    alert("Passwords do not match ❗");
    return;
  }

  // ✅ API CALL
  try {
    const res = await registerUser(form);
    const data = res.data;

    alert(data.msg || "Registered successfully ✅");
    navigate("/login");
  } catch (err) {
    console.error(err);
    alert("Registration failed ❌");
  }
};

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Create Account ✨</h2>
        <p style={styles.subtitle}>Join Audess Healthcare</p>

        <input
          type="text"
          placeholder="Full Name"
          value={form.name}
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
          style={styles.input}
        />

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

        <button onClick={handleRegister} style={styles.button}>
          Register
        </button>

        <p style={styles.loginText}>
          Already have an account?{" "}
          <span
            style={styles.link}
            onClick={() => navigate("/login")}
          >
            Login
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
    background: "linear-gradient(135deg, #16a34a, #22c55e)",
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
    background: "#16a34a",
    color: "#fff",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "0.3s",
  },

  loginText: {
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

export default Register;