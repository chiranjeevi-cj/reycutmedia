import React from 'react';
import { Mail, Instagram, MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="contact-wrapper">
          <div className="section-header text-center">
            <h2 className="section-title">Get In Touch</h2>
            <p className="section-subtitle">Ready to create your masterpiece? Let's talk.</p>
          </div>

          <div className="contact-cards">
            <a href="mailto:reycutmedia@gmail.com" className="contact-card">
              <div className="icon-box">
                <Mail size={32} />
              </div>
              <h3>Email Us</h3>
              <p>reycutmedia@gmail.com</p>
            </a>

            <a href="https://wa.me/917871261403" target="_blank" rel="noopener noreferrer" className="contact-card">
              <div className="icon-box">
                <MessageCircle size={32} />
              </div>
              <h3>WhatsApp</h3>
              <p>+91 78712 61403</p>
            </a>

            <a href="https://instagram.com/rey_cuts_01" target="_blank" rel="noopener noreferrer" className="contact-card">
              <div className="icon-box">
                <Instagram size={32} />
              </div>
              <h3>Instagram</h3>
              <p>@rey_cuts_01</p>
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .contact-section {
          background-color: var(--color-bg-alt);
        }

        .contact-wrapper {
          max-width: 900px;
          margin: 0 auto;
        }

        .contact-cards {
          display: flex;
          justify-content: center;
          gap: 2rem;
          margin-top: 3rem;
          flex-wrap: wrap;
        }

        .contact-card {
          background: var(--color-bg-card, var(--color-bg-main));
          padding: 2rem;
          border-radius: var(--radius-lg);
          text-align: center;
          width: 250px;
          border: 1px solid var(--color-border);
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .contact-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-lg);
          border-color: var(--color-primary);
        }

        .icon-box {
          width: 64px;
          height: 64px;
          background-color: var(--color-bg-alt);
          color: var(--color-primary);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1rem;
          transition: all 0.3s ease;
        }

        .contact-card:hover .icon-box {
          background-color: var(--color-primary);
          color: #fff;
        }

        .contact-card h3 {
          margin-bottom: 0.5rem;
          font-size: 1.25rem;
        }

        .contact-card p {
          color: var(--color-text-muted);
          font-size: 0.95rem;
        }
      `}</style>
    </section>
  );
};

export default Contact;
