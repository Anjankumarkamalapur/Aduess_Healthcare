import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      {/* ===== INTERNAL CSS ===== */}
      <style>
        {`
          body {
            margin: 0;
          }

          .nav {
            position: sticky;
            top: 0;
            left: 0;
            z-index: 1000;

            display: flex;
            align-items: center;
            justify-content: space-between;

            padding: 18px 52px;

            /* Adaptive glassmorphism */
            background: linear-gradient(
              135deg,
              rgba(255, 255, 255, 0.55),
              rgba(192, 217, 249, 0.45)
            );

            backdrop-filter: blur(22px) saturate(180%);
            -webkit-backdrop-filter: blur(22px) saturate(180%);

            border-bottom: 1px solid rgba(37, 99, 235, 0.25);

            box-shadow:
              0 12px 40px rgba(37, 99, 235, 0.18),
              inset 0 1px 0 rgba(255, 255, 255, 0.35);

            transition: background 0.3s ease, box-shadow 0.3s ease;
          }

          /* Dark mode glass */
          body.dark .nav {
            background: linear-gradient(
              135deg,
              rgba(2, 6, 23, 0.6),
              rgba(30, 41, 59, 0.55)
            );

            border-bottom: 1px solid rgba(148, 163, 184, 0.15);

            box-shadow:
              0 12px 40px rgba(0, 0, 0, 0.45),
              inset 0 1px 0 rgba(255, 255, 255, 0.05);
          }

          .logo {
            font-size: 23px;
            font-weight: 700;
            color: #2563eb;
            letter-spacing: 0.6px;
            cursor: pointer;
            text-decoration: none;
          }

          body.dark .logo {
            color: #60a5fa;
          }

          .nav-links {
            list-style: none;
            display: flex;
            align-items: center;
            gap: 34px;
            margin: 0;
            padding: 0;
          }

          .nav-links li {
            font-size: 16px;
            font-weight: 500;
            color: #334155;
            cursor: pointer;
            position: relative;
            transition: color 0.3s ease;
          }

          body.dark .nav-links li {
            color: #cbd5f5;
          }

          .nav-links a {
            text-decoration: none;
            color: inherit;
          }

          .nav-links li::after {
            content: "";
            position: absolute;
            left: 0;
            bottom: -6px;
            width: 0;
            height: 2px;
            background: linear-gradient(90deg, #2563eb, #0ea5e9);
            transition: width 0.3s ease;
          }

          .nav-links li:hover::after {
            width: 100%;
          }

          /* Dark mode toggle button */
          .theme-toggle {
            padding: 8px 14px;
            border-radius: 10px;
            border: none;
            cursor: pointer;
            font-size: 14px;
            font-weight: 600;
            background: linear-gradient(90deg, #2563eb, #0ea5e9);
            color: white;
          }

          @media (max-width: 768px) {
            .nav {
              padding: 14px 24px;
            }

            .nav-links {
              gap: 16px;
              font-size: 14px;
            }
          }
        `}
      </style>

      {/* ===== HEADER UI ===== */}
      <nav className="nav">
        <a href="#hero" className="logo">
          audesshealthcare
        </a>

        <ul className="nav-links">
          <li><a href="#hero">Home</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#symptoms">Symptoms</a></li>

          {/* ROUTE-BASED LINK */}
          <li>
            <Link to="/appointment">Appointment</Link>
          </li>

          <li><a href="#contact">Contact</a></li>
        </ul>

      </nav>
    </>
  );
};

export default Header;
