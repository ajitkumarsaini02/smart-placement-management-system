import React, { useState } from 'react';
import JobCard from '../jobCard/JobCard';
import Button from '../../common/Button';
import EligibleJobsToolbar from './EligibleJobsToolbar';
import { Briefcase, CheckCircle2, AlertCircle } from 'lucide-react';

const EligibleJobs = ({
  jobs = [],
  hasResume = false,
  onApply,
  applyingJobId,
  applicationSuccessMsg = '',
  applicationErrorMsg = '',
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('all');
  const [selectedJobType, setSelectedJobType] = useState('all');

  const filteredJobs = jobs.filter((job) => {
    if (activeTab === 'eligible' && !job.isEligible) return false;
    if (activeTab === 'applied' && !job.hasApplied) return false;
    if (selectedJobType !== 'all' && job.jobType !== selectedJobType) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchTitle = job.title?.toLowerCase().includes(q);
      const matchCompany = job.company?.name?.toLowerCase().includes(q);
      const matchSkills = job.skillsRequired?.some((s) => s.toLowerCase().includes(q));
      if (!matchTitle && !matchCompany && !matchSkills) return false;
    }
    return true;
  });

  return (
    <div className="eligible-jobs-container">
      <EligibleJobsToolbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        totalCount={jobs.length}
        eligibleCount={jobs.filter((j) => j.isEligible).length}
        appliedCount={jobs.filter((j) => j.hasApplied).length}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedJobType={selectedJobType}
        setSelectedJobType={setSelectedJobType}
      />

      {applicationSuccessMsg && (
        <div className="form-alert alert-success">
          <CheckCircle2 size={18} /><span>{applicationSuccessMsg}</span>
        </div>
      )}
      {applicationErrorMsg && (
        <div className="form-alert alert-error">
          <AlertCircle size={18} /><span>{applicationErrorMsg}</span>
        </div>
      )}

      <div className="jobs-cards-grid">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => (
            <JobCard key={job._id} job={job} hasResume={hasResume} onApply={onApply} applyingJobId={applyingJobId} />
          ))
        ) : (
          <div className="empty-jobs-card">
            <div className="empty-jobs-icon"><Briefcase size={36} /></div>
            <h3 className="empty-jobs-title">No opportunities found</h3>
            <p className="empty-jobs-subtitle">
              {searchQuery ? `No results match "${searchQuery}".` : 'Campus recruitment opportunities will be published soon.'}
            </p>
            {activeTab !== 'all' && (
              <Button variant="outline" size="sm" onClick={() => { setActiveTab('all'); setSearchQuery(''); setSelectedJobType('all'); }}>
                Reset Filters
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default EligibleJobs;
