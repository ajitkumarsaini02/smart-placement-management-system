import React from 'react';
import SkillsTagsSub from './SkillsTagsSub';
import SkillsProjectsSub from './SkillsProjectsSub';
import SkillsCertificationsSub from './SkillsCertificationsSub';

const SkillsSection = ({
  skills = [],
  projects = [],
  certifications = [],
  onSkillsChange,
  onProjectsChange,
  onCertificationsChange,
}) => (
  <div className="skills-section-wrapper">
    <SkillsTagsSub skills={skills} onSkillsChange={onSkillsChange} />
    <SkillsProjectsSub projects={projects} onProjectsChange={onProjectsChange} />
    <SkillsCertificationsSub certifications={certifications} onCertificationsChange={onCertificationsChange} />
  </div>
);

export default SkillsSection;
