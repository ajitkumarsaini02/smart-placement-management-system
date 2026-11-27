import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import TPONavbar from './TPONavbar';
import { LayoutDashboard, Users, Building2, Calendar, FileCheck, BarChart3, ChevronRight } from 'lucide-react';

const currentYear = new Date().getFullYear();

const TPOLayout = ({ children, pageTitle, pageSubtitle, actionButton }) => {
  const { user, logout } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { to: '/tpo/dashboard', label: 'Dashboard', icon: <LayoutDashboard size={18} /> },
    { to: '/tpo/students', label: 'Students', icon: <Users size={18} /> },
    { to: '/tpo/companies', label: 'Companies', icon: <Building2 size={18} /> },
    { to: '/tpo/drives', label: 'Placement Drives', icon: <Calendar size={18} /> },
    { to: '/tpo/applications', label: 'Applications', icon: <FileCheck size={18} /> },
    { to: '/tpo/reports', label: 'Reports & Analytics', icon: <BarChart3 size={18} /> },
  ];

  return (
    <div className="tpo-portal-wrapper">
      <TPONavbar navItems={navItems} user={user} onLogout={logout} mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />

      {(pageTitle || pageSubtitle || actionButton) && (
        <section className="tpo-page-header">
          <div className="tpo-container">
            <div className="tpo-page-header-row">
              <div className="tpo-page-header-content">
                <div className="tpo-breadcrumbs">
                  <Link to="/tpo/dashboard" className="crumb-link">TPO Portal</Link>
                  <ChevronRight size={14} className="crumb-sep" />
                  <span className="crumb-current">{pageTitle}</span>
                </div>
                <h1 className="tpo-page-title">{pageTitle}</h1>
                {pageSubtitle && <p className="tpo-page-subtitle">{pageSubtitle}</p>}
              </div>
              {actionButton && <div className="tpo-page-action-slot">{actionButton}</div>}
            </div>
          </div>
        </section>
      )}

      <main className="tpo-main-content">
        <div className="tpo-container">{children}</div>
      </main>

      <footer className="tpo-portal-footer">
        <div className="tpo-container tpo-footer-inner">
          <div className="portal-footer-credits">
            <p className="portal-dev-by">
              Developed &amp; Maintained By: <span>Ajit Kumar Saini, Aditya Yadav (CSE-11)</span>
            </p>
            <p className="portal-team-badge">Full Stack Development Team</p>
            <p className="portal-copyright">© 2026 ABESEC Ghaziabad. All Rights Reserved.</p>
          </div>
          <div className="tpo-footer-links">
            <Link to="/tpo/dashboard">Dashboard</Link>
            <Link to="/tpo/students">Students</Link>
            <Link to="/tpo/companies">Companies</Link>
            <Link to="/tpo/reports">Reports</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TPOLayout;
