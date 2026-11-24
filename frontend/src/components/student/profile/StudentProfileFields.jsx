import React from 'react';
import Input from '../../common/Input';
import { Calendar } from 'lucide-react';

const departmentOptions = [
  'Computer Science & Engineering',
  'Information Technology',
  'Electronics & Communication Engineering',
  'Electrical Engineering',
  'Mechanical Engineering',
  'Civil Engineering',
  'Artificial Intelligence & Data Science',
];

export default function StudentProfileFields({ department, branch, batch, bio, onChange }) {
  return (
    <>
      <div className="input-group">
        <label htmlFor="student-dept-select" className="input-label">
          Department / Stream <span className="input-required">*</span>
        </label>
        <div className="input-wrapper">
          <select
            id="student-dept-select"
            name="department"
            className="input-field"
            value={department}
            onChange={(e) => onChange('department', e.target.value)}
            required
          >
            <option value="">Select your department</option>
            {departmentOptions.map((dept) => (
              <option key={dept} value={dept}>{dept}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="form-field-wrapper">
        <Input
          label="Specialization / Branch"
          name="branch"
          type="text"
          placeholder="e.g. Software Engineering / Cloud"
          value={branch}
          onChange={(e) => onChange('branch', e.target.value)}
        />
      </div>

      <div className="form-field-wrapper">
        <Input
          label="Expected Graduation Year"
          name="batch"
          type="number"
          min="2020"
          max="2035"
          placeholder="e.g. 2026"
          value={batch}
          onChange={(e) => onChange('batch', parseInt(e.target.value, 10) || '')}
          required
          icon={<Calendar size={16} />}
        />
      </div>

      <div className="form-field-full">
        <label htmlFor="student-bio" className="input-label">Professional Summary / Career Objective</label>
        <textarea
          id="student-bio"
          name="bio"
          rows="3"
          className="input-textarea"
          placeholder="Briefly describe your career aspirations, core technical proficiencies..."
          value={bio}
          onChange={(e) => onChange('bio', e.target.value)}
        />
        <span className="field-hint">Visible to recruitment partners when screening your application.</span>
      </div>
    </>
  );
}
