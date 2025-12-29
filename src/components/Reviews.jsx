import React from 'react';
import { Star } from 'lucide-react';

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: 'Sarah Jenkins',
      role: 'Content Creator',
      text: "Only REYCUT understands the pacing I need. My engagement tripled after switching to them.",
      rating: 5
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Marketing Director',
      text: "Incredible attention to detail. The color grading took our brand videos to a whole new level.",
      rating: 5
    },
    {
      id: 3,
      name: 'Jessica Lee',
      role: 'YouTuber',
      text: "Fast, reliable, and super creative. They handle my entire workflow now.",
      rating: 5
    }
  ];

  return (
    <section id="reviews" className="section reviews-section">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">Happy Clients</h2>
          <p className="section-subtitle">Don't just take our word for it.</p>
        </div>

        <div className="reviews-grid">
          {reviews.map((review) => (
            <div key={review.id} className="review-card">
              <div className="stars">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="#f59e0b" stroke="#f59e0b" />
                ))}
              </div>
              <p className="review-text">"{review.text}"</p>
              <div className="review-author">
                <div className="author-avatar">{review.name.charAt(0)}</div>
                <div className="author-info">
                  <h4 className="author-name">{review.name}</h4>
                  <span className="author-role">{review.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .reviews-section {
          background-color: var(--color-bg-main);
        }

        .reviews-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .review-card {
          padding: 2rem;
          background: var(--color-bg-card, var(--color-bg-main));
          border: 1px solid var(--color-border);
          border-radius: var(--radius-lg);
          transition: transform 0.3s ease;
        }

        .review-card:hover {
          transform: translateY(-5px);
          border-color: var(--color-primary);
          box-shadow: var(--shadow-md);
        }

        .stars {
          display: flex;
          gap: 4px;
          margin-bottom: 1rem;
        }

        .review-text {
          font-size: 1.1rem;
          margin-bottom: 2rem;
          font-style: italic;
          color: var(--color-text-main);
        }

        .review-author {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .author-avatar {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: var(--color-bg-alt);
          color: var(--color-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 1.25rem;
        }

        .author-name {
          font-size: 1rem;
          margin-bottom: 2px;
        }

        .author-role {
          font-size: 0.875rem;
          color: var(--color-text-muted);
        }
      `}</style>
    </section>
  );
};

export default Reviews;
