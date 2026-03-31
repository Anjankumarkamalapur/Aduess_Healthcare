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

  // ✅ Toggle checkbox safely
  const toggleSymptom = (symptom) => {
    setSymptoms((prev) => ({
      ...prev,
      [symptom]: !prev[symptom]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ Get selected symptoms
    const selectedSymptoms = symptomsList.filter(
      (s) => symptoms[s]
    );

    // 🔥 Prevent empty request (IMPORTANT)
    if (selectedSymptoms.length === 0) {
      setResult("Please select at least one symptom");
      return;
    }

    setLoading(true);
    setResult("");

    try {
      const res = await predictSymptoms({
        symptoms: selectedSymptoms
      });

      // ✅ Safe response handling
      if (res?.data?.prediction) {
        setResult(`Possible Disease: ${res.data.prediction}`);
      } else {
        setResult("No prediction received");
      }

    } catch (err) {
      console.error("API ERROR:", err?.response?.data || err.message);
      setResult("Error predicting disease");
    }

    setLoading(false);
  };

  return (
    <>
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
            transition: 0.2s;
          }

          .symptom-item:hover {
            background: #ecfeff;
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
            transition: 0.2s;
          }

          .symptom-form button:hover {
            transform: translateY(-2px);
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

      <div className="symptom-container">
        <h2>Symptom-Based Disease Prediction</h2>

        <form onSubmit={handleSubmit} className="symptom-form">
          {symptomsList.map((symptom) => (
            <label key={symptom} className="symptom-item">
              <input
                type="checkbox"
                checked={!!symptoms[symptom]}
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