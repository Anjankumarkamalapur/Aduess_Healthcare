import { useEffect, useState } from "react";

const Admin = () => {
  const [appointments, setAppointments] = useState([]);
  const [search, setSearch] = useState("");
  const [filterDate, setFilterDate] = useState("");

  const fetchAppointments = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/appointments", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });

      const data = await res.json();
      setAppointments(data);
    } catch (err) {
      console.error(err);
    }
  };

  const updateStatus = async (id, status) => {
    await fetch(`http://localhost:5000/api/appointments/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
      body: JSON.stringify({ status }),
    });

    fetchAppointments();
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  // 🔍 Filter logic
  const filteredAppointments = appointments.filter((a) => {
    return (
      (a.patient_name?.toLowerCase().includes(search.toLowerCase()) ||
        a.doctor?.toLowerCase().includes(search.toLowerCase()) ||
        a.email?.toLowerCase().includes(search.toLowerCase())) &&
      (filterDate ? a.date === filterDate : true)
    );
  });

  // 📊 Stats
  const total = appointments.length;
  const pending = appointments.filter((a) => a.status === "pending").length;
  const approved = appointments.filter((a) => a.status === "approved").length;
  const rejected = appointments.filter((a) => a.status === "rejected").length;

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Admin Dashboard</h2>

      {/* 📊 STATS */}
      <div style={styles.statsContainer}>
        <div style={styles.statBox}>Total: {total}</div>
        <div style={{ ...styles.statBox, background: "#facc15" }}>
          Pending: {pending}
        </div>
        <div style={{ ...styles.statBox, background: "#22c55e" }}>
          Approved: {approved}
        </div>
        <div style={{ ...styles.statBox, background: "#ef4444" }}>
          Rejected: {rejected}
        </div>
      </div>

      {/* 🔍 SEARCH + FILTER */}
      <div style={styles.filterContainer}>
        <input
          type="text"
          placeholder="Search by name, doctor, email..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={styles.input}
        />

        <input
          type="date"
          value={filterDate}
          onChange={(e) => setFilterDate(e.target.value)}
          style={styles.input}
        />
      </div>

      {/* 🧾 APPOINTMENTS */}
      <div style={styles.grid}>
        {filteredAppointments.length === 0 ? (
          <p style={styles.empty}>No matching appointments</p>
        ) : (
          filteredAppointments.map((a) => (
            <div key={a._id} style={styles.card}>
              <h3 style={styles.name}>{a.patient_name}</h3>

              <p><strong>Email:</strong> {a.email}</p>
              <p><strong>Doctor:</strong> {a.doctor}</p>
              <p><strong>Date:</strong> {a.date}</p>
              <p><strong>Time:</strong> {a.time}</p>

              <p>
                <strong>Status:</strong>{" "}
                <span
                  style={{
                    ...styles.status,
                    background:
                      a.status === "approved"
                        ? "#22c55e"
                        : a.status === "rejected"
                        ? "#ef4444"
                        : "#f59e0b",
                  }}
                >
                  {a.status}
                </span>
              </p>

              <div style={styles.btnGroup}>
                <button
                  style={styles.approveBtn}
                  onClick={() => updateStatus(a._id, "approved")}
                >
                  Approve
                </button>

                <button
                  style={styles.rejectBtn}
                  onClick={() => updateStatus(a._id, "rejected")}
                >
                  Reject
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "40px",
    background: "#f8fafc",
    minHeight: "100vh",
  },

  heading: {
    textAlign: "center",
    marginBottom: "20px",
  },

  statsContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginBottom: "20px",
    flexWrap: "wrap",
  },

  statBox: {
    padding: "10px 20px",
    borderRadius: "10px",
    background: "#3b82f6",
    color: "#fff",
    fontWeight: "bold",
    minWidth: "120px",
    textAlign: "center",
  },

  filterContainer: {
    display: "flex",
    gap: "10px",
    marginBottom: "30px",
    justifyContent: "center",
    flexWrap: "wrap",
  },

  input: {
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    minWidth: "220px",
  },

  // 🔥 FIXED GRID
  grid: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px",
  },

  // 🔥 FIXED CARD WIDTH
  card: {
    width: "320px",
    background: "#fff",
    padding: "20px",
    borderRadius: "14px",
    boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
    transition: "transform 0.2s ease",
  },

  name: {
    color: "#2563eb",
    marginBottom: "10px",
  },

  status: {
    color: "#fff",
    padding: "4px 10px",
    borderRadius: "6px",
    fontSize: "12px",
  },

  // 🔥 FIX BUTTON ALIGNMENT
  btnGroup: {
    marginTop: "15px",
    display: "flex",
    gap: "10px",
  },

  approveBtn: {
    flex: 1,
    background: "#22c55e",
    color: "#fff",
    border: "none",
    padding: "10px",
    borderRadius: "6px",
    cursor: "pointer",
  },

  rejectBtn: {
    flex: 1,
    background: "#ef4444",
    color: "#fff",
    border: "none",
    padding: "10px",
    borderRadius: "6px",
    cursor: "pointer",
  },

  empty: {
    textAlign: "center",
    width: "100%",
    fontSize: "18px",
    color: "#64748b",
  },
};

export default Admin;