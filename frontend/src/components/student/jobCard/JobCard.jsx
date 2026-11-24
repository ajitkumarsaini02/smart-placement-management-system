import React, { useState } from 'react';
import Button from '../../common/Button';
import JobCardHeader from './JobCardHeader';
import JobCardDrawer from './JobCardDrawer';
import { ChevronDown, ChevronUp, ArrowRight, ShieldAlert, CheckCircle } from 'lucide-react';

const JobCard = ({ job, hasResume, onApply, applyingJobId }) => {
  const [expanded, setExpanded] = useState(false);
  const { _id, eligibilityCriteria = {}, skillsRequired = [], isEligible = false, eligibilityReasons = [], hasApplied = false } = job;
  const isApplying = applyingJobId === _id;

  return (
    <div className={`student-job-card ${isEligible ? 'job-card-eligible' : 'job-card-ineligible'}`}>
      <div className="job-card-top">
        <JobCardHeader job={job} />

        {!isEligible && eligibilityReasons?.length > 0 && !hasApplied && (
          <div className="ineligible-callout">
            <ShieldAlert size={16} className="callout-icon" />
            <div className="callout-content">
              <strong>Eligibility Criteria Notice:</strong>
              <ul className="reasons-list">
                {eligibilityReasons.map((r, i) => <li key={i}>{r}</li>)}
              </ul>
            </div>
          </div>
        )}

        {skillsRequired?.length > 0 && (
          <div className="job-skills-row">
            {skillsRequired.slice(0, 5).map((skill, idx) => (
              <span key={idx} className="job-skill-tag">{skill}</span>
            ))}
            {skillsRequired.length > 5 && (
              <span className="job-skill-tag-more">+{skillsRequired.length - 5} more</span>
            )}
          </div>
        )}
      </div>

      {expanded && (
        <JobCardDrawer
          description={job.description}
          selectionProcess={job.selectionProcess}
          allowedDepartments={eligibilityCriteria?.allowedDepartments}
        />
      )}

      <div className="job-card-footer">
        <button type="button" className="btn-details-toggle" onClick={() => setExpanded(!expanded)}>
          <span>{expanded ? 'Show Less Details' : 'View Full Details & Criteria'}</span>
          {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>

        <div className="job-footer-actions">
          {hasApplied ? (
            <span className="applied-confirmation-pill">
              <CheckCircle size={15} /> Application Tracked
            </span>
          ) : (
            <Button
              variant="primary"
              size="sm"
              disabled={!isEligible || isApplying}
              onClick={() => onApply(_id)}
              icon={<ArrowRight size={15} />}
            >
              {isApplying ? 'Submitting...' : !isEligible ? 'Not Eligible' : !hasResume ? 'Upload Resume to Apply' : 'Apply Now'}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default JobCard;
