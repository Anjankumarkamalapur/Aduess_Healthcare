import { useState } from "react";
import { predictDiabetes } from "../api";
import ResultCard from "./ResultCard";

const DiabetesForm = () => {
  const [formData, setFormData] = useState({
    gender: "Male",
    age: "",
    hypertension: 0,
    heart_disease: 0,
    smoking_history: 0,
    bmi: "",
    hba1c_level: "",
    blood_glucose_level: ""
  });

  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResult("");

    try {
      const res = await predictDiabetes(formData);
      setResult(res.data.result);
    } catch {
      setResult("Error predicting diabetes");
    }

    setLoading(false);
  };

  return (
    <>
      {/* ===== INTERNAL CSS (SAME AS OTHER MODELS) ===== */}
      <style>
        {`
          .kidney-container {
            max-width: 560px;
            margin: 60px auto;
            padding: 34px;
            background: white;
            border-radius: 18px;
            box-shadow: 0 18px 45px rgba(0, 0, 0, 0.1);
          }

          .kidney-container h2 {
            text-align: center;
            font-size: 26px;
            font-weight: 700;
            color: #0f172a;
            margin-bottom: 28px;
          }

          .kidney-form {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
          }

          .kidney-form input,
          .kidney-form select {
            padding: 12px 14px;
            font-size: 14px;
            border-radius: 10px;
            border: 1px solid #cbd5f5;
            outline: none;
            transition: border 0.2s ease, box-shadow 0.2s ease;
            background: white;
          }

          .kidney-form input:focus,
          .kidney-form select:focus {
            border-color: #2563eb;
            box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.15);
          }

          .kidney-form select {
            grid-column: span 2;
            cursor: pointer;
          }

          .kidney-form button {
            grid-column: span 2;
            margin-top: 14px;
            padding: 14px;
            font-size: 15px;
            font-weight: 600;
            border-radius: 12px;
            border: none;
            cursor: pointer;
            background: linear-gradient(90deg, #2563eb, #0ea5e9);
            color: white;
            transition: transform 0.2s ease, box-shadow 0.2s ease;
          }

          .kidney-form button:hover {
            transform: translateY(-2px);
            box-shadow: 0 14px 32px rgba(37, 99, 235, 0.35);
          }

          .kidney-form button:disabled {
            opacity: 0.7;
            cursor: not-allowed;
          }

          @media (max-width: 600px) {
            .kidney-form {
              grid-template-columns: 1fr;
            }

            .kidney-form button,
            .kidney-form select {
              grid-column: span 1;
            }
          }
        `}
      </style>

      {/* ===== FORM UI ===== */}
      <div className="kidney-container">
        <h2>Diabetes Prediction</h2>

        <form onSubmit={handleSubmit} className="kidney-form">
          <select name="gender" onChange={handleChange}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>

          <input name="age" placeholder="AGE" onChange={handleChange} required />
          <input name="bmi" placeholder="BMI" onChange={handleChange} required />
          <input
            name="hba1c_level"
            placeholder="HbA1c Level"
            onChange={handleChange}
            required
          />
          <input
            name="blood_glucose_level"
            placeholder="Blood Glucose Level"
            onChange={handleChange}
            required
          />

          <select name="hypertension" onChange={handleChange}>
            <option value="0">No Hypertension</option>
            <option value="1">Hypertension</option>
          </select>

          <select name="heart_disease" onChange={handleChange}>
            <option value="0">No Heart Disease</option>
            <option value="1">Heart Disease</option>
          </select>

          <select name="smoking_history" onChange={handleChange}>
            <option value="0">Never</option>
            <option value="1">Former</option>
            <option value="2">Current</option>
            <option value="3">No Info</option>
          </select>

          <button type="submit">
            {loading ? "Analyzing..." : "Predict"}
          </button>
        </form>

        <ResultCard result={result} />
      </div>
    </>
  );
};

export default DiabetesForm;
