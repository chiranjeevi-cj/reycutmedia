import React from 'react';
import logoFinal from '../assets/logo-final-v3.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo-container">
              <img src={logoFinal} alt="REYCUT MEDIA" className="footer-logo" loading="lazy" decoding="async" />
              <h2 className="footer-brand-text">REYCUT <span>MEDIA</span></h2>
            </div>
            <p>Where Stories Get Their Perfect Cut.</p>
          </div>
          <div className="footer-copyright">
            <p>&copy; {new Date().getFullYear()} REYCUT MEDIA. All rights reserved.</p>
          </div>
        </div>
      </div>
      <style>{`
        .footer {
          background-color: #1e293b;
          color: #fff;
          padding: 4rem 0;
        }

        .footer-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 2rem;
        }
        
        .footer-logo-container {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 0.5rem;
          justify-content: center;
        }

        .footer-logo {
          height: 32px;
          margin-bottom: 0;
          filter: brightness(0) invert(1);
        }
        
        .footer-brand-text {
          font-size: 1.5rem;
          margin: 0;
          line-height: 1;
          color: #fff;
        }
        
        .footer-brand-text span {
          color: var(--color-primary);
        }

        .footer-brand p {
          color: #94a3b8;
        }

        .footer-copyright {
          border-top: 1px solid #334155;
          padding-top: 2rem;
          width: 100%;
          color: #64748b;
          font-size: 0.875rem;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
