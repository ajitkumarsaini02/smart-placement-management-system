import React from 'react';
import { Briefcase, Users, TrendingUp } from 'lucide-react';

export const HeroPreview = () => (
  <div className="hero-dashboard-preview">
    <div className="preview-glow-top" />
    <div className="preview-glow-bottom" />
    <div className="dashboard-window">
      <div className="dashboard-window-header">
        <div className="window-dots">
          <span className="dot dot-close" />
          <span className="dot dot-minimize" />
          <span className="dot dot-expand" />
        </div>
        <div className="window-url-bar">
          <span className="window-url-text">app.placetrack.edu/tpo/dashboard</span>
        </div>
        <div className="window-live-status">
          <span className="pulse-dot" />
          <span>Live Season 2026</span>
        </div>
      </div>
      <div className="dashboard-window-body">
        <div className="portal-header-greeting">
          <div>
            <h4 className="portal-greeting-title">TPO Command Center</h4>
            <p className="portal-greeting-sub">Academic Year 2025–2026 • National Institute of Tech</p>
          </div>
          <span className="badge-live-tag">● Season Active</span>
        </div>
        <div className="mock-stat-cards-grid">
          <div className="mock-stat-card">
            <span className="mock-stat-label"><Briefcase size={13} /> Active Drives</span>
            <span className="mock-stat-val text-emerald">24 Drives</span>
            <span className="mock-stat-trend">↑ 8 this week</span>
          </div>
          <div className="mock-stat-card">
            <span className="mock-stat-label"><Users size={13} /> Placed Students</span>
            <span className="mock-stat-val">842 / 920</span>
            <span className="mock-stat-trend text-emerald">91.5% Placed</span>
          </div>
          <div className="mock-stat-card">
            <span className="mock-stat-label"><TrendingUp size={13} /> Highest Package</span>
            <span className="mock-stat-val text-emerald">₹ 52.0 LPA</span>
            <span className="mock-stat-trend">Avg: ₹ 14.8 LPA</span>
          </div>
        </div>
        <div className="mock-activity-bar">
          <span className="activity-pulse-icon" />
          <span className="activity-bar-text">
            <strong>Microsoft</strong> scheduled Technical Round 2 interviews for 18 CSE students
          </span>
          <span className="activity-time">Just now</span>
        </div>
      </div>
    </div>
  </div>
);

export default HeroPreview;
