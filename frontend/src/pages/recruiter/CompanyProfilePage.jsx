import React from 'react';
import RecruiterLayout from '../../components/recruiter/layout/RecruiterLayout';
import CompanyProfile from '../../components/recruiter/companyProfile/CompanyProfile';

const CompanyProfilePage = () => {
  return (
    <RecruiterLayout
      pageTitle="Company Organization Profile"
      pageSubtitle="Manage your corporate details, recruitment contacts, and branding visible to university students."
    >
      <CompanyProfile />
    </RecruiterLayout>
  );
};

export default CompanyProfilePage;
