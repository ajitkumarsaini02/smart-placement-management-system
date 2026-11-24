import React from 'react';
import Input from '../../common/Input';
import EligibilityDepartmentPicker from './EligibilityDepartmentPicker';
import { Award, BookOpen, AlertTriangle, ShieldCheck } from 'lucide-react';

const allDepartments = ['CSE', 'IT', 'ECE', 'EEE', 'Mechanical', 'Civil', 'AI & Data Science'];

const EligibilityManagement = ({ criteria = {}, onChange }) => {
  const { minCGPA = 6.0, minTenthPercentage = 60, minTwelfthPercentage = 60, maxActiveBacklogs = 0, allowedDepartments = ['CSE', 'IT', 'ECE'], batchYear = 2026 } = criteria;

  const handleToggleDepartment = (dept) => {
    const updated = allowedDepartments.includes(dept) ? allowedDepartments.filter((d) => d !== dept) : [...allowedDepartments, dept];
    onChange('allowedDepartments', updated);
  };

  const handleSelectAll = () => {
    onChange('allowedDepartments', allowedDepartments.length === allDepartments.length ? [] : [...allDepartments]);
  };

  return (
    <div className="eligibility-manager-card">
      <div className="eligibility-header-line">
        <ShieldCheck size={20} className="text-emerald" />
        <div>
          <h4 className="eligibility-title">Placement Eligibility Criteria</h4>
          <p className="eligibility-desc">Define strict academic benchmarks. Students who do not meet these rules will be restricted.</p>
        </div>
      </div>

      <div className="profile-form-grid">
        <div className="form-field-wrapper">
          <Input label="Minimum Required CGPA" name="minCGPA" type="number" step="0.1" min="0" max="10" placeholder="e.g. 7.5" value={minCGPA} onChange={(e) => onChange('minCGPA', parseFloat(e.target.value) || 0)} required icon={<Award size={16} />} />
        </div>
        <div className="form-field-wrapper">
          <Input label="Maximum Active Backlogs Allowed" name="maxActiveBacklogs" type="number" min="0" max="10" placeholder="0" value={maxActiveBacklogs} onChange={(e) => onChange('maxActiveBacklogs', parseInt(e.target.value, 10) || 0)} required icon={<AlertTriangle size={16} />} />
        </div>
        <div className="form-field-wrapper">
          <Input label="Class 10th Minimum Score (%)" name="minTenthPercentage" type="number" step="1" min="0" max="100" placeholder="e.g. 60" value={minTenthPercentage} onChange={(e) => onChange('minTenthPercentage', parseFloat(e.target.value) || 0)} required icon={<BookOpen size={16} />} />
        </div>
        <div className="form-field-wrapper">
          <Input label="Class 12th / Diploma Minimum Score (%)" name="minTwelfthPercentage" type="number" step="1" min="0" max="100" placeholder="e.g. 60" value={minTwelfthPercentage} onChange={(e) => onChange('minTwelfthPercentage', parseFloat(e.target.value) || 0)} required icon={<BookOpen size={16} />} />
        </div>
        <div className="form-field-wrapper">
          <Input label="Eligible Graduation Batch" name="batchYear" type="number" min="2020" max="2035" placeholder="2026" value={batchYear} onChange={(e) => onChange('batchYear', parseInt(e.target.value, 10) || 2026)} required />
        </div>
      </div>

      <EligibilityDepartmentPicker allDepartments={allDepartments} allowedDepartments={allowedDepartments} onToggle={handleToggleDepartment} onSelectAll={handleSelectAll} />
    </div>
  );
};

export default EligibilityManagement;
