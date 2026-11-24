import React from 'react';
import { Trophy, Users, IndianRupee, Building2 } from 'lucide-react';

export default function TPOAnalyticsMetrics({ overview = {} }) {
  const { totalStudents = 0, placedStudents = 0, unplacedStudents = 0, placementRate = 0, highestPackage = 0, avgPackage = 0, totalCompanies = 0, totalJobs = 0, totalApplications = 0 } = overview;

  return (
    <div className="tpo-analytics-metrics-grid">
      <div className="tpo-metric-box">
        <div className="metric-box-header"><span className="metric-title">Placement Rate</span><div className="metric-icon-box stat-icon-emerald"><Trophy size={20} /></div></div>
        <div className="metric-box-content">
          <span className="metric-main-value text-emerald">{placementRate}%</span>
          <div className="metric-sub-bar"><div className="metric-fill-bar" style={{ width: `${Math.min(placementRate, 100)}%` }} /></div>
          <span className="metric-sub-text">{placedStudents} placed of {totalStudents} eligible</span>
        </div>
      </div>

      <div className="tpo-metric-box">
        <div className="metric-box-header"><span className="metric-title">Candidate Placements</span><div className="metric-icon-box stat-icon-mint"><Users size={20} /></div></div>
        <div className="metric-box-content">
          <div className="dual-metric-row">
            <div><span className="metric-main-value text-emerald">{placedStudents}</span><span className="metric-sub-label">Placed</span></div>
            <div className="metric-divider" />
            <div><span className="metric-main-value">{unplacedStudents}</span><span className="metric-sub-label">Pipeline</span></div>
          </div>
          <span className="metric-sub-text">Total Student Body: <strong>{totalStudents}</strong></span>
        </div>
      </div>

      <div className="tpo-metric-box">
        <div className="metric-box-header"><span className="metric-title">Compensation</span><div className="metric-icon-box stat-icon-amber"><IndianRupee size={20} /></div></div>
        <div className="metric-box-content">
          <div className="dual-metric-row">
            <div><span className="metric-main-value font-bold">₹{highestPackage}</span><span className="metric-sub-label">Highest LPA</span></div>
            <div className="metric-divider" />
            <div><span className="metric-main-value text-emerald font-bold">₹{avgPackage}</span><span className="metric-sub-label">Average LPA</span></div>
          </div>
          <span className="metric-sub-text">Across verified openings</span>
        </div>
      </div>

      <div className="tpo-metric-box">
        <div className="metric-box-header"><span className="metric-title">Corporate Engagement</span><div className="metric-icon-box stat-icon-dark"><Building2 size={20} /></div></div>
        <div className="metric-box-content">
          <div className="dual-metric-row">
            <div><span className="metric-main-value">{totalCompanies}</span><span className="metric-sub-label">Companies</span></div>
            <div className="metric-divider" />
            <div><span className="metric-main-value text-emerald">{totalJobs}</span><span className="metric-sub-label">Job Postings</span></div>
          </div>
          <span className="metric-sub-text">Total Applications: <strong>{totalApplications}</strong></span>
        </div>
      </div>
    </div>
  );
}
