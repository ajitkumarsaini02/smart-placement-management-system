import React from 'react';
import { Link } from 'react-router-dom';
import Badge from '../../../components/common/Badge';
import { User } from 'lucide-react';

export default function StudentProfileSummaryCard({ user, student }) {
  return (
    <div className="dashboard-summary-card">
      <div className="summary-card-header">
        <div className="summary-avatar-circle">{user?.name ? user.name.charAt(0).toUpperCase() : 'S'}</div>
        <div className="summary-user-text">
          <h4 className="summary-name">{user?.name}</h4>
          <p className="summary-dept">{student?.department || 'Department Not Set'}</p>
        </div>
      </div>

      <div className="summary-stats-list">
        <div className="summary-row">
          <span className="summary-label">Roll Number:</span>
          <span className="summary-value">{student?.rollNumber || 'Not Set'}</span>
        </div>
        <div className="summary-row">
          <span className="summary-label">Current CGPA:</span>
          <span className="summary-value text-emerald font-bold">
            {student?.cgpa !== undefined && student?.cgpa !== null ? student.cgpa : 'Not Set'}
          </span>
        </div>
        <div className="summary-row">
          <span className="summary-label">Active Backlogs:</span>
          <span className="summary-value">{student?.activeBacklogs !== undefined ? student.activeBacklogs : 0}</span>
        </div>
        <div className="summary-row">
          <span className="summary-label">Resume Status:</span>
          <span className="summary-value">
            {student?.resume?.url ? <Badge variant="emerald" size="sm">Uploaded</Badge> : <Badge variant="outline" size="sm">Pending</Badge>}
          </span>
        </div>
      </div>

      <Link to="/student/profile" className="btn btn-outline btn-sm summary-btn-full">
        <User size={15} /> Edit My Profile & Resume
      </Link>
    </div>
  );
}
