const Roles = () => {
  return (
    <>
      {/* ===== INTERNAL CSS ===== */}
      <style>
        {`
          .roles {
            padding: 80px 40px;
            background: #ffffff;
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 40px;
            max-width: 1100px;
            margin: 0 auto;
          }

          .role-card {
            background: linear-gradient(135deg, #f8fafc, #ecfeff);
            padding: 30px;
            border-radius: 16px;
            border: 1px solid #e2e8f0;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.06);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }

          .role-card:hover {
            transform: translateY(-6px);
            box-shadow: 0 18px 40px rgba(0, 0, 0, 0.1);
          }

          .role-card h3 {
            font-size: 22px;
            font-weight: 700;
            color: #0f172a;
            margin-bottom: 16px;
            border-left: 4px solid #2563eb;
            padding-left: 12px;
          }

          .role-card ul {
            list-style: none;
            padding: 0;
            margin: 0;
          }

          .role-card ul li {
            font-size: 15px;
            color: #475569;
            margin-bottom: 10px;
            padding-left: 24px;
            position: relative;
          }

          .role-card ul li::before {
            content: "✔";
            position: absolute;
            left: 0;
            color: #2563eb;
            font-size: 14px;
          }

          @media (max-width: 768px) {
            .roles {
              grid-template-columns: 1fr;
              padding: 60px 20px;
            }
          }
        `}
      </style>

      {/* ===== ROLES UI ===== */}
      <section className="roles">
        <div className="role-card">
          <h3>Patient Features</h3>
          <ul>
            <li>AI health risk prediction</li>
            <li>Medical history tracking</li>
            <li>Doctor consultations</li>
            <li>Appointment scheduling</li>
            <li>Lab report management</li>
          </ul>
        </div>

        <div className="role-card">
          <h3>Doctor Features</h3>
          <ul>
            <li>AI-assisted diagnosis</li>
            <li>Patient dashboard</li>
            <li>Video consultations</li>
            <li>EHR management</li>
            <li>Analytics & reporting</li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Roles;
