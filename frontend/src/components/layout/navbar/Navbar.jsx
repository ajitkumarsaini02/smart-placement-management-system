import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Briefcase, Menu, X } from 'lucide-react';
import useAuth from '../../../hooks/useAuth';
import NavbarActions from './NavbarActions';
import NavbarMobileMenu from './NavbarMobileMenu';

const navLinks = [
  { name: 'Home', href: '/#hero' },
  { name: 'Comparison', href: '/#problem-solution' },
  { name: 'Workflow', href: '/#workflow' },
  { name: 'Core Features', href: '/#modules' },
  { name: 'Results', href: '/#results' },
  { name: 'FAQ', href: '/#faq' },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getDashboardPath = () => {
    if (!user) return '/login';
    if (user.role === 'tpo' || user.role === 'admin') return '/tpo/dashboard';
    if (user.role === 'recruiter') return '/recruiter/dashboard';
    return '/student/dashboard';
  };

  const handleLogout = async () => {
    await logout();
    setMobileMenuOpen(false);
    navigate('/');
  };

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={() => setMobileMenuOpen(false)}>
          <div className="logo-icon-wrapper"><Briefcase size={20} className="logo-icon" /></div>
          <span className="logo-brand">Place<span className="logo-highlight">Track</span></span>
        </Link>
        <div className="nav-links-desktop">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="nav-link-item">{link.name}</a>
          ))}
        </div>
        <div className="nav-action-desktop">
          <NavbarActions
            isAuthenticated={isAuthenticated}
            user={user}
            getDashboardPath={getDashboardPath}
            handleLogout={handleLogout}
            navigate={navigate}
          />
        </div>
        <button
          type="button"
          className="mobile-toggle-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {mobileMenuOpen && (
        <NavbarMobileMenu
          navLinks={navLinks}
          handleLinkClick={() => setMobileMenuOpen(false)}
          isAuthenticated={isAuthenticated}
          user={user}
          getDashboardPath={getDashboardPath}
          handleLogout={handleLogout}
          navigate={navigate}
        />
      )}
    </nav>
  );
};

export default Navbar;
