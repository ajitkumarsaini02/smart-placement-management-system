import React, { useState } from 'react';
import StudentLayout from '../../../components/student/layout/StudentLayout';
import StudentProfile from '../../../components/student/profile/StudentProfile';
import AcademicDetails from '../../../components/student/profile/AcademicDetails';
import SkillsSection from '../../../components/student/skills/SkillsSection';
import ResumeUpload from '../../../components/student/resume/ResumeUpload';
import Button from '../../../components/common/Button';
import Loader from '../../../components/common/Loader';
import ProfileTopSummary from './ProfileTopSummary';
import ProfileTabsNav from './ProfileTabsNav';
import useStudentProfile from './useStudentProfile';
import { Save, CheckCircle2, AlertCircle } from 'lucide-react';

const MyProfile = () => {
  const [activeTab, setActiveTab] = useState('personal');
  const {
    studentData, setStudentData, loading, saving, saveSuccess, errorMessage,
    completionPercentage, setCompletionPercentage, handleFieldChange, handleSaveProfile,
  } = useStudentProfile();

  const handleResumeUpdated = (data) => {
    setStudentData((prev) => ({ ...prev, resume: data?.resume || null }));
    if (data?.profileCompletion !== undefined) setCompletionPercentage(data.profileCompletion);
  };

  if (loading) {
    return (
      <StudentLayout pageTitle="My Student Profile">
        <div className="dashboard-loading-state"><Loader size="lg" text="Loading your profile details..." /></div>
      </StudentLayout>
    );
  }

  return (
    <StudentLayout pageTitle="My Student Profile" pageSubtitle="Maintain accurate academic and personal records to ensure complete eligibility matching.">
      <ProfileTopSummary studentData={studentData} completionPercentage={completionPercentage} />
      <ProfileTabsNav activeTab={activeTab} setActiveTab={setActiveTab} />

      {saveSuccess && (
        <div className="form-alert alert-success">
          <CheckCircle2 size={18} /><span>Profile changes saved successfully!</span>
        </div>
      )}
      {errorMessage && (
        <div className="form-alert alert-error">
          <AlertCircle size={18} /><span>{errorMessage}</span>
        </div>
      )}

      <form onSubmit={handleSaveProfile} className="profile-tab-form">
        {activeTab === 'personal' && <StudentProfile profileData={studentData} onChange={handleFieldChange} />}
        {activeTab === 'academic' && <AcademicDetails academicData={studentData} onChange={handleFieldChange} />}
        {activeTab === 'skills' && (
          <SkillsSection
            skills={studentData.skills}
            projects={studentData.projects}
            certifications={studentData.certifications}
            onSkillsChange={(s) => handleFieldChange('skills', s)}
            onProjectsChange={(p) => handleFieldChange('projects', p)}
            onCertificationsChange={(c) => handleFieldChange('certifications', c)}
          />
        )}
        {activeTab === 'resume' && <ResumeUpload resumeData={studentData.resume} onResumeUpdated={handleResumeUpdated} />}

        {activeTab !== 'resume' && (
          <div className="profile-save-bar">
            <span className="save-bar-hint">Remember to click save after making edits to your personal or academic data.</span>
            <Button type="submit" variant="primary" size="md" disabled={saving} icon={<Save size={16} />}>
              {saving ? 'Saving Changes...' : 'Save Profile Changes'}
            </Button>
          </div>
        )}
      </form>
    </StudentLayout>
  );
};

export default MyProfile;
