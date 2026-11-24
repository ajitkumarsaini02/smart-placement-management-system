import React from 'react';
import Badge from '../../common/Badge';
import ApplicationStepper from './ApplicationStepper';
import ApplicationInterviewBox from './ApplicationInterviewBox';
import { FileText } from 'lucide-react';

const getStatusBadge = (status) => {
  switch (status) {
    case 'applied': return <Badge variant="mint" size="md">Applied</Badge>;
    case 'under_review': return <Badge variant="outline" size="md">Under Review</Badge>;
    case 'shortlisted': return <Badge variant="emerald" size="md">Shortlisted ⭐</Badge>;
    case 'interview_scheduled': return <Badge variant="emerald" size="md">Interview Scheduled 📅</Badge>;
    case 'selected': return <Badge variant="emerald" size="md">Selected / Offer Made 🎉</Badge>;
    case 'rejected': return <Badge variant="dark" size="md">Not Selected</Badge>;
    default: return <Badge variant="default" size="md">{status}</Badge>;
  }
};

const ApplicationCard = ({ application }) => {
  const { _id, job, company, status = 'applied', appliedAt, interview, resume } = application;

  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    return new Date(dateString).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
  };

  const resumeUrl = resume?.url?.startsWith('http') ? resume.url : resume?.url ? `http://localhost:5000${resume.url}` : null;

  return (
    <div className="application-tracking-card">
      <div className="app-card-header">
        <div className="app-header-left">
          <div className="app-company-avatar">
            {company?.logo ? <img src={company.logo} alt={company.name} /> : (
              <div className="avatar-placeholder">{company?.name ? company.name.charAt(0).toUpperCase() : 'C'}</div>
            )}
          </div>
          <div className="app-meta-text">
            <h3 className="app-job-title">{job?.title || 'Engineering Role'}</h3>
            <div className="app-company-sub">
              <span className="app-company-name">{company?.name || 'Recruiting Partner'}</span>
              <span className="dot-sep">•</span>
              <span className="app-date">Submitted on {formatDate(appliedAt)}</span>
            </div>
          </div>
        </div>
        <div className="app-status-badge-wrapper">{getStatusBadge(status)}</div>
      </div>

      <ApplicationStepper status={status} />
      <ApplicationInterviewBox interview={interview} />

      <div className="app-card-footer">
        {resumeUrl ? (
          <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className="app-resume-link">
            <FileText size={15} /> View Submitted Resume
          </a>
        ) : (
          <span className="app-resume-empty">Profile details submitted</span>
        )}
        <span className="app-id-tag">Application #{_id.slice(-6).toUpperCase()}</span>
      </div>
    </div>
  );
};

export default ApplicationCard;
