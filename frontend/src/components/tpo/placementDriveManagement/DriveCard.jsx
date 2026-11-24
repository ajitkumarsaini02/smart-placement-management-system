import React from 'react';
import Badge from '../../common/Badge';
import Button from '../../common/Button';
import { Calendar, Clock, Briefcase, Edit2, XCircle } from 'lucide-react';

const getStatusBadge = (st) => {
  switch (st) {
    case 'active': return <Badge variant="emerald" size="sm">Active Drive</Badge>;
    case 'upcoming': return <Badge variant="mint" size="sm">Upcoming</Badge>;
    case 'completed': return <Badge variant="outline" size="sm">Completed</Badge>;
    case 'cancelled': return <Badge variant="dark" size="sm">Cancelled</Badge>;
    default: return <Badge variant="default" size="sm">{st}</Badge>;
  }
};

export default function DriveCard({ drive, onOpenEdit, onCancelDrive }) {
  const elig = drive.eligibilityCriteria || {};

  return (
    <div className="tpo-drive-card">
      <div className="drive-card-header">
        <div>
          <div className="drive-header-sub">
            <span className="drive-academic-year">{drive.academicYear || '2025-2026'}</span>
            {drive.company?.name && <><span className="dot-sep">•</span><span className="drive-company-tag">{drive.company.name}</span></>}
          </div>
          <h3 className="drive-card-title">{drive.title}</h3>
        </div>
        <div>{getStatusBadge(drive.status)}</div>
      </div>

      {drive.description && <p className="drive-card-desc">{drive.description}</p>}

      <div className="drive-dates-row">
        <div className="date-item"><Calendar size={14} className="text-emerald" /><span>Starts: {new Date(drive.startDate).toLocaleDateString()}</span></div>
        {drive.registrationDeadline && (
          <div className="date-item"><Clock size={14} className="text-emerald" /><span>Deadline: {new Date(drive.registrationDeadline).toLocaleDateString()}</span></div>
        )}
        <div className="date-item"><Briefcase size={14} className="text-emerald" /><span><strong>{drive.jobsCount || 0}</strong> Roles</span></div>
      </div>

      <div className="drive-eligibility-snapshot">
        <span className="snapshot-label">Cutoffs:</span>
        <div className="snapshot-tags">
          <span className="snapshot-tag">Min CGPA: {elig.minCGPA || 6.0}</span>
          <span className="snapshot-tag">Max Backlogs: {elig.maxActiveBacklogs ?? 0}</span>
          {elig.allowedDepartments?.length > 0 && <span className="snapshot-tag dept-tag">Depts: {elig.allowedDepartments.join(', ')}</span>}
        </div>
      </div>

      <div className="drive-card-actions">
        <Button variant="outline" size="sm" onClick={() => onOpenEdit(drive)} icon={<Edit2 size={14} />}>Edit Drive</Button>
        {drive.status !== 'cancelled' && (
          <Button variant="ghost" size="sm" className="btn-danger-ghost" onClick={() => { if (window.confirm(`Cancel drive '${drive.title}'?`)) onCancelDrive(drive._id); }} icon={<XCircle size={14} />}>Cancel</Button>
        )}
      </div>
    </div>
  );
}
