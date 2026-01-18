import { Link } from "react-router-dom";

const SymptomSection = () => {
  return (
    <>
      {/* ===== INTERNAL CSS ===== */}
      <style>
        {`
          .symptom-section {
            padding: 80px 40px;
            background: linear-gradient(135deg, #ecfeff, #ffffff);
            text-align: center;
          }

          .symptom-section h2 {
            font-size: 34px;
            font-weight: 700;
            color: #0f172a;
            margin-bottom: 18px;
          }

          .symptom-section p {
            font-size: 16px;
            color: #475569;
            max-width: 700px;
            margin: 0 auto 40px;
          }

          .symptom-card {
            max-width: 520px;
            margin: 0 auto;
            background: white;
            padding: 40px 30px;
            border-radius: 20px;
            border: 1px solid #e2e8f0;
            box-shadow: 0 18px 45px rgba(37, 99, 235, 0.15);
          }

          .symptom-card h3 {
            font-size: 22px;
            margin-bottom: 10px;
            color: #0f172a;
          }

          .symptom-card p {
            font-size: 14px;
            margin-bottom: 26px;
          }

          .symptom-btn {
            padding: 14px 28px;
            font-size: 15px;
            font-weight: 600;
            border-radius: 10px;
            border: none;
            cursor: pointer;
            background: linear-gradient(90deg, #2563eb, #0ea5e9);
            color: white;
            transition: transform 0.2s ease, box-shadow 0.2s ease;
          }

          .symptom-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 12px 28px rgba(37, 99, 235, 0.35);
          }
        `}
      </style>

      {/* ===== UI ===== */}
      <section className="symptom-section" id="symptoms">
        <h2>Symptom-Based Disease Prediction</h2>
        <p>
          Enter your symptoms and let our AI analyze possible health conditions
          using advanced machine learning models.
        </p>

        <div className="symptom-card">
          <h3>Check by Symptoms</h3>
          <p>
            Select symptoms such as fever, headache, fatigue, nausea and get an
            instant AI-based prediction.
          </p>

          <Link to="/symptoms">
            <button className="symptom-btn">Start Prediction</button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default SymptomSection;
