import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import Button from '../../common/Button';

export const HeroContent = () => (
  <div className="hero-content">
    <div className="hero-badge-wrapper">
      <div className="hero-pill-badge">
        <Sparkles size={13} />
        <span>Campus Placement Automation 2026</span>
      </div>
    </div>
    <h1 className="hero-title">
      Training &amp; Placement <br />
      <span className="hero-title-highlight">Management Made Easy.</span>
    </h1>
    <p className="hero-description">
      Manage recruiters, campus drives, job applications, interview rounds, placement tracking, student feedback and employer relationships from one centralised platform.
    </p>
    <div className="hero-actions">
      <Button href="/login" variant="primary" size="lg" icon={<ArrowRight size={16} />} iconPosition="right">
        Explore Live Platform
      </Button>
      <Button href="/login" variant="outline" size="lg">
        Access Role Portals
      </Button>
    </div>
  </div>
);

export default HeroContent;
