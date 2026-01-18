const Services = () => {
  return (
    <>
      {/* ===== INTERNAL CSS ===== */}
      <style>
        {`
          .services {
            padding: 80px 40px;
            background: #f8fafc;
            text-align: center;
          }

          .services h2 {
            font-size: 34px;
            font-weight: 700;
            color: #0f172a;
            margin-bottom: 50px;
          }

          .services-cards {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
            gap: 28px;
            max-width: 900px;
            margin: 0 auto;
          }

          .service-card {
            background: white;
            padding: 30px 24px;
            border-radius: 16px;
            border: 1px solid #e2e8f0;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            text-align: left;
          }

          .service-card:hover {
            transform: translateY(-6px);
            box-shadow: 0 18px 40px rgba(0, 0, 0, 0.1);
          }

          .service-card h3 {
            font-size: 20px;
            color: #0f172a;
            margin-bottom: 8px;
          }

          .service-card p {
            font-size: 14px;
            color: #475569;
            margin-bottom: 16px;
          }

          .service-card button {
            padding: 10px 18px;
            font-size: 14px;
            font-weight: 600;
            border-radius: 8px;
            border: none;
            cursor: pointer;
            background: linear-gradient(90deg, #2563eb, #0ea5e9);
            color: white;
            transition: transform 0.2s ease, box-shadow 0.2s ease;
          }

          .service-card button:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 18px rgba(37, 99, 235, 0.3);
          }

          @media (max-width: 768px) {
            .services {
              padding: 60px 20px;
            }

            .services h2 {
              font-size: 28px;
            }
          }
        `}
      </style>

      {/* ===== SERVICES UI ===== */}
      <section className="services">
        <h2>AI Health Predictions</h2>

        <div className="services-cards">
          <div className="service-card">
            <h3>Kidney Disease</h3>
            <p>Predict kidney disease risk using AI</p>
            <a href="/kidney">
              <button>Predict</button>
            </a>
            <a href="/heart">
              <button>Predict</button>
            </a>
          </div>

          <div className="service-card">
            <h3>Heart Disease</h3>
            <p>Coming Soon</p>
          </div>

          <div className="service-card">
            <h3>Diabetes</h3>
            <p>Coming Soon</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
