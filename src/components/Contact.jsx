const Contact = () => {
  return (
    <>
      {/* ===== INTERNAL CSS ===== */}
      <style>
        {`
          .contact {
            padding: 80px 40px;
            background: linear-gradient(135deg, #f8fafc, #ecfeff);
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 40px;
            align-items: center;
            max-width: 1100px;
            margin: 0 auto;
          }

          .contact h3 {
            font-size: 26px;
            font-weight: 700;
            color: #0f172a;
            margin-bottom: 12px;
          }

          .contact p {
            font-size: 15px;
            color: #475569;
            line-height: 1.6;
          }

          .contact form {
            background: white;
            padding: 30px;
            border-radius: 14px;
            box-shadow: 0 12px 30px rgba(0, 0, 0, 0.06);
            display: flex;
            flex-direction: column;
            gap: 14px;
          }

          .contact input,
          .contact textarea {
            padding: 12px 14px;
            font-size: 14px;
            border-radius: 8px;
            border: 1px solid #cbd5f5;
            outline: none;
            transition: border 0.2s ease, box-shadow 0.2s ease;
            font-family: inherit;
          }

          .contact textarea {
            resize: none;
            min-height: 100px;
          }

          .contact input:focus,
          .contact textarea:focus {
            border-color: #2563eb;
            box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.15);
          }

          .contact button {
            margin-top: 10px;
            padding: 12px;
            font-size: 15px;
            font-weight: 600;
            border-radius: 8px;
            border: none;
            cursor: pointer;
            background: linear-gradient(90deg, #2563eb, #0ea5e9);
            color: white;
            transition: transform 0.2s ease, box-shadow 0.2s ease;
          }

          .contact button:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 25px rgba(37, 99, 235, 0.35);
          }

          @media (max-width: 768px) {
            .contact {
              grid-template-columns: 1fr;
              padding: 60px 20px;
            }
          }
        `}
      </style>

      {/* ===== CONTACT UI ===== */}
      <section className="contact" id="contact">
        <div>
          <h3>Contact Information</h3>
          <p>
            Have questions about audess or our AI-powered medical solutions?
            Reach out to us and we’ll get back to you shortly.
          </p>
          <p>Email: <strong>contact@audess.ai</strong></p>
        </div>

        <form>
          <input placeholder="Full Name" />
          <input placeholder="Email Address" />
          <textarea placeholder="Message" />
          <button type="button">Send Message</button>
        </form>
      </section>
    </>
  );
};

export default Contact;
