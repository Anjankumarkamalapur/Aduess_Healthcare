import { Link, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // ✅ Detect login state properly
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, [location]);

  // 🔥 Logout
  const handleLogout = () => {
    localStorage.clear();
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <>
      <style>
        {`
          body {
            margin: 0;
          }

          .nav {
            position: sticky;
            top: 0;
            z-index: 1000;

            display: flex;
            align-items: center;
            justify-content: space-between;

            padding: 18px 52px;

            background: linear-gradient(
              135deg,
              rgba(255, 255, 255, 0.55),
              rgba(192, 217, 249, 0.45)
            );

            backdrop-filter: blur(22px) saturate(180%);
            border-bottom: 1px solid rgba(37, 99, 235, 0.25);

            box-shadow:
              0 12px 40px rgba(37, 99, 235, 0.18),
              inset 0 1px 0 rgba(255, 255, 255, 0.35);
          }

          .logo {
            font-size: 23px;
            font-weight: 700;
            color: #2563eb;
            text-decoration: none;
          }

          .nav-links {
            list-style: none;
            display: flex;
            gap: 34px;
            margin: 0;
            padding: 0;
            align-items: center;
          }

          .nav-links li {
            font-size: 16px;
            font-weight: 500;
            color: #334155;
            position: relative;
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

          .logout-btn {
            background: none;
            border: none;
            font-size: 16px;
            cursor: pointer;
            color: #334155;
          }

          .logout-btn:hover {
            color: #ef4444;
          }
        `}
      </style>

      <nav className="nav">
        <Link to="/" className="logo">
          audesshealthcare
        </Link>

        <ul className="nav-links">
          {/* ✅ Show only if logged in */}
          {isLoggedIn && (
            <>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/#features">Features</Link></li>
              <li><Link to="/#symptoms">Symptoms</Link></li>
              <li><Link to="/appointment">Appointment</Link></li>
              <li><Link to="/#contact">Contact</Link></li>
            </>
          )}

          {/* 🔥 Login / Logout */}
          <li>
            {isLoggedIn ? (
              <button onClick={handleLogout} className="logout-btn">
                Logout
              </button>
            ) : (
              <Link to="/login">Login</Link>
            )}
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;