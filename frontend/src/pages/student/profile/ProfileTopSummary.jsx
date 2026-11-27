import React from 'react';
import { Sparkles } from 'lucide-react';

export default function ProfileTopSummary({ studentData, completionPercentage }) {
  return (
    <div className="profile-top-summary">
      <div className="summary-info">
        <div className="summary-avatar-big">
          {studentData.name ? studentData.name.charAt(0).toUpperCase() : 'S'}
        </div>
        <div>
          <h2 className="summary-display-name">{studentData.name || 'Student Name'}</h2>
          <p className="summary-display-sub">
            {studentData.department || 'Department Not Specified'}
            {studentData.rollNumber ? ` • Roll No: ${studentData.rollNumber}` : ''}
            {studentData.batch ? ` • Batch ${studentData.batch}` : ''}
          </p>
        </div>
      </div>

      <div className="profile-completion-box">
        <div className="completion-label-row">
          <span className="completion-label">
            <Sparkles size={14} className="text-emerald" /> Profile Completion:
          </span>
          <span className="completion-value">{completionPercentage}%</span>
        </div>
        <div className="completion-meter-track">
          <div className="completion-meter-bar" style={{ width: `${Math.min(completionPercentage, 100)}%` }} />
        </div>
      </div>
    </div>
  );
}
