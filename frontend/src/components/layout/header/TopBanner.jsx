import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const TopBanner = () => {
  return (
    <div className="top-announcement-bar">
      <div className="top-banner-inner">
        <span className="banner-tag">
          <Sparkles size={12} /> NAAC & AICTE Ready
        </span>
        <span className="banner-text">
          India's #1 AI-Powered Training & Placement Management Platform 2026
        </span>
        <Link to="/login" className="banner-link">
          Access Placement Cell <ArrowRight size={13} />
        </Link>
      </div>
    </div>
  );
};

export default TopBanner;
