import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import Button from '../../common/Button';
import { Briefcase, GraduationCap, LogOut, Menu, X } from 'lucide-react';

export default function StudentNavbar({ navItems, user, onLogout, mobileMenuOpen, setMobileMenuOpen }) {
  return (
    <header className="student-navbar">
      <div className="student-nav-container">
        <Link to="/student/dashboard" className="student-nav-brand">
          <div className="brand-icon-box"><Briefcase size={20} /></div>
          <div className="brand-text">
            <span className="brand-name">Place<span className="brand-accent">Track</span></span>
            <span className="portal-tag">Student Portal</span>
          </div>
        </Link>

        <nav className="student-desktop-nav">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => `student-nav-link ${isActive ? 'student-nav-link-active' : ''}`}
            >
              <span className="nav-item-icon">{item.icon}</span>
              <span className="nav-item-text">{item.label}</span>
              {item.badge && <span className="nav-item-pill">{item.badge}</span>}
            </NavLink>
          ))}
        </nav>

        <div className="student-nav-actions">
          <div className="student-user-pill">
            <div className="student-avatar-circle">{user?.name ? user.name.charAt(0).toUpperCase() : 'S'}</div>
            <div className="student-user-details">
              <span className="student-user-name">{user?.name || 'Student'}</span>
              <span className="student-user-role"><GraduationCap size={12} /> B.Tech Student</span>
            </div>
          </div>

          <Button variant="outline" size="sm" onClick={onLogout} className="student-logout-btn" icon={<LogOut size={15} />}>
            Sign Out
          </Button>

          <button type="button" className="student-mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle Navigation">
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="student-mobile-menu">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) => `student-mobile-link ${isActive ? 'student-mobile-link-active' : ''}`}
            >
              <span className="mobile-icon">{item.icon}</span>
              <span className="mobile-label">{item.label}</span>
              {item.badge && <span className="nav-item-pill">{item.badge}</span>}
            </NavLink>
          ))}
          <div className="mobile-menu-divider" />
          <button type="button" onClick={onLogout} className="student-mobile-logout">
            <LogOut size={16} /> Sign Out
          </button>
        </div>
      )}
    </header>
  );
}
