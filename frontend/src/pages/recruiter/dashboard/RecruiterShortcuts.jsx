import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, Users, Calendar, Building, ArrowRight } from 'lucide-react';

export default function RecruiterShortcuts() {
  return (
    <div className="dash-box">
      <h3 className="dash-box-title">Recruitment Management Shortcuts</h3>
      <div className="shortcuts-list">
        <Link to="/recruiter/jobs" className="shortcut-card">
          <div className="shortcut-icon-box"><Briefcase size={18} /></div>
          <div className="shortcut-details">
            <h4 className="shortcut-title">Manage Job Openings</h4>
            <p className="shortcut-desc">Create roles, publish openings, and set eligibility rules</p>
          </div>
          <ArrowRight size={16} className="shortcut-arrow" />
        </Link>

        <Link to="/recruiter/candidates" className="shortcut-card">
          <div className="shortcut-icon-box"><Users size={18} /></div>
          <div className="shortcut-details">
            <h4 className="shortcut-title">Screen Candidates & Resumes</h4>
            <p className="shortcut-desc">View student credentials, verified PDF resumes, and filter by CGPA</p>
          </div>
          <ArrowRight size={16} className="shortcut-arrow" />
        </Link>

        <Link to="/recruiter/recruitment" className="shortcut-card">
          <div className="shortcut-icon-box"><Calendar size={18} /></div>
          <div className="shortcut-details">
            <h4 className="shortcut-title">Recruitment Funnel & Pipeline</h4>
            <p className="shortcut-desc">Track applicants from Applied to Interview and Final Placement</p>
          </div>
          <ArrowRight size={16} className="shortcut-arrow" />
        </Link>

        <Link to="/recruiter/company" className="shortcut-card">
          <div className="shortcut-icon-box"><Building size={18} /></div>
          <div className="shortcut-details">
            <h4 className="shortcut-title">Company Profile & Branding</h4>
            <p className="shortcut-desc">Update official website, headquarters, description, and contact</p>
          </div>
          <ArrowRight size={16} className="shortcut-arrow" />
        </Link>
      </div>
    </div>
  );
}
