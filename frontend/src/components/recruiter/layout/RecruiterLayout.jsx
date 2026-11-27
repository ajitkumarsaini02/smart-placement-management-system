import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import RecruiterNavbar from './RecruiterNavbar';
import { LayoutDashboard, Building, FilePlus, Users, GitBranch, ChevronRight } from 'lucide-react';

const currentYear = new Date().getFullYear();

const RecruiterLayout = ({ children, pageTitle, pageSubtitle, actionButton, isVerified = false }) => {
  const { user, logout } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { to: '/recruiter/dashboard', label: 'Dashboard', icon: <LayoutDashboard size={18} /> },
    { to: '/recruiter/company', label: 'Company Profile', icon: <Building size={18} /> },
    { to: '/recruiter/jobs', label: 'Manage Jobs', icon: <FilePlus size={18} /> },
    { to: '/recruiter/candidates', label: 'Candidates', icon: <Users size={18} /> },
    { to: '/recruiter/recruitment', label: 'Recruitment Funnel', icon: <GitBranch size={18} /> },
  ];

  return (
    <div className="recruiter-portal-wrapper">
      <RecruiterNavbar
        navItems={navItems}
        user={user}
        isVerified={isVerified}
        onLogout={logout}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      {(pageTitle || pageSubtitle || actionButton) && (
        <section className="recruiter-page-header">
          <div className="recruiter-container">
            <div className="recruiter-page-header-row">
              <div className="recruiter-page-header-content">
                <div className="recruiter-breadcrumbs">
                  <Link to="/recruiter/dashboard" className="crumb-link">Hiring Portal</Link>
                  <ChevronRight size={14} className="crumb-sep" />
                  <span className="crumb-current">{pageTitle}</span>
                </div>
                <h1 className="recruiter-page-title">{pageTitle}</h1>
                {pageSubtitle && <p className="recruiter-page-subtitle">{pageSubtitle}</p>}
              </div>
              {actionButton && <div className="recruiter-page-action-slot">{actionButton}</div>}
            </div>
          </div>
        </section>
      )}

      <main className="recruiter-main-content">
        <div className="recruiter-container">{children}</div>
      </main>

      <footer className="recruiter-portal-footer">
        <div className="recruiter-container recruiter-footer-inner">
          <div className="portal-footer-credits">
            <p className="portal-dev-by">
              Developed &amp; Maintained By: <span>Ajit Kumar Saini, Aditya Yadav (CSE-11)</span>
            </p>
            <p className="portal-team-badge">Full Stack Development Team</p>
            <p className="portal-copyright">© 2026 ABESEC Ghaziabad. All Rights Reserved.</p>
          </div>
          <div className="recruiter-footer-links">
            <Link to="/recruiter/dashboard">Dashboard</Link>
            <Link to="/recruiter/company">Profile</Link>
            <Link to="/recruiter/jobs">Jobs</Link>
            <Link to="/recruiter/candidates">Candidates</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default RecruiterLayout;
