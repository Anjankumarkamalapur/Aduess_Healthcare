const Footer = () => {
  return (
    <>
      {/* ===== INTERNAL CSS ===== */}
      <style>
        {`
          .footer {
            background: linear-gradient(90deg, #252d3fff, #272b3aff);
            color: #e5e7eb;
            text-align: center;
            padding: 28px 20px;
            margin-top: 80px;
          }

          .footer p {
            margin: 6px 0;
            font-size: 14px;
            color: #cbd5f5;
          }

          .footer p:first-child {
            font-weight: 600;
            color: #ffffff;
          }
        `}
      </style>

      {/* ===== FOOTER UI ===== */}
      <footer className="footer">
        <p>© 2025 audess. All rights reserved.</p>
      </footer>
    </>
  );
};

export default Footer;