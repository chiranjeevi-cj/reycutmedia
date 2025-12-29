import React from 'react';
import { FileText, Camera, MonitorPlay, MessageCircle, ArrowRight } from 'lucide-react';

const WhatWeDo = () => {
  const steps = [
    {
      id: 1,
      title: 'Script',
      description: 'We craft compelling narratives that resonate with your audience.',
      icon: <FileText size={32} />,
      color: '#6366f1' // Indigo
    },
    {
      id: 2,
      title: 'Shoot',
      description: 'High-quality filming with top-tier equipment and direction.',
      icon: <Camera size={32} />,
      color: '#ec4899' // Pink
    },
    {
      id: 3,
      title: 'Edit',
      description: 'Professional cutting, color grading, and sound design.',
      icon: <MonitorPlay size={32} />,
      color: '#8b5cf6' // Violet
    },
    {
      id: 4,
      title: 'Social Media',
      description: 'Uploading, community management, and engagement handling.',
      icon: <MessageCircle size={32} />,
      color: '#10b981' // Emerald
    }
  ];

  return (
    <section id="what-we-do" className="section what-we-do">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">What We Do</h2>
          <p className="section-subtitle">From concept to comments, we handle the entire lifecycle.</p>
        </div>

        <div className="steps-container">
          {steps.map((step, index) => (
            <div key={step.id} className="step-item">
              <div className="step-card">
                <div className="icon-wrapper" style={{ backgroundColor: `${step.color}15`, color: step.color }}>
                  {step.icon}
                </div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-desc">{step.description}</p>
                <div className="step-number">{index + 1}</div>
              </div>
              {index < steps.length - 1 && (
                <div className="step-connector">
                  <ArrowRight size={24} className="connector-icon" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .what-we-do {
          background-color: #fff;
        }

        .section-header {
          margin-bottom: 4rem;
        }

        .section-title {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }

        .section-subtitle {
          color: var(--color-text-muted);
          font-size: 1.1rem;
        }

        .steps-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 2rem;
        }

        .step-item {
          flex: 1;
          display: flex;
          align-items: center;
          min-width: 250px;
        }

        .step-card {
          background: #fff;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-lg);
          padding: 2rem;
          text-align: center;
          transition: all 0.3s ease;
          position: relative;
          width: 100%;
          box-shadow: var(--shadow-sm);
        }

        .step-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-lg);
          border-color: var(--color-primary);
        }

        .icon-wrapper {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
        }

        .step-title {
          font-size: 1.25rem;
          margin-bottom: 0.5rem;
        }

        .step-desc {
          font-size: 0.95rem;
          color: var(--color-text-muted);
        }

        .step-number {
          position: absolute;
          top: 1rem;
          right: 1rem;
          font-size: 4rem;
          font-weight: 800;
          color: #f1f5f9;
          z-index: -1;
          line-height: 1;
        }

        .step-connector {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 1rem;
          color: var(--color-text-muted);
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0% { opacity: 0.5; }
          50% { opacity: 1; }
          100% { opacity: 0.5; }
        }

        @media (max-width: 1024px) {
          .steps-container {
            flex-direction: column;
          }
          
          .step-item {
            width: 100%;
            flex-direction: column;
          }
          
          .step-connector {
            transform: rotate(90deg);
            margin: 1rem 0;
          }
        }
      `}</style>
    </section>
  );
};

export default WhatWeDo;
