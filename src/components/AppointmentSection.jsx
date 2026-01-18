import { useState } from "react";

const AppointmentSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    doctor: "",
    date: "",
    time: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("✅ Appointment Booked Successfully!");
    setFormData({
      name: "",
      email: "",
      doctor: "",
      date: "",
      time: ""
    });
  };

  return (
    <>
      {/* ===== INTERNAL CSS ===== */}
      <style>
        {`
          .appointment-section {
            padding: 100px 40px;
            background: linear-gradient(135deg, #f8fafc, #ecfeff);
            text-align: center;
          }

          .appointment-section h2 {
            font-size: 36px;
            font-weight: 700;
            color: #0f172a;
            margin-bottom: 12px;
          }

          .appointment-section p {
            font-size: 16px;
            color: #475569;
            max-width: 700px;
            margin: 0 auto 50px;
          }

          .appointment-form {
            max-width: 520px;
            margin: 0 auto;
            background: white;
            padding: 36px;
            border-radius: 20px;
            box-shadow: 0 20px 50px rgba(37, 99, 235, 0.18);
            display: grid;
            gap: 16px;
          }

          .appointment-form input,
          .appointment-form select {
            padding: 14px;
            font-size: 14px;
            border-radius: 10px;
            border: 1px solid #cbd5f5;
            outline: none;
          }

          .appointment-form input:focus,
          .appointment-form select:focus {
            border-color: #2563eb;
            box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.15);
          }

          .appointment-form button {
            margin-top: 10px;
            padding: 14px;
            font-size: 16px;
            font-weight: 600;
            border-radius: 12px;
            border: none;
            cursor: pointer;
            background: linear-gradient(90deg, #2563eb, #0ea5e9);
            color: white;
            transition: transform 0.2s ease, box-shadow 0.2s ease;
          }

          .appointment-form button:hover {
            transform: translateY(-2px);
            box-shadow: 0 14px 30px rgba(37, 99, 235, 0.4);
          }
        `}
      </style>

      {/* ===== UI ===== */}
      <section className="appointment-section" id="appointment">
        <h2>Book an Appointment</h2>
        <p>
          Schedule a consultation with our experienced doctors for AI-assisted
          diagnosis, lab analysis, and expert medical guidance.
        </p>

        <form className="appointment-form" onSubmit={handleSubmit}>
          <input
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            name="email"
            type="email"
            placeholder="Email Address"
            value={formData.email}
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
            <option>Dr. Sharma (Cardiologist)</option>
            <option>Dr. Reddy (Nephrologist)</option>
            <option>Dr. Mehta (General Physician)</option>
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

          <button type="submit">Confirm Appointment</button>
        </form>
      </section>
    </>
  );
};

export default AppointmentSection;
