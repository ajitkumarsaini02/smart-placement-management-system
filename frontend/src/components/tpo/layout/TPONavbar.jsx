import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import Button from '../../common/Button';
import { Briefcase, ShieldCheck, LogOut, Menu, X } from 'lucide-react';

export default function TPONavbar({ navItems, user, onLogout, mobileMenuOpen, setMobileMenuOpen }) {
  return (
    <header className="tpo-navbar">
      <div className="tpo-nav-container">
        <Link to="/tpo/dashboard" className="tpo-nav-brand">
          <div className="tpo-brand-icon-box"><Briefcase size={20} /></div>
          <div className="tpo-brand-text">
            <span className="tpo-brand-name">Place<span className="tpo-brand-accent">Track</span></span>
            <span className="tpo-portal-tag">TPO Office</span>
          </div>
          <span className="header-institution-badge">ABESEC Ghaziabad</span>
        </Link>

        <nav className="tpo-desktop-nav">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => `tpo-nav-link ${isActive ? 'tpo-nav-link-active' : ''}`}
            >
              <span className="tpo-nav-icon">{item.icon}</span>
              <span className="tpo-nav-text">{item.label}</span>
            </NavLink>
          ))}
        </nav>

        <div className="tpo-nav-actions">
          <div className="tpo-user-pill">
            <div className="tpo-avatar-circle"><ShieldCheck size={16} /></div>
            <div className="tpo-user-details">
              <span className="tpo-user-name">{user?.name || 'Placement Cell'}</span>
              <span className="tpo-user-role">Placement Officer</span>
            </div>
          </div>

          <Button variant="outline" size="sm" onClick={onLogout} className="tpo-logout-btn" icon={<LogOut size={15} />}>
            Sign Out
          </Button>

          <button type="button" className="tpo-mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle Navigation">
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="tpo-mobile-menu">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) => `tpo-mobile-link ${isActive ? 'tpo-mobile-link-active' : ''}`}
            >
              <span className="mobile-icon">{item.icon}</span>
              <span className="mobile-label">{item.label}</span>
            </NavLink>
          ))}
          <div className="tpo-mobile-menu-divider" />
          <button type="button" onClick={onLogout} className="tpo-mobile-logout"><LogOut size={16} /> Sign Out</button>
        </div>
      )}
    </header>
  );
}
