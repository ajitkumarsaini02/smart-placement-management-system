import React from 'react';
import Badge from '../../../components/common/Badge';
import { Calendar } from 'lucide-react';

export default function StudentUpcomingDrives({ upcomingDrives = [] }) {
  return (
    <div className="dashboard-panel">
      <div className="panel-header">
        <div className="panel-title-group">
          <Calendar size={20} className="text-emerald" />
          <h3 className="panel-title">Upcoming Placement Drives</h3>
        </div>
      </div>

      <div className="panel-body">
        {upcomingDrives && upcomingDrives.length > 0 ? (
          <div className="drives-list">
            {upcomingDrives.map((drive) => (
              <div key={drive._id} className="drive-item-card">
                <div className="drive-date-box">
                  <span className="drive-month">{new Date(drive.startDate).toLocaleString('default', { month: 'short' })}</span>
                  <span className="drive-day">{new Date(drive.startDate).getDate()}</span>
                </div>
                <div className="drive-info">
                  <h4 className="drive-title">{drive.title}</h4>
                  <p className="drive-desc">{drive.description}</p>
                  <div className="drive-meta-row">
                    <Badge variant="mint" size="sm">Batch {drive.academicYear || '2026'}</Badge>
                    <span className="drive-status-text">Status: <strong>{drive.status}</strong></span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="empty-panel-state">
            <p>No upcoming placement drives scheduled at the moment.</p>
          </div>
        )}
      </div>
    </div>
  );
}
