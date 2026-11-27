import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import RecruiterLayout from '../../components/recruiter/layout/RecruiterLayout';
import CandidateList from '../../components/recruiter/candidateList/CandidateList';
import ShortlistedCandidates from '../../components/recruiter/shortlisted/ShortlistedCandidates';
import { Users, Award } from 'lucide-react';

const Candidates = () => {
  const [searchParams] = useSearchParams();
  const initialJobId = searchParams.get('jobId') || null;
  const [activeTab, setActiveTab] = useState('all');

  return (
    <RecruiterLayout
      pageTitle="Candidate Screening & Profiles"
      pageSubtitle="Review student applicants, verified PDF resumes, academic CGPA scores, and shortlist candidates."
    >
      <div className="tab-navigation-bar">
        <button
          type="button"
          className={`tab-btn ${activeTab === 'all' ? 'tab-btn-active' : ''}`}
          onClick={() => setActiveTab('all')}
        >
          <Users size={16} /> All Student Applicants
        </button>
        <button
          type="button"
          className={`tab-btn ${activeTab === 'shortlisted' ? 'tab-btn-active' : ''}`}
          onClick={() => setActiveTab('shortlisted')}
        >
          <Award size={16} /> Shortlisted & Interviews
        </button>
      </div>

      <div className="tab-content-area">
        {activeTab === 'all' ? (
          <CandidateList preselectedJobId={initialJobId} />
        ) : (
          <ShortlistedCandidates />
        )}
      </div>
    </RecruiterLayout>
  );
};

export default Candidates;
