import doctorImg from "../assets/doctor.png";

const Hero = () => {
  return (
    <>
      {/* ===== INTERNAL CSS ===== */}
      <style>
        {`
          .hero {
            min-height: 70vh;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 80px 60px;
            background: linear-gradient(135deg, #ecfeff, #ffffff);
            gap: 40px;
          }

          .hero-content {
            flex: 1;
          }

          .hero-content h1 {
            font-size: 44px;
            font-weight: 700;
            color: #0f172a;
            line-height: 1.2;
            margin-bottom: 16px;
          }

          .hero-content p {
            font-size: 18px;
            color: #475569;
            max-width: 600px;
            margin-bottom: 36px;
          }

          .hero-buttons {
            display: flex;
            gap: 16px;
            flex-wrap: wrap;
          }

          .primary-btn {
            padding: 14px 26px;
            font-size: 15px;
            font-weight: 600;
            border-radius: 8px;
            border: none;
            cursor: pointer;
            background: linear-gradient(90deg, #2563eb, #0ea5e9);
            color: white;
            transition: transform 0.2s ease, box-shadow 0.2s ease;
          }

          .primary-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 25px rgba(37, 99, 235, 0.3);
          }

          .secondary-btn {
            padding: 14px 26px;
            font-size: 15px;
            font-weight: 600;
            border-radius: 8px;
            cursor: pointer;
            background: transparent;
            color: #2563eb;
            border: 2px solid #2563eb;
            transition: background 0.3s ease, color 0.3s ease;
          }

          .secondary-btn:hover {
            background: #2563eb;
            color: white;
          }

          .hero-image {
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .hero-image img {
            max-width: 490px;
            width: 100%;
            border-radius: 24px;
          }

          @media (max-width: 900px) {
            .hero {
              flex-direction: column;
              text-align: center;
              padding: 60px 24px;
            }

            .hero-buttons {
              justify-content: center;
            }

            .hero-content h1 {
              font-size: 32px;
            }
          }
        `}
      </style>

      {/* ===== HERO UI ===== */}
      <section className="hero" id="hero">
        {/* LEFT CONTENT */}
        <div className="hero-content">
          <h1>AI-Powered Medical Laboratory & Consultation</h1>
          <p>Bridging AI and Healthcare for Smarter Diagnosis</p>

          <div className="hero-buttons">
            <a href="#features">
              <button className="primary-btn">Explore the System</button>
            </a>
            <button className="secondary-btn">Watch Demo</button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="hero-image">
          <img src={doctorImg} alt="Doctor" />
        </div>
      </section>
    </>
  );
};

export default Hero;
