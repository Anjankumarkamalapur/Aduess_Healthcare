import { useState } from "react";
import { bookAppointment } from "../api";
import ResultCard from "./ResultCard";

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

  const [result, setResult] = useState("");

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await bookAppointment(formData);
      setResult(res.data.message);
    } catch {
      setResult("Error booking appointment");
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
        }
      `}</style>

      <div className="appointment-container">
        <h2>Book Doctor Appointment</h2>

        <form onSubmit={handleSubmit} className="appointment-form">
          <input name="patient_name" placeholder="Patient Name" onChange={handleChange} required />
          <input name="email" type="email" placeholder="Email" onChange={handleChange} required />

          <select name="doctor" onChange={handleChange} required>
            <option value="">Select Doctor</option>
            <option>Dr. Ramesh (Cardiology)</option>
            <option>Dr. Anjali (Nephrology)</option>
            <option>Dr. Suresh (General)</option>
          </select>

          <select name="department" onChange={handleChange} required>
            <option value="">Department</option>
            <option>Cardiology</option>
            <option>Nephrology</option>
            <option>General Medicine</option>
          </select>

          <input type="date" name="date" onChange={handleChange} required />
          <input type="time" name="time" onChange={handleChange} required />

          <textarea name="notes" placeholder="Notes" onChange={handleChange} />

          <button type="submit">Book Appointment</button>
        </form>

        <ResultCard result={result} />
      </div>
    </>
  );
};

export default AppointmentForm;
