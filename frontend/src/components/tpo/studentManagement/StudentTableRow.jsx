import React from 'react';
import Badge from '../../common/Badge';
import { CheckCircle2, Clock, AlertTriangle, Eye, Check } from 'lucide-react';

const getCgpaBadge = (cgpa) => {
  if (cgpa >= 8.5) return <Badge variant="emerald" size="sm">{cgpa}</Badge>;
  if (cgpa >= 7.0) return <Badge variant="mint" size="sm">{cgpa}</Badge>;
  return <Badge variant="outline" size="sm">{cgpa}</Badge>;
};

const getStatusBadge = (status) => {
  switch (status) {
    case 'placed': return <Badge variant="emerald" size="sm">Placed 🏆</Badge>;
    case 'opted_out': return <Badge variant="outline" size="sm">Opted Out</Badge>;
    default: return <Badge variant="default" size="sm">Unplaced</Badge>;
  }
};

export default function StudentTableRow({ student, onSelectStudent, onToggleVerification, isCurrentlyVerifying }) {
  return (
    <tr>
      <td>
        <div className="tpo-table-user-cell">
          <div className="tpo-user-avatar">{student.user?.name ? student.user.name.charAt(0).toUpperCase() : 'S'}</div>
          <div className="tpo-user-names">
            <span className="tpo-student-name">{student.user?.name || 'Unnamed Student'}</span>
            <span className="tpo-student-email">{student.user?.email || 'No Email'}</span>
          </div>
        </div>
      </td>
      <td><span className="tpo-roll-code">{student.rollNumber || 'N/A'}</span></td>
      <td>
        <div className="tpo-dept-cell">
          <span className="tpo-dept-name">{student.department || 'CSE'}</span>
          {student.branch && <span className="tpo-branch-sub">{student.branch}</span>}
        </div>
      </td>
      <td><span className="tpo-batch-badge">{student.batchYear || 2026}</span></td>
      <td>{getCgpaBadge(student.cgpa || 0)}</td>
      <td>
        {student.activeBacklogs > 0 ? (
          <span className="tpo-backlog-pill backlog-warning"><AlertTriangle size={12} /> {student.activeBacklogs} Active</span>
        ) : (
          <span className="tpo-backlog-pill backlog-clear"><CheckCircle2 size={12} /> Clear (0)</span>
        )}
      </td>
      <td>
        <button
          type="button"
          className={`tpo-verify-toggle-btn ${student.isVerified ? 'verified-active' : 'verified-pending'}`}
          onClick={() => onToggleVerification(student._id, student.isVerified)}
          disabled={isCurrentlyVerifying}
          title="Click to toggle verification status"
        >
          {student.isVerified ? <><Check size={13} /> Verified</> : <><Clock size={13} /> Pending</>}
        </button>
      </td>
      <td>{getStatusBadge(student.placementStatus)}</td>
      <td className="text-right">
        <button type="button" className="btn btn-outline btn-sm tpo-action-icon-btn" onClick={() => onSelectStudent(student)} title="Details">
          <Eye size={15} /> Details
        </button>
      </td>
    </tr>
  );
}
