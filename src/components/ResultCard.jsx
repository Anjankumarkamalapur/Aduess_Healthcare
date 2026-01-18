const ResultCard = ({ result }) => {
  if (!result) return null;

  return (
    <>
      {/* ===== INTERNAL CSS ===== */}
      <style>
        {`
          .result-card {
            margin-top: 24px;
            padding: 20px;
            border-radius: 12px;
            background: linear-gradient(135deg, #ecfeff, #ffffff);
            border: 1px solid #0ea5e9;
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.05);
            animation: fadeIn 0.4s ease-in-out;
          }

          .result-card h3 {
            margin-bottom: 10px;
            font-size: 18px;
            color: #0f172a;
          }

          .result-card p {
            font-size: 15px;
            color: #334155;
            margin: 6px 0;
          }

          .result-note {
            font-size: 12px;
            color: #64748b;
            margin-top: 12px;
            line-height: 1.4;
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(6px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>

      {/* ===== RESULT CARD UI ===== */}
      <div className="result-card">
        <h3>Prediction Result</h3>
        <p>{result}</p>
        <p className="result-note">
          ⚠ This is an AI-based prediction and not a medical diagnosis.
        </p>
      </div>
    </>
  );
};

export default ResultCard;
