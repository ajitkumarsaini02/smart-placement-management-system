import React from 'react';
import { useNavigate } from 'react-router-dom';
import RecruiterLayout from '../../components/recruiter/layout/RecruiterLayout';
import JobManagement from '../../components/recruiter/jobManagement/JobManagement';

const ManageJobs = () => {
  const navigate = useNavigate();

  const handleViewCandidates = (jobId) => {
    navigate(`/recruiter/candidates?jobId=${jobId}`);
  };

  return (
    <RecruiterLayout
      pageTitle="Campus Job Openings"
      pageSubtitle="Post openings, define academic eligibility criteria, publish drafts, and track applicants."
    >
      <JobManagement onViewCandidates={handleViewCandidates} />
    </RecruiterLayout>
  );
};

export default ManageJobs;
