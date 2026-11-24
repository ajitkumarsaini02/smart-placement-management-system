import React from 'react';
import Badge from '../../common/Badge';
import {
  Trophy,
  CheckCircle,
  Target,
  Sparkles,
} from 'lucide-react';

const PlacementHistory = ({ applications = [] }) => {
  const total = applications.length;
  const shortlisted = applications.filter(
    (a) => a.status === 'shortlisted' || a.status === 'interview_scheduled' || a.status === 'selected'
  ).length;
  const offers = applications.filter((a) => a.status === 'selected').length;
  const shortlistRate = total > 0 ? Math.round((shortlisted / total) * 100) : 0;

  return (
    <div className="placement-history-card">
      <div className="card-header-bar">
        <div className="card-title-group">
          <Trophy className="title-icon" size={20} />
          <div>
            <h3 className="card-section-title">Placement Track Record & Analytics</h3>
            <p className="card-section-desc">
              Your overall conversion statistics across campus placement cycles.
            </p>
          </div>
        </div>
        <Badge variant="mint" size="sm" icon={<Sparkles size={14} />}>
          Cycle 2025–2026
        </Badge>
      </div>

      {/* Metrics Row */}
      <div className="history-metrics-row">
        <div className="history-metric-box">
          <span className="metric-number">{total}</span>
          <span className="metric-label">Applications Submitted</span>
        </div>

        <div className="history-metric-box">
          <span className="metric-number text-emerald">{shortlisted}</span>
          <span className="metric-label">Shortlisted Applications</span>
        </div>

        <div className="history-metric-box">
          <span className="metric-number">{shortlistRate}%</span>
          <span className="metric-label">Shortlist Conversion</span>
        </div>

        <div className="history-metric-box">
          <span className="metric-number text-emerald">{offers}</span>
          <span className="metric-label">Offers Received</span>
        </div>
      </div>

      {/* Preparation Checklist */}
      <div className="readiness-tips-box">
        <h4 className="tips-heading">
          <Target size={16} className="text-emerald" /> Placement Readiness Checklist
        </h4>
        <div className="tips-grid">
          <div className="tip-item">
            <CheckCircle size={15} className="text-emerald" />
            <span>Keep your technical skills and GitHub project links verified.</span>
          </div>
          <div className="tip-item">
            <CheckCircle size={15} className="text-emerald" />
            <span>Ensure your PDF resume is ATS-compatible and updated to 1-page.</span>
          </div>
          <div className="tip-item">
            <CheckCircle size={15} className="text-emerald" />
            <span>Maintain an active backlog count of zero to maximize company cutoffs.</span>
          </div>
          <div className="tip-item">
            <CheckCircle size={15} className="text-emerald" />
            <span>Review scheduled interview links and join 5 minutes early.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlacementHistory;
