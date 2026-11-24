import React from 'react';
import { TrendingUp, Award } from 'lucide-react';

export default function TPOLeaderboardFunnel({ statusDistribution = [], topCompanies = [], totalApplications = 0 }) {
  return (
    <div className="tpo-analytics-split-grid">
      <div className="tpo-panel-card">
        <div className="panel-header">
          <div className="panel-title-group"><TrendingUp size={20} className="text-emerald" /><h3 className="panel-title">Application Pipeline Funnel</h3></div>
        </div>
        <div className="panel-body">
          {statusDistribution?.length > 0 ? (
            <div className="funnel-bars-list">
              {statusDistribution.map((st, idx) => (
                <div key={idx} className="funnel-bar-item">
                  <div className="funnel-label-row">
                    <span className="funnel-stage-name">{st.status.replace(/_/g, ' ').toUpperCase()}</span>
                    <span className="funnel-stage-count font-bold">{st.count} Applications</span>
                  </div>
                  <div className="funnel-track">
                    <div className="funnel-fill" style={{ width: `${Math.min(totalApplications > 0 ? Math.round((st.count / totalApplications) * 100) : 0, 100)}%` }} />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="empty-hint">No applications submitted yet.</p>
          )}
        </div>
      </div>

      <div className="tpo-panel-card">
        <div className="panel-header">
          <div className="panel-title-group"><Award size={20} className="text-emerald" /><h3 className="panel-title">Top Recruiting Corporate Partners</h3></div>
        </div>
        <div className="panel-body">
          {topCompanies?.length > 0 ? (
            <div className="top-companies-list">
              {topCompanies.map((comp, idx) => (
                <div key={idx} className="top-company-item">
                  <div className="company-rank-badge">#{idx + 1}</div>
                  <div className="top-company-info">
                    <h4 className="top-company-name">{comp.name}</h4>
                    <span className="top-company-sub">{comp.applicants} candidate applicants</span>
                  </div>
                  <div className="top-company-offers"><span className="offers-count">{comp.offers}</span><span className="offers-label">Offers</span></div>
                </div>
              ))}
            </div>
          ) : (
            <p className="empty-hint">No corporate data available yet.</p>
          )}
        </div>
      </div>
    </div>
  );
}
