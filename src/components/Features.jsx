import { Link } from "react-router-dom";

const Features = () => {
  return (
    <>
      {/* ===== INTERNAL CSS ===== */}
      <style>
        {`
          .features {
            padding: 80px 40px;
            background: #ffffff;
            text-align: center;
          }

          .features h2 {
            font-size: 34px;
            font-weight: 700;
            color: #0f172a;
            margin-bottom: 50px;
          }

          .cards {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
            gap: 28px;
            max-width: 1100px;
            margin: 0 auto;
          }

          .card {
            background: #f8fafc;
            padding: 28px 22px;
            border-radius: 14px;
            border: 1px solid #e2e8f0;
            text-align: left;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }

          .card h3 {
            font-size: 18px;
            margin-bottom: 8px;
            color: #0f172a;
          }

          .card p {
            font-size: 14px;
            color: #475569;
            line-height: 1.5;
          }

          .card:hover {
            transform: translateY(-6px);
            box-shadow: 0 14px 30px rgba(0, 0, 0, 0.08);
          }

          /* COMMON BUTTON STYLE */
          .card button {
            margin-top: 14px;
            padding: 10px 16px;
            border-radius: 8px;
            border: none;
            font-size: 14px;
            font-weight: 600;
            cursor: pointer;
            background: linear-gradient(90deg, #2563eb, #0ea5e9);
            color: white;
            transition: transform 0.2s ease, box-shadow 0.2s ease;
          }

          .card button:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 18px rgba(37, 99, 235, 0.3);
          }

          /* Highlighted feature (USED FOR BOTH HEART & KIDNEY) */
          .highlight {
            background: linear-gradient(135deg, #ecfeff, #ffffff);
            border: 1px solid #0ea5e9;
            position: relative;
          }

          .highlight::before {
            content: "FEATURED";
            position: absolute;
            top: 14px;
            right: 14px;
            font-size: 10px;
            font-weight: 700;
            color: white;
            background: #2563eb;
            padding: 4px 8px;
            border-radius: 6px;
          }

          @media (max-width: 768px) {
            .features {
              padding: 60px 20px;
            }

            .features h2 {
              font-size: 28px;
            }
          }
        `}
      </style>

      {/* ===== FEATURES UI ===== */}
      <section className="features" id="features">
        <h2>Powerful Features</h2>

        <div className="cards">
          {/* HEART – NOW HIGHLIGHTED */}
          <div className="card highlight">
            <h3>Heart Disease Prediction</h3>
            <p>AI-powered analysis of cardiac risk</p>
            <Link to="/heart">
              <button>Predict</button>
            </Link>
          </div>

          {/* KIDNEY – HIGHLIGHTED */}
          <div className="card highlight">
            <h3>Kidney Health Analysis</h3>
            <p>AI-powered kidney disease prediction</p>
            <Link to="/kidney">
              <button>Predict</button>
            </Link>
          </div>

          <div className="card highlight">
            <h3>Liver Disease Detection</h3>
            <p>Early liver health insights to stay alert</p>
            <Link to="/liver">
              <button>Predict</button>
            </Link>
          </div>

          <div className="card highlight">
            <h3>Diabetes Prediction</h3>
            <p>AI-powered personalized diabetes prediction</p>
            <Link to="/diabetes">
              <button>Predict</button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
