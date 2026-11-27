import React from 'react';
import { Users, Building2, Briefcase, Calendar, FileCheck, Trophy } from 'lucide-react';

export default function TPOStatsGrid({ statistics = {} }) {
  return (
    <section className="dashboard-stats-grid" style={{ gridTemplateColumns: 'repeat(6, 1fr)' }}>
      <div className="dashboard-stat-card">
        <div className="stat-card-icon-box stat-icon-emerald"><Users size={22} /></div>
        <div className="stat-card-info">
          <span className="stat-card-label">Total Students</span>
          <div className="stat-card-number-row"><span className="stat-card-value">{statistics.totalStudents || 0}</span></div>
          <span className="stat-card-hint">Registered Candidates</span>
        </div>
      </div>

      <div className="dashboard-stat-card">
        <div className="stat-card-icon-box stat-icon-mint"><Building2 size={22} /></div>
        <div className="stat-card-info">
          <span className="stat-card-label">Total Companies</span>
          <div className="stat-card-number-row"><span className="stat-card-value">{statistics.totalCompanies || 0}</span></div>
          <span className="stat-card-hint">Partner Organizations</span>
        </div>
      </div>

      <div className="dashboard-stat-card">
        <div className="stat-card-icon-box stat-icon-amber"><Briefcase size={22} /></div>
        <div className="stat-card-info">
          <span className="stat-card-label">Active Jobs</span>
          <div className="stat-card-number-row"><span className="stat-card-value">{statistics.activeJobs || 0}</span></div>
          <span className="stat-card-hint">Open Positions</span>
        </div>
      </div>

      <div className="dashboard-stat-card">
        <div className="stat-card-icon-box stat-icon-dark"><Calendar size={22} /></div>
        <div className="stat-card-info">
          <span className="stat-card-label">Placement Drives</span>
          <div className="stat-card-number-row"><span className="stat-card-value">{statistics.totalDrives || 0}</span></div>
          <span className="stat-card-hint">Recruitment Cycles</span>
        </div>
      </div>

      <div className="dashboard-stat-card">
        <div className="stat-card-icon-box stat-icon-mint"><FileCheck size={22} /></div>
        <div className="stat-card-info">
          <span className="stat-card-label">Applications</span>
          <div className="stat-card-number-row"><span className="stat-card-value">{statistics.totalApplications || 0}</span></div>
          <span className="stat-card-hint">Submissions Recorded</span>
        </div>
      </div>

      <div className="dashboard-stat-card">
        <div className="stat-card-icon-box stat-icon-emerald"><Trophy size={22} /></div>
        <div className="stat-card-info">
          <span className="stat-card-label">Selected Students</span>
          <div className="stat-card-number-row"><span className="stat-card-value text-emerald">{statistics.selectedStudents || 0}</span></div>
          <span className="stat-card-hint">{statistics.placementRate || 0}% Placement Rate</span>
        </div>
      </div>
    </section>
  );
}
