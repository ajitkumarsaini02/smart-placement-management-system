import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';

const LoginShowcase = () => {
  return (
    <div className="split-auth-left">
      {/* Brand Logo */}
      <Link to="/" className="split-auth-brand" aria-label="PlaceTrack Home">
        <div className="split-brand-badge">Pt</div>
        <span className="split-brand-name">
          Place<span className="split-brand-highlight">Track</span>
        </span>
      </Link>

      {/* Hero Showcase Message */}
      <div className="split-showcase-main">
        <h1 className="showcase-headline">
          Your next<br />
          hire starts<br />
          here
        </h1>
        <p className="showcase-subtitle">
          Every student is verified. Every score is real.
        </p>

        {/* Highlight Stats */}
        <div className="showcase-stats-list">
          <div className="showcase-stat-item">
            <span className="stat-emoji" role="img" aria-label="Colleges">🏛️</span>
            <span>10+ COLLEGES</span>
          </div>
          <div className="showcase-stat-item">
            <span className="stat-emoji" role="img" aria-label="Students">🎓</span>
            <span>1,000+ STUDENTS</span>
          </div>
          <div className="showcase-stat-item">
            <span className="stat-emoji" role="img" aria-label="Companies">🏢</span>
            <span>10+ COMPANIES</span>
          </div>
        </div>
      </div>

      {/* Verified Talent Bottom Card Widget */}
      <div className="showcase-bottom-widget">
        <div className="widget-pill-badge">
          <Sparkles size={12} />
          <span>FIND VERIFIED TALENT</span>
        </div>
        <p className="widget-description">
          Skills, records, projects — verified by their colleges.
        </p>
      </div>
    </div>
  );
};

export default LoginShowcase;
