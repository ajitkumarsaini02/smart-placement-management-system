import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function StudentProfileBanner({ student, profileCompletion }) {
  return (
    <section className="dashboard-profile-banner">
      <div className="profile-banner-content">
        <div className="profile-banner-info">
          <div className="banner-badge-row">
            <span className="profile-banner-tag">
              <Sparkles size={14} className="text-emerald" /> Profile Readiness
            </span>
            <span className="profile-percentage-text">{profileCompletion}% Complete</span>
          </div>
          <h3 className="profile-banner-heading">
            {profileCompletion === 100
              ? 'Your profile is 100% complete & recruitment-ready!'
              : 'Complete your profile to maximize job shortlisting!'}
          </h3>
          <p className="profile-banner-desc">
            {!student?.resume?.url
              ? 'Action Required: Upload your PDF resume so companies can review your profile.'
              : !student?.skills || student.skills.length === 0
              ? 'Action Required: Add your core programming skills to match tech role criteria.'
              : 'Your profile and credentials are fully synchronized with campus placement recruiters.'}
          </p>
        </div>

        <div className="profile-progress-action">
          <div className="progress-bar-track">
            <div className="progress-bar-fill" style={{ width: `${Math.min(profileCompletion, 100)}%` }} />
          </div>
          <Link to="/student/profile" className="btn btn-primary btn-sm banner-action-btn">
            {profileCompletion === 100 ? 'Manage Profile' : 'Complete Profile'}
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}
