import React from 'react';
import Input from '../../common/Input';
import Badge from '../../common/Badge';
import AcademicBacklogsSub from './AcademicBacklogsSub';
import { Award, BookOpen } from 'lucide-react';

const getAcademicStanding = (val) => {
  const num = parseFloat(val);
  if (isNaN(num)) return null;
  if (num >= 8.5) return { label: 'First Class with Distinction', variant: 'emerald' };
  if (num >= 7.0) return { label: 'First Class', variant: 'mint' };
  if (num >= 6.0) return { label: 'Second Class', variant: 'outline' };
  return { label: 'Below Minimum Cutoff', variant: 'dark' };
};

const AcademicDetails = ({ academicData, onChange }) => {
  const { cgpa = '', activeBacklogs = 0, totalBacklogs = 0, tenthPercentage = '', twelfthPercentage = '' } = academicData || {};
  const standing = getAcademicStanding(cgpa);

  return (
    <div className="profile-section-card">
      <div className="card-header-bar">
        <div className="card-title-group">
          <BookOpen className="title-icon" size={20} />
          <div>
            <h3 className="card-section-title">Academic Scores & Backlogs</h3>
            <p className="card-section-desc">Your academic scores are verified against company recruitment cutoffs.</p>
          </div>
        </div>
        {standing && <Badge variant={standing.variant} size="sm">{standing.label}</Badge>}
      </div>

      <div className="profile-form-grid">
        <div className="form-field-wrapper">
          <Input label="Current CGPA (Scale of 10.0)" name="cgpa" type="number" step="0.01" min="0" max="10" placeholder="e.g. 8.45" value={cgpa} onChange={(e) => onChange('cgpa', e.target.value)} required icon={<Award size={16} />} />
          <span className="field-hint">Calculated across all completed semesters so far.</span>
        </div>

        <div className="form-field-wrapper">
          <Input label="Class 10th Percentage (%)" name="tenthPercentage" type="number" step="0.1" min="0" max="100" placeholder="e.g. 88.5" value={tenthPercentage} onChange={(e) => onChange('tenthPercentage', e.target.value)} required />
          <span className="field-hint">Secondary school board score.</span>
        </div>

        <div className="form-field-wrapper">
          <Input label="Class 12th / Diploma Percentage (%)" name="twelfthPercentage" type="number" step="0.1" min="0" max="100" placeholder="e.g. 85.0" value={twelfthPercentage} onChange={(e) => onChange('twelfthPercentage', e.target.value)} required />
          <span className="field-hint">Higher secondary or equivalent score.</span>
        </div>

        <AcademicBacklogsSub activeBacklogs={activeBacklogs} totalBacklogs={totalBacklogs} onChange={onChange} />
      </div>
    </div>
  );
};

export default AcademicDetails;
