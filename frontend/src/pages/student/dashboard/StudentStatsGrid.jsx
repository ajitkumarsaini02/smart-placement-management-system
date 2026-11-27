import React from 'react';
import { Target, FileCheck2, Star, Calendar } from 'lucide-react';

export default function StudentStatsGrid({ metrics = {} }) {
  return (
    <section className="dashboard-stats-grid">
      <div className="dashboard-stat-card">
        <div className="stat-card-icon-box stat-icon-emerald"><Target size={24} /></div>
        <div className="stat-card-info">
          <span className="stat-card-label">Eligible Opportunities</span>
          <div className="stat-card-number-row">
            <span className="stat-card-value">{metrics.eligibleJobsCount || 0}</span>
            <span className="stat-tag tag-success">Matched</span>
          </div>
          <span className="stat-card-hint">Based on your CGPA and department</span>
        </div>
      </div>

      <div className="dashboard-stat-card">
        <div className="stat-card-icon-box stat-icon-mint"><FileCheck2 size={24} /></div>
        <div className="stat-card-info">
          <span className="stat-card-label">Applications Submitted</span>
          <div className="stat-card-number-row">
            <span className="stat-card-value">{metrics.submittedApplicationsCount || 0}</span>
            <span className="stat-tag tag-neutral">Active</span>
          </div>
          <span className="stat-card-hint">Total applications sent to companies</span>
        </div>
      </div>

      <div className="dashboard-stat-card">
        <div className="stat-card-icon-box stat-icon-amber"><Star size={24} /></div>
        <div className="stat-card-info">
          <span className="stat-card-label">Shortlisted Applications</span>
          <div className="stat-card-number-row">
            <span className="stat-card-value">{metrics.shortlistedApplicationsCount || 0}</span>
            <span className="stat-tag tag-accent">Interviews</span>
          </div>
          <span className="stat-card-hint">Moved to round 2 or interviews</span>
        </div>
      </div>

      <div className="dashboard-stat-card">
        <div className="stat-card-icon-box stat-icon-dark"><Calendar size={24} /></div>
        <div className="stat-card-info">
          <span className="stat-card-label">Upcoming Drives</span>
          <div className="stat-card-number-row">
            <span className="stat-card-value">{metrics.upcomingDrivesCount || 0}</span>
            <span className="stat-tag tag-info">Active</span>
          </div>
          <span className="stat-card-hint">Campus recruitment events scheduled</span>
        </div>
      </div>
    </section>
  );
}
