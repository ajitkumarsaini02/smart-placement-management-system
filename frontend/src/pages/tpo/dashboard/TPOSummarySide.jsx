import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, Users } from 'lucide-react';

export default function TPOSummarySide({ statistics = {}, recentStudents = [] }) {
  return (
    <div className="dashboard-column-side">
      <div className="dashboard-summary-card">
        <h4 className="card-section-title">Placement Conversion Summary</h4>
        <div className="conversion-ring-box">
          <span className="conversion-big-val text-emerald">{statistics.placementRate || 0}%</span>
          <span className="conversion-sub-label">Campus Placement Rate</span>
        </div>
        <div className="summary-stats-list">
          <div className="summary-row"><span className="summary-label">Selected Students:</span><span className="summary-value text-emerald font-bold">{statistics.selectedStudents || 0}</span></div>
          <div className="summary-row"><span className="summary-label">Total Student Pool:</span><span className="summary-value">{statistics.totalStudents || 0}</span></div>
          <div className="summary-row"><span className="summary-label">Registered Companies:</span><span className="summary-value">{statistics.totalCompanies || 0}</span></div>
          <div className="summary-row"><span className="summary-label">Active Drives:</span><span className="summary-value">{statistics.totalDrives || 0}</span></div>
        </div>
        <Link to="/tpo/reports" className="btn btn-outline btn-sm summary-btn-full"><TrendingUp size={15} /> View Full Analytics & Reports</Link>
      </div>

      <div className="dashboard-panel">
        <div className="panel-header">
          <div className="panel-title-group"><Users size={18} className="text-emerald" /><h4 className="panel-title">Newly Registered Students</h4></div>
          <Link to="/tpo/students" className="panel-link">All</Link>
        </div>
        <div className="panel-body">
          {recentStudents?.length > 0 ? (
            <div className="notifications-mini-list">
              {recentStudents.map((st) => (
                <div key={st._id} className="notif-mini-item">
                  <div className="mini-company-avatar" style={{ width: '32px', height: '32px', fontSize: '0.8rem' }}>
                    {st.user?.name ? st.user.name.charAt(0).toUpperCase() : 'S'}
                  </div>
                  <div className="notif-mini-content">
                    <h5 className="notif-mini-title">{st.user?.name || 'Student Candidate'}</h5>
                    <p className="notif-mini-msg">{st.rollNumber} • {st.department || 'CSE'}</p>
                  </div>
                  <span className="tpo-batch-badge" style={{ alignSelf: 'center' }}>CGPA: {st.cgpa}</span>
                </div>
              ))}
            </div>
          ) : (
            <p className="empty-hint">No students registered yet.</p>
          )}
        </div>
      </div>
    </div>
  );
}
