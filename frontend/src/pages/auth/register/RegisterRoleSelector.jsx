import React from 'react';
import { ShieldAlert } from 'lucide-react';

export const RegisterRoleSelector = ({ role, onChange }) => (
  <>
    <div className="role-selection-group">
      <label className="input-label">Select Your Role <span className="input-required">*</span></label>
      <div className="role-radio-grid">
        <label className={`role-card-option ${role === 'student' ? 'role-selected' : ''}`}>
          <input type="radio" name="role" value="student" checked={role === 'student'} onChange={onChange} className="sr-only" />
          <span className="role-radio-title">🎓 Student</span>
          <span className="role-radio-desc">Apply to drives & track offers</span>
        </label>
        <label className={`role-card-option ${role === 'recruiter' ? 'role-selected' : ''}`}>
          <input type="radio" name="role" value="recruiter" checked={role === 'recruiter'} onChange={onChange} className="sr-only" />
          <span className="role-radio-title">🏢 Recruiter</span>
          <span className="role-radio-desc">Post openings & hire talent</span>
        </label>
      </div>
    </div>
    <div className="tpo-policy-notice">
      <ShieldAlert size={16} className="tpo-notice-icon" />
      <p><strong>Looking for TPO access?</strong> Training and Placement Officer accounts are strictly provisioned by college administration.</p>
    </div>
  </>
);

export default RegisterRoleSelector;
