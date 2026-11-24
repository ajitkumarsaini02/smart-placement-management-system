import React from 'react';
import { ArrowRight, LogOut } from 'lucide-react';
import Button from '../../common/Button';

export const NavbarMobileMenu = ({
  navLinks,
  handleLinkClick,
  isAuthenticated,
  user,
  getDashboardPath,
  handleLogout,
  navigate,
}) => (
  <div className="mobile-menu-drawer">
    <div className="mobile-links-list">
      {navLinks.map((link) => (
        <a key={link.name} href={link.href} className="mobile-nav-link" onClick={handleLinkClick}>
          {link.name}
        </a>
      ))}
      <div className="mobile-btn-container">
        {isAuthenticated ? (
          <>
            <Button
              variant="primary"
              size="md"
              fullWidth
              onClick={() => {
                handleLinkClick();
                navigate(getDashboardPath());
              }}
            >
              Go to Dashboard
            </Button>
            <Button variant="outline" size="md" fullWidth onClick={handleLogout} icon={<LogOut size={16} />}>
              Sign Out ({user?.name})
            </Button>
          </>
        ) : (
          <>
            <Button
              variant="outline"
              size="md"
              fullWidth
              onClick={() => {
                handleLinkClick();
                navigate('/login');
              }}
            >
              Login
            </Button>
            <Button
              variant="primary"
              size="md"
              fullWidth
              onClick={() => {
                handleLinkClick();
                navigate('/register');
              }}
              icon={<ArrowRight size={14} />}
            >
              Get Started
            </Button>
          </>
        )}
      </div>
    </div>
  </div>
);

export default NavbarMobileMenu;
