import React from 'react';
import Badge from '../../common/Badge';
import { MapPin, IndianRupee, Calendar, CheckCircle, XCircle, GraduationCap } from 'lucide-react';

const formatSalary = (salary) => {
  if (salary?.ctc) return `₹ ${salary.ctc}`;
  if (salary?.min && salary?.max) return `₹ ${salary.min} - ${salary.max} LPA`;
  if (salary?.stipend) return `₹ ${salary.stipend}/month`;
  return 'Competitive Compensation';
};

const formatDeadline = (dateString) => {
  if (!dateString) return 'Rolling Applications';
  const diffDays = Math.ceil((new Date(dateString) - new Date()) / (1000 * 60 * 60 * 24));
  if (diffDays < 0) return 'Expired';
  if (diffDays === 0) return 'Closes Today';
  if (diffDays === 1) return 'Closes Tomorrow';
  return `Closes in ${diffDays} days (${new Date(dateString).toLocaleDateString()})`;
};

const getStatusBadge = (status) => {
  switch (status) {
    case 'shortlisted': return <Badge variant="emerald" size="sm">Shortlisted ⭐</Badge>;
    case 'interview_scheduled': return <Badge variant="mint" size="sm">Interview Scheduled 📅</Badge>;
    case 'selected': return <Badge variant="emerald" size="sm">Selected 🏆</Badge>;
    case 'rejected': return <Badge variant="outline" size="sm">Not Selected</Badge>;
    default: return <Badge variant="mint" size="sm">Application Submitted</Badge>;
  }
};

export default function JobCardHeader({ job }) {
  const { title, company, jobType = 'Full-time', location = 'Bangalore, India', salary, eligibilityCriteria, deadline, isEligible, hasApplied, applicationStatus } = job;
  return (
    <>
      <div className="job-header-row">
        <div className="job-company-avatar">
          {company?.logo ? <img src={company.logo} alt={company.name} className="company-logo-img" /> : (
            <div className="company-avatar-placeholder">{company?.name ? company.name.charAt(0).toUpperCase() : 'C'}</div>
          )}
        </div>
        <div className="job-title-block">
          <h3 className="job-title">{title}</h3>
          <div className="job-company-line">
            <span className="company-name">{company?.name || 'Partner Company'}</span>
            <span className="dot-sep">•</span>
            <span className="job-type-pill">{jobType}</span>
          </div>
        </div>
        <div className="job-eligibility-badge">
          {hasApplied ? getStatusBadge(applicationStatus) : isEligible ? (
            <Badge variant="emerald" size="sm" icon={<CheckCircle size={14} />}>Eligible to Apply</Badge>
          ) : (
            <Badge variant="outline" size="sm" icon={<XCircle size={14} className="text-amber" />}>Not Eligible</Badge>
          )}
        </div>
      </div>
      <div className="job-meta-chips">
        <div className="meta-chip"><IndianRupee size={15} className="chip-icon" /><span>{formatSalary(salary)}</span></div>
        <div className="meta-chip"><MapPin size={15} className="chip-icon" /><span>{location}</span></div>
        <div className="meta-chip"><Calendar size={15} className="chip-icon" /><span>{formatDeadline(deadline)}</span></div>
        {eligibilityCriteria?.minCGPA && (
          <div className="meta-chip"><GraduationCap size={15} className="chip-icon" /><span>Min CGPA: {eligibilityCriteria.minCGPA}</span></div>
        )}
      </div>
    </>
  );
}
