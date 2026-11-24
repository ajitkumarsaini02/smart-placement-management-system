import React, { useState } from 'react';
import Button from '../../common/Button';
import { Code, Plus, X, Sparkles } from 'lucide-react';

const popularSkills = [
  'JavaScript', 'React.js', 'Node.js', 'Python', 'Java', 'C++', 'SQL', 'MongoDB',
  'Express.js', 'Docker', 'Git & GitHub', 'AWS', 'Data Structures', 'REST APIs',
];

export const SkillsTagsSub = ({ skills = [], onSkillsChange }) => {
  const [skillInput, setSkillInput] = useState('');

  const handleAddSkill = (skillToAdd) => {
    const trimmed = (skillToAdd || skillInput).trim();
    if (!trimmed) return;
    if (skills.some((s) => s.toLowerCase() === trimmed.toLowerCase())) {
      setSkillInput('');
      return;
    }
    onSkillsChange([...skills, trimmed]);
    setSkillInput('');
  };

  const handleRemoveSkill = (skillToRemove) => {
    onSkillsChange(skills.filter((s) => s !== skillToRemove));
  };

  return (
    <div className="profile-section-card">
      <div className="card-header-bar">
        <div className="card-title-group">
          <Code className="title-icon" size={20} />
          <div>
            <h3 className="card-section-title">Technical Skills &amp; Tooling</h3>
            <p className="card-section-desc">Highlight programming languages, frameworks and developer tools you master.</p>
          </div>
        </div>
      </div>
      <div className="skill-input-row">
        <div className="skill-input-box">
          <input
            type="text"
            className="input-field"
            placeholder="Type a skill (e.g. React.js, Docker)"
            value={skillInput}
            onChange={(e) => setSkillInput(e.target.value)}
            onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); handleAddSkill(); } }}
          />
        </div>
        <Button variant="primary" size="md" onClick={() => handleAddSkill()} disabled={!skillInput.trim()} icon={<Plus size={16} />}>
          Add
        </Button>
      </div>
      <div className="skills-tags-container">
        {skills && skills.length > 0 ? (
          skills.map((skill) => (
            <span key={skill} className="skill-pill">
              <span>{skill}</span>
              <button type="button" className="skill-remove-btn" onClick={() => handleRemoveSkill(skill)} aria-label={`Remove ${skill}`}>
                <X size={13} />
              </button>
            </span>
          ))
        ) : (
          <p className="empty-hint">No skills added yet. Pick from the suggestions below.</p>
        )}
      </div>
      <div className="suggested-skills-box">
        <span className="suggestion-label"><Sparkles size={14} className="text-emerald" /> Popular Recommendations:</span>
        <div className="suggestion-pills">
          {popularSkills
            .filter((ps) => !skills.some((s) => s.toLowerCase() === ps.toLowerCase()))
            .slice(0, 8)
            .map((suggestion) => (
              <button key={suggestion} type="button" className="suggestion-chip" onClick={() => handleAddSkill(suggestion)}>
                + {suggestion}
              </button>
            ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsTagsSub;
