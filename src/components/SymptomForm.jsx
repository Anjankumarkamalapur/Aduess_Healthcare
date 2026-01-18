import { useState } from "react";
import { predictSymptoms } from "../api";
import ResultCard from "./ResultCard";

const symptomsList = [
  "fever",
  "cough",
  "headache",
  "fatigue",
  "nausea",
  "chest_pain",
  "breathlessness",
  "itching",
  "frequent_urination"
];

const SymptomForm = () => {
  const [symptoms, setSymptoms] = useState({});
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const toggleSymptom = (symptom) => {
    setSymptoms({ ...symptoms, [symptom]: !symptoms[symptom] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResult("");

    const payload = {};
    symptomsList.forEach(
      (s) => (payload[s] = symptoms[s] ? 1 : 0)
    );

    try {
      const res = await predictSymptoms(payload);
      setResult(`Possible Disease: ${res.data.predicted_disease}`);
    } catch {
      setResult("Error predicting disease");
    }

    setLoading(false);
  };

  return (
    <>
      {/* ===== INTERNAL CSS ===== */}
      <style>
        {`
          .symptom-container {
            max-width: 620px;
            margin: 40px auto;
            padding: 34px;
            background: white;
            border-radius: 22px;
            box-shadow: 0 20px 45px rgba(37, 99, 235, 0.12);
          }

          .symptom-container h2 {
            text-align: center;
            font-size: 26px;
            font-weight: 700;
            color: #0f172a;
            margin-bottom: 26px;
          }

          .symptom-form {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
          }

          .symptom-item {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 10px 12px;
            border-radius: 10px;
            background: #f8fafc;
            border: 1px solid #e2e8f0;
            cursor: pointer;
            transition: background 0.2s ease, box-shadow 0.2s ease;
          }

          .symptom-item:hover {
            background: #ecfeff;
            box-shadow: 0 6px 16px rgba(37, 99, 235, 0.12);
          }

          .symptom-item input {
            accent-color: #2563eb;
            transform: scale(1.1);
          }

          .symptom-item span {
            font-size: 14px;
            font-weight: 500;
            color: #334155;
          }

          .symptom-form button {
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

          .symptom-form button:hover {
            transform: translateY(-2px);
            box-shadow: 0 14px 32px rgba(37, 99, 235, 0.35);
          }

          .symptom-form button:disabled {
            opacity: 0.7;
            cursor: not-allowed;
          }

          @media (max-width: 600px) {
            .symptom-form {
              grid-template-columns: 1fr;
            }

            .symptom-form button {
              grid-column: span 1;
            }
          }
        `}
      </style>

      {/* ===== UI ===== */}
      <div className="symptom-container">
        <h2>Symptom-Based Disease Prediction</h2>

        <form onSubmit={handleSubmit} className="symptom-form">
          {symptomsList.map((symptom) => (
            <label key={symptom} className="symptom-item">
              <input
                type="checkbox"
                onChange={() => toggleSymptom(symptom)}
              />
              <span>{symptom.replace("_", " ").toUpperCase()}</span>
            </label>
          ))}

          <button type="submit" disabled={loading}>
            {loading ? "Analyzing..." : "Predict"}
          </button>
        </form>

        <ResultCard result={result} />
      </div>
    </>
  );
};

export default SymptomForm;
