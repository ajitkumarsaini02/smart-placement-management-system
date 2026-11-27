import React from 'react';
import RecruiterLayout from '../../components/recruiter/layout/RecruiterLayout';
import RecruitmentStatus from '../../components/recruiter/recruitmentStatus/RecruitmentStatus';

const Recruitment = () => {
  return (
    <RecruiterLayout
      pageTitle="Recruitment Pipeline & Funnel"
      pageSubtitle="Track candidate progress through each recruitment stage: Applied, Review, Shortlisted, Interview, and Offer."
    >
      <RecruitmentStatus />
    </RecruiterLayout>
  );
};

export default Recruitment;
