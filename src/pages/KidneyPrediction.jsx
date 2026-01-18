import { useState } from "react";
import { predictKidney } from "../api";
import ResultCard from "../components/ResultCard";

const KidneyForm = () => {
  const [formData, setFormData] = useState({
    age: "",
    bp: "",
    sg: "",
    al: "",
    su: "",
    bgr: "",
    bu: "",
    sc: "",
    hemo: ""
  });

  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResult("");

    try {
      const res = await predictKidney(formData);
      setResult(res.data.result);
    } catch {
      setResult("Error predicting kidney disease");
    }

    setLoading(false);
  };

  return (
    <>
      {/* ===== INTERNAL CSS ===== */}
      <style>
        {`
          .kidney-container {
            max-width: 520px;
            margin: 0 auto;
            padding: 30px;
            background: white;
            border-radius: 18px;
            box-shadow: 0 15px 40px rgba(0, 0, 0, 0.08);
          }

          .kidney-container h2 {
            text-align: center;
            font-size: 24px;
            font-weight: 700;
            color: #0f172a;
            margin-bottom: 24px;
          }

          .kidney-form {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 14px;
          }

          .kidney-form input {
            padding: 12px 14px;
            font-size: 14px;
            border-radius: 8px;
            border: 1px solid #cbd5f5;
            outline: none;
            transition: border 0.2s ease, box-shadow 0.2s ease;
          }

          .kidney-form input:focus {
            border-color: #2563eb;
            box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.15);
          }

          .kidney-form button {
            grid-column: span 2;
            margin-top: 10px;
            padding: 14px;
            font-size: 15px;
            font-weight: 600;
            border-radius: 10px;
            border: none;
            cursor: pointer;
            background: linear-gradient(90deg, #2563eb, #0ea5e9);
            color: white;
            transition: transform 0.2s ease, box-shadow 0.2s ease;
          }

          .kidney-form button:hover {
            transform: translateY(-2px);
            box-shadow: 0 12px 28px rgba(37, 99, 235, 0.35);
          }

          .kidney-form button:disabled {
            opacity: 0.7;
            cursor: not-allowed;
          }

          @media (max-width: 600px) {
            .kidney-form {
              grid-template-columns: 1fr;
            }

            .kidney-form button {
              grid-column: span 1;
            }
          }
        `}
      </style>

      {/* ===== FORM UI ===== */}
      <div className="kidney-container">
        <h2>Patient Health Details</h2>

        <form onSubmit={handleSubmit} className="kidney-form">
          {Object.keys(formData).map((key) => (
            <input
              key={key}
              name={key}
              placeholder={key.toUpperCase()}
              value={formData[key]}
              onChange={handleChange}
              required
            />
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

export default KidneyForm;
