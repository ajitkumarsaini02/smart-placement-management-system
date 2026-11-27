import React from 'react';
import { Link } from 'react-router-dom';
import Badge from '../../../components/common/Badge';
import { Calendar, ChevronRight } from 'lucide-react';

export default function TPODrivesList({ recentDrives = [] }) {
  return (
    <div className="dashboard-panel">
      <div className="panel-header">
        <div className="panel-title-group"><Calendar size={20} className="text-emerald" /><h3 className="panel-title">Active & Scheduled Drives</h3></div>
        <Link to="/tpo/drives" className="panel-link">Manage Drives <ChevronRight size={14} /></Link>
      </div>
      <div className="panel-body">
        {recentDrives?.length > 0 ? (
          <div className="drives-list">
            {recentDrives.map((drive) => (
              <div key={drive._id} className="drive-item-card">
                <div className="drive-date-box">
                  <span className="drive-month">{new Date(drive.startDate).toLocaleString('default', { month: 'short' })}</span>
                  <span className="drive-day">{new Date(drive.startDate).getDate()}</span>
                </div>
                <div className="drive-info">
                  <h4 className="drive-title">{drive.title}</h4>
                  <div className="drive-meta-row">
                    <span className="drive-status-text">Cycle: <strong>{drive.academicYear}</strong></span>
                    {drive.company?.name && <><span className="dot-sep">•</span><span className="drive-company-tag">{drive.company.name}</span></>}
                    <span className="dot-sep">•</span><Badge variant="mint" size="sm">{drive.status.toUpperCase()}</Badge>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="empty-panel-state"><p>No active placement drives found. Launch a drive to begin recruitment.</p></div>
        )}
      </div>
    </div>
  );
}
