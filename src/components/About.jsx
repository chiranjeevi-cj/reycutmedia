import React from 'react';
import { Award, Users, Zap } from 'lucide-react';
import aboutVisual from '../assets/about-visual.png';

const About = () => {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="about-grid">
          <div className="about-content">
            <h2 className="section-title">Who We Are</h2>
            <p className="lead-text">
              We are a collective of visual storytellers obsessed with the perfect cut.
            </p>
            <p className="body-text">
              At REYCUT MEDIA, we believe that editing is the soul of cinema. It's where the magic truly happens. 
              Our team combines technical expertise with artistic vision to deliver content that doesn't just look good—it feels right.
              From high-energy social media clips to cinematic brand documentaries, we bring professional polish to every frame.
            </p>
            
            <div className="features-list">
              <div className="feature">
                <Users size={24} className="feature-icon" />
                <span>Expert Team</span>
              </div>
              <div className="feature">
                <Zap size={24} className="feature-icon" />
                <span>Fast Turnaround</span>
              </div>
              <div className="feature">
                <Award size={24} className="feature-icon" />
                <span>Premium Quality</span>
              </div>
            </div>
          </div>
          
          <div className="about-visual">
             <div className="visual-card">
               <img src={aboutVisual} alt="Team working in studio" className="about-img" />
             </div>
          </div>
        </div>
      </div>

      <style>{`
        .about-section {
          background-color: var(--color-bg-alt);
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .section-title {
          font-size: 2.5rem;
          margin-bottom: 1.5rem;
        }

        .lead-text {
          font-size: 1.25rem;
          font-weight: 500;
          color: var(--color-primary);
          margin-bottom: 1.5rem;
        }

        .body-text {
          color: var(--color-text-muted);
          margin-bottom: 2.5rem;
        }

        .features-list {
          display: flex;
          gap: 2rem;
        }

        .feature {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-weight: 600;
        }

        .feature-icon {
          color: var(--color-primary);
        }

        .visual-card {
          width: 100%;
          aspect-ratio: 4/3;
          border-radius: var(--radius-xl);
          position: relative;
          overflow: hidden;
          box-shadow: var(--shadow-xl);
          transform: rotate(2deg);
          transition: transform 0.3s ease;
        }

        .visual-card:hover {
          transform: rotate(0deg);
        }

        .about-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .gradient-overlay {
          display: none;
        }

        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          
          .features-list {
            flex-direction: column;
            gap: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
