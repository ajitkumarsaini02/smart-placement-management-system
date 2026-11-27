import React from 'react';
import { Briefcase, CheckCircle, Users, Clock, Calendar, Building } from 'lucide-react';

export default function RecruiterKpiGrid({ kpis }) {
  return (
    <div className="recruiter-kpi-grid">
      <div className="kpi-metric-card">
        <div className="kpi-icon-wrap mint-icon-wrap"><Briefcase size={22} /></div>
        <div className="kpi-info">
          <span className="kpi-metric-label">Total Jobs Posted</span>
          <span className="kpi-metric-val">{kpis.totalJobs}</span>
          <span className="kpi-metric-sub">Across all cycles</span>
        </div>
      </div>

      <div className="kpi-metric-card">
        <div className="kpi-icon-wrap emerald-icon-wrap"><CheckCircle size={22} /></div>
        <div className="kpi-info">
          <span className="kpi-metric-label">Active Openings</span>
          <span className="kpi-metric-val">{kpis.activeJobs}</span>
          <span className="kpi-metric-sub text-emerald">Accepting Applications</span>
        </div>
      </div>

      <div className="kpi-metric-card">
        <div className="kpi-icon-wrap soft-mint-wrap"><Users size={22} /></div>
        <div className="kpi-info">
          <span className="kpi-metric-label">Total Applicants</span>
          <span className="kpi-metric-val">{kpis.totalApplicants}</span>
          <span className="kpi-metric-sub">Real Student Applications</span>
        </div>
      </div>

      <div className="kpi-metric-card">
        <div className="kpi-icon-wrap warning-wrap"><Clock size={22} /></div>
        <div className="kpi-info">
          <span className="kpi-metric-label">Shortlisted</span>
          <span className="kpi-metric-val">{kpis.shortlisted}</span>
          <span className="kpi-metric-sub">Ready for Interview</span>
        </div>
      </div>

      <div className="kpi-metric-card">
        <div className="kpi-icon-wrap mint-icon-wrap"><Calendar size={22} /></div>
        <div className="kpi-info">
          <span className="kpi-metric-label">Interviews Set</span>
          <span className="kpi-metric-val">{kpis.interviewsScheduled}</span>
          <span className="kpi-metric-sub">Active rounds</span>
        </div>
      </div>

      <div className="kpi-metric-card">
        <div className="kpi-icon-wrap emerald-icon-wrap"><Building size={22} /></div>
        <div className="kpi-info">
          <span className="kpi-metric-label">Offers Extended</span>
          <span className="kpi-metric-val">{kpis.selected}</span>
          <span className="kpi-metric-sub text-emerald">Selected Candidates</span>
        </div>
      </div>
    </div>
  );
}
