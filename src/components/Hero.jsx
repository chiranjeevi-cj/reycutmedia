import React from 'react';
import { ArrowRight } from 'lucide-react';
import heroBg from '../assets/hero-bg.png';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-background">
        <div className="overlay"></div>
        <img src={heroBg} alt="Studio working atmosphere" className="bg-image" />
      </div>
      
      <div className="container hero-content">
        <h1 className="hero-title">
          Where Stories Get Their <span className="highlight">Perfect Cut.</span>
        </h1>
        <p className="hero-subtitle">
          Professional video editing and media production that transforms raw footage into compelling narratives.
        </p>
        <div className="hero-actions">
          <a href="#contact" className="btn btn-primary">
            Start Your Project <ArrowRight size={20} style={{ marginLeft: '8px' }} />
          </a>
          <a href="#what-we-do" className="btn btn-outline">
            See Our Process
          </a>
        </div>
      </div>

      <style>{`
        .hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          overflow: hidden;
          padding-top: 80px;
        }

        .hero-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
        }

        .bg-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to right, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.7) 40%, rgba(0,0,0,0.3) 100%);
          z-index: 1;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 800px;
        }

        .hero-title {
          font-size: 4rem;
          line-height: 1.1;
          margin-bottom: 1.5rem;
          letter-spacing: -0.03em;
          color: #fff;
          background: none;
          -webkit-text-fill-color: initial;
        }
        
        .highlight {
          color: var(--color-primary);
          position: relative;
          display: inline-block;
        }
        
        /* Underline effect */
        .highlight::after {
          content: '';
          position: absolute;
          bottom: 5px;
          left: 0;
          width: 100%;
          height: 15px;
          background: rgba(99, 102, 241, 0.4);
          z-index: -1;
          transform: skewX(-15deg);
        }

        .hero-subtitle {
          font-size: 1.25rem;
          color: #e2e8f0; /* Light gray text */
          margin-bottom: 2.5rem;
          max-width: 600px;
        }

        .hero-actions {
          display: flex;
          gap: 1rem;
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem;
          }
          
          .hero-actions {
            flex-direction: column;
            align-items: flex-start;
          }
          
          .btn {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
