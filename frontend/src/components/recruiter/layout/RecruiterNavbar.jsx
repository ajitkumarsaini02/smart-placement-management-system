import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import Button from '../../common/Button';
import { Briefcase, Building, LogOut, Menu, X, ShieldCheck, Clock } from 'lucide-react';

export default function RecruiterNavbar({ navItems, user, isVerified, onLogout, mobileMenuOpen, setMobileMenuOpen }) {
  return (
    <header className="recruiter-navbar">
      <div className="recruiter-nav-container">
        <Link to="/recruiter/dashboard" className="recruiter-nav-brand">
          <div className="recruiter-brand-icon-box"><Briefcase size={20} /></div>
          <div className="recruiter-brand-text">
            <span className="recruiter-brand-name">Place<span className="recruiter-brand-accent">Track</span></span>
            <span className="recruiter-portal-tag">ABESEC Ghaziabad &bull; Recruiter Portal</span>
          </div>
        </Link>

        <nav className="recruiter-desktop-nav">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => `recruiter-nav-link ${isActive ? 'recruiter-nav-link-active' : ''}`}
            >
              <span className="recruiter-nav-icon">{item.icon}</span>
              <span className="recruiter-nav-text">{item.label}</span>
            </NavLink>
          ))}
        </nav>

        <div className="recruiter-nav-actions">
          <div className="recruiter-user-pill">
            <div className="recruiter-avatar-circle"><Building size={16} /></div>
            <div className="recruiter-user-details">
              <span className="recruiter-user-name">{user?.name || 'Recruiter'}</span>
              <span className="recruiter-user-role">
                {isVerified || user?.isVerified ? (
                  <span className="verified-tag"><ShieldCheck size={12} /> Verified Partner</span>
                ) : (
                  <span className="pending-tag"><Clock size={12} /> Pending TPO Verification</span>
                )}
              </span>
            </div>
          </div>

          <Button variant="outline" size="sm" onClick={onLogout} className="recruiter-logout-btn" icon={<LogOut size={15} />}>
            Sign Out
          </Button>

          <button type="button" className="recruiter-mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle Navigation">
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="recruiter-mobile-menu">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) => `recruiter-mobile-link ${isActive ? 'recruiter-mobile-link-active' : ''}`}
            >
              <span className="mobile-icon">{item.icon}</span>
              <span className="mobile-label">{item.label}</span>
            </NavLink>
          ))}
          <div className="recruiter-mobile-menu-divider" />
          <button type="button" onClick={onLogout} className="recruiter-mobile-logout">
            <LogOut size={16} /> Sign Out
          </button>
        </div>
      )}
    </header>
  );
}
