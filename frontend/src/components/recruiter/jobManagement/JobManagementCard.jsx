import React from 'react';
import Button from '../../common/Button';
import Badge from '../../common/Badge';
import { MapPin, DollarSign, Calendar, Users, Eye, CheckCircle, XCircle, Edit, Trash2 } from 'lucide-react';

export default function JobManagementCard({ job, onViewCandidates, companyVerified, actionLoading, onPublish, onClose, onEdit, onDelete }) {
  return (
    <div className="recruiter-job-card">
      <div className="job-card-top">
        <div>
          <h3 className="job-title">{job.title}</h3>
          <div className="job-meta-chips">
            <span className="meta-chip"><MapPin size={13} /> {job.location || 'Pan-India'}</span>
            <span className="meta-chip"><DollarSign size={13} /> {job.salary || 'Competitive'}</span>
            <span className="meta-chip"><Calendar size={13} /> Deadline: {job.deadline ? new Date(job.deadline).toLocaleDateString() : 'N/A'}</span>
          </div>
        </div>
        <Badge variant={job.status === 'open' ? 'mint' : job.status === 'draft' ? 'default' : 'secondary'} size="sm">
          {job.status?.toUpperCase()}
        </Badge>
      </div>

      <p className="job-desc-snippet">{job.description}</p>
      <div className="criteria-mini-summary">
        <span className="crit-tag">Min CGPA: {job.eligibilityCriteria?.minCGPA || 'None'}</span>
        <span className="crit-tag">Max Backlogs: {job.eligibilityCriteria?.maxBacklogs ?? 0}</span>
        <span className="crit-tag">Branches: {job.eligibilityCriteria?.eligibleBranches?.length || 'All'}</span>
      </div>

      <div className="job-card-bottom">
        <div className="applicant-stat-pill">
          <Users size={15} className="text-emerald" />
          <span><strong>{job.applicantsCount || 0}</strong> Applicants</span>
        </div>

        <div className="job-card-actions">
          {onViewCandidates && (
            <Button variant="ghost" size="sm" onClick={() => onViewCandidates(job._id)} icon={<Eye size={14} />}>
              Applicants
            </Button>
          )}
          {job.status === 'draft' && (
            <Button variant="outline" size="sm" disabled={!companyVerified || actionLoading} onClick={() => onPublish(job._id)} icon={<CheckCircle size={14} />}>
              Publish
            </Button>
          )}
          {job.status === 'open' && (
            <Button variant="outline" size="sm" disabled={actionLoading} onClick={() => onClose(job._id)} icon={<XCircle size={14} />}>
              Close
            </Button>
          )}
          <button type="button" className="icon-action-btn" onClick={() => onEdit(job)} title="Edit Job">
            <Edit size={15} />
          </button>
          {job.status === 'draft' && (
            <button type="button" className="icon-action-btn text-danger" onClick={() => onDelete(job._id)} title="Delete Draft">
              <Trash2 size={15} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
