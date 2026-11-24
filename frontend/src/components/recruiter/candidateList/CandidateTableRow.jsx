import React from 'react';
import Button from '../../common/Button';
import Badge from '../../common/Badge';
import { Eye, Calendar } from 'lucide-react';

export default function CandidateTableRow({ app, onSelect, onUpdateStatus, onScheduleInterview, actionLoading }) {
  const user = app.student?.user || {};
  const academic = app.student?.academicDetails || {};

  return (
    <tr className="table-row">
      <td>
        <div className="user-table-cell">
          <span className="user-cell-name">{user.name || 'Candidate'}</span>
          <span className="user-cell-sub">{user.email}</span>
        </div>
      </td>
      <td><span className="job-title-pill">{app.job?.title || 'Job Opening'}</span></td>
      <td><span className="dept-tag">{app.student?.department || 'Engineering'}</span></td>
      <td><strong className="text-emerald">{academic.cgpa || 'N/A'}</strong></td>
      <td><span className={academic.activeBacklogs > 0 ? 'text-danger' : 'text-emerald'}>{academic.activeBacklogs ?? 0}</span></td>
      <td>
        <Badge variant={app.status === 'selected' || app.status === 'offered' ? 'mint' : app.status === 'shortlisted' || app.status === 'interview_scheduled' ? 'warning' : app.status === 'rejected' ? 'danger' : 'default'} size="sm">
          {app.status?.replace('_', ' ').toUpperCase()}
        </Badge>
      </td>
      <td>
        <div className="table-actions">
          <Button variant="ghost" size="sm" icon={<Eye size={14} />} onClick={() => onSelect(app)} title="View Profile">View</Button>
          {app.status === 'applied' && (
            <Button variant="outline" size="sm" disabled={actionLoading} onClick={() => onUpdateStatus(app._id, 'shortlisted')}>Shortlist</Button>
          )}
          {app.status === 'shortlisted' && (
            <Button variant="primary" size="sm" disabled={actionLoading} icon={<Calendar size={13} />} onClick={() => onScheduleInterview(app)}>Interview</Button>
          )}
          {app.status === 'interview_scheduled' && (
            <Button variant="primary" size="sm" disabled={actionLoading} onClick={() => onUpdateStatus(app._id, 'selected')}>Select</Button>
          )}
        </div>
      </td>
    </tr>
  );
}
