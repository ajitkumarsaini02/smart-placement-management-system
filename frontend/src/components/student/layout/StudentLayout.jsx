import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import api from '../../../services/api';
import StudentNavbar from './StudentNavbar';
import { LayoutDashboard, Compass, FileCheck2, User, Bell, ChevronRight } from 'lucide-react';

const currentYear = new Date().getFullYear();

const StudentLayout = ({ children, pageTitle, pageSubtitle }) => {
  const { user, logout } = useAuth();
  const location = useLocation();
  const [unreadCount, setUnreadCount] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const fetchUnreadCount = async () => {
      try {
        const response = await api.get('/student/notifications');
        if (isMounted && response.data?.data) {
          setUnreadCount(response.data.data.unreadCount || 0);
        }
      } catch { /* Polling catch */ }
    };
    fetchUnreadCount();
    const interval = setInterval(fetchUnreadCount, 30000);
    return () => { isMounted = false; clearInterval(interval); };
  }, [location.pathname]);

  const navItems = [
    { to: '/student/dashboard', label: 'Dashboard', icon: <LayoutDashboard size={18} /> },
    { to: '/student/opportunities', label: 'Opportunities', icon: <Compass size={18} /> },
    { to: '/student/applications', label: 'My Applications', icon: <FileCheck2 size={18} /> },
    { to: '/student/profile', label: 'My Profile', icon: <User size={18} /> },
    { to: '/student/notifications', label: 'Notifications', icon: <Bell size={18} />, badge: unreadCount > 0 ? unreadCount : null },
  ];

  return (
    <div className="student-portal-wrapper">
      <StudentNavbar
        navItems={navItems}
        user={user}
        onLogout={logout}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      {(pageTitle || pageSubtitle) && (
        <section className="student-page-header">
          <div className="student-container">
            <div className="page-header-content">
              <div className="breadcrumbs">
                <Link to="/student/dashboard" className="crumb-link">Home</Link>
                <ChevronRight size={14} className="crumb-sep" />
                <span className="crumb-current">{pageTitle}</span>
              </div>
              <h1 className="student-page-title">{pageTitle}</h1>
              {pageSubtitle && <p className="student-page-subtitle">{pageSubtitle}</p>}
            </div>
          </div>
        </section>
      )}

      <main className="student-main-content">
        <div className="student-container">{children}</div>
      </main>

      <footer className="student-portal-footer">
        <div className="student-container footer-inner">
          <div className="portal-footer-credits">
            <p className="portal-dev-by">
              Developed &amp; Maintained By: <span>Ajit Kumar Saini, Aditya Yadav (CSE-11)</span>
            </p>
            <p className="portal-team-badge">Full Stack Development Team</p>
            <p className="portal-copyright">© 2026 ABESEC Ghaziabad. All Rights Reserved.</p>
          </div>
          <div className="footer-links">
            <Link to="/student/dashboard">Dashboard</Link>
            <Link to="/student/opportunities">Jobs</Link>
            <Link to="/student/profile">Profile</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default StudentLayout;
