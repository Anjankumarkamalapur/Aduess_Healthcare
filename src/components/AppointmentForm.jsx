import { useState } from "react";
import { bookAppointment } from "../api";

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    patient_name: "",
    email: "",
    doctor: "",
    department: "",
    date: "",
    time: "",
    notes: ""
  });

  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await bookAppointment(formData);
      setMessage(res.data.message);
      setSuccess(true);

      // ✅ RESET FORM
      setFormData({
        patient_name: "",
        email: "",
        doctor: "",
        department: "",
        date: "",
        time: "",
        notes: ""
      });
    } catch {
      setMessage("Error booking appointment");
      setSuccess(false);
    }
  };

  return (
    <>
      <style>{`
        .appointment-container {
          max-width: 600px;
          margin: 40px auto;
          padding: 36px;
          background: white;
          border-radius: 22px;
          box-shadow: 0 20px 45px rgba(37,99,235,0.12);
        }

        .appointment-form {
          display: grid;
          grid-template-columns: repeat(2,1fr);
          gap: 14px;
        }

        .appointment-form input,
        .appointment-form select,
        .appointment-form textarea {
          padding: 12px;
          border-radius: 10px;
          border: 1px solid #cbd5f5;
        }

        .appointment-form button {
          grid-column: span 2;
          padding: 14px;
          background: linear-gradient(90deg,#2563eb,#0ea5e9);
          color: white;
          border: none;
          border-radius: 12px;
          font-weight: 600;
          cursor: pointer;
        }

        .success-msg {
          margin-top: 20px;
          padding: 14px;
          border-radius: 10px;
          background: #ecfeff;
          color: #065f46;
          font-weight: 600;
          text-align: center;
          border: 1px solid #5eead4;
        }

        .error-msg {
          margin-top: 20px;
          padding: 14px;
          border-radius: 10px;
          background: #fee2e2;
          color: #7f1d1d;
          font-weight: 600;
          text-align: center;
          border: 1px solid #fca5a5;
        }
      `}</style>

      <div className="appointment-container">
        <h2>Book Doctor Appointment</h2>

        <form onSubmit={handleSubmit} className="appointment-form">
          <input
            name="patient_name"
            value={formData.patient_name}
            placeholder="Patient Name"
            onChange={handleChange}
            required
          />

          <input
            name="email"
            type="email"
            value={formData.email}
            placeholder="Email"
            onChange={handleChange}
            required
          />

          <select
            name="doctor"
            value={formData.doctor}
            onChange={handleChange}
            required
          >
            <option value="">Select Doctor</option>
            <option>Dr. Ramesh (Cardiology)</option>
            <option>Dr. Anjali (Nephrology)</option>
            <option>Dr. Suresh (General)</option>
          </select>

          <select
            name="department"
            value={formData.department}
            onChange={handleChange}
            required
          >
            <option value="">Department</option>
            <option>Cardiology</option>
            <option>Nephrology</option>
            <option>General Medicine</option>
          </select>

          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />

          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          />

          <textarea
            name="notes"
            value={formData.notes}
            placeholder="Notes"
            onChange={handleChange}
          />

          <button type="submit">Book Appointment</button>
        </form>

        {message && (
          <div className={success ? "success-msg" : "error-msg"}>
            {message}
          </div>
        )}
      </div>
    </>
  );
};

export default AppointmentForm;
