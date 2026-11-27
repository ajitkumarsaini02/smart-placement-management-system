import React from 'react';
import { GraduationCap, School, Briefcase } from 'lucide-react';

const RoleSelector = ({ onSelectRole }) => {
  return (
    <div className="split-auth-card-wrapper">
      {/* Header */}
      <div className="split-auth-header">
        <h2 className="split-auth-title">Welcome Back</h2>
        <p className="split-auth-subtitle">Select your role to continue</p>
      </div>

      {/* Role Cards List */}
      <div className="role-cards-stack">
        {/* Student Role */}
        <button
          type="button"
          className="role-card-button"
          onClick={() => onSelectRole('student')}
        >
          <div className="role-icon-box mint">
            <GraduationCap size={22} />
          </div>
          <div className="role-details">
            <h3 className="role-name">Student</h3>
            <p className="role-tagline">Profile, jobs, applications.</p>
          </div>
        </button>

        {/* College / Institution Role */}
        <button
          type="button"
          className="role-card-button"
          onClick={() => onSelectRole('tpo')}
        >
          <div className="role-icon-box mint">
            <School size={22} />
          </div>
          <div className="role-details">
            <h3 className="role-name">College / Institution</h3>
            <p className="role-tagline">Students, credentials, analytics.</p>
          </div>
        </button>

        {/* Company / Recruiter Role */}
        <button
          type="button"
          className="role-card-button"
          onClick={() => onSelectRole('recruiter')}
        >
          <div className="role-icon-box emerald">
            <Briefcase size={22} />
          </div>
          <div className="role-details">
            <h3 className="role-name">Company / Recruiter</h3>
            <p className="role-tagline">Search talent. Post jobs. Schedule.</p>
          </div>
        </button>
      </div>

      {/* Super Admin Access */}
      <div className="super-admin-row">
        <button
          type="button"
          className="super-admin-link-btn"
          onClick={() => onSelectRole('admin')}
        >
          Super Admin? Click here →
        </button>
      </div>

      <div style={{ textAlign: 'center', marginTop: '16px', fontSize: '0.8rem', color: '#047857', fontWeight: '500' }}>
        ⚡ Instant Demo Mode Active • Sign In Without Backend
      </div>
    </div>
  );
};

export default RoleSelector;
