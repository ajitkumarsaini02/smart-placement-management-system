import React from 'react';
import { Link } from 'react-router-dom';
import Badge from '../../../components/common/Badge';
import { FileCheck, ChevronRight } from 'lucide-react';

const getStatusBadge = (st) => {
  switch (st) {
    case 'offered':
    case 'offer_accepted': return <Badge variant="emerald" size="sm">Offered 🏆</Badge>;
    case 'interview_scheduled': return <Badge variant="mint" size="sm">Interview 📅</Badge>;
    case 'shortlisted': return <Badge variant="emerald" size="sm">Shortlisted</Badge>;
    case 'rejected': return <Badge variant="outline" size="sm">Rejected</Badge>;
    default: return <Badge variant="default" size="sm">Applied</Badge>;
  }
};

export default function TPORecentAppsTable({ recentApplications = [] }) {
  return (
    <div className="dashboard-panel">
      <div className="panel-header">
        <div className="panel-title-group"><FileCheck size={20} className="text-emerald" /><h3 className="panel-title">Recent Candidate Applications</h3></div>
        <Link to="/tpo/applications" className="panel-link">View All Applications <ChevronRight size={14} /></Link>
      </div>
      <div className="panel-body" style={{ padding: '0.75rem 1rem' }}>
        {recentApplications?.length > 0 ? (
          <div className="tpo-table-responsive">
            <table className="tpo-data-table">
              <thead><tr><th>Candidate</th><th>Position & Company</th><th>Applied Date</th><th>Status</th></tr></thead>
              <tbody>
                {recentApplications.map((app) => (
                  <tr key={app._id}>
                    <td><div className="tpo-table-user-cell"><span className="tpo-student-name font-bold">{app.student?.user?.name || 'Student'}</span></div></td>
                    <td><div className="tpo-dept-cell"><span>{app.job?.title}</span><span className="tpo-branch-sub">{app.job?.company?.name}</span></div></td>
                    <td><span className="tpo-date-cell">{new Date(app.createdAt).toLocaleDateString()}</span></td>
                    <td>{getStatusBadge(app.status)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="empty-hint" style={{ padding: '1.5rem', textAlign: 'center' }}>No candidate applications recorded yet.</p>
        )}
      </div>
    </div>
  );
}
