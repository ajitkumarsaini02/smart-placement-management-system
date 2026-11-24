import React from 'react';
import { Link } from 'react-router-dom';
import { User as UserIcon, LogOut, ArrowRight } from 'lucide-react';
import Button from '../../common/Button';
import Badge from '../../common/Badge';

export const NavbarActions = ({ isAuthenticated, user, getDashboardPath, handleLogout, navigate }) => {
  if (isAuthenticated) {
    return (
      <div className="nav-authenticated-user">
        <Link to={getDashboardPath()} className="nav-user-pill">
          <UserIcon size={14} className="text-emerald" />
          <span className="nav-user-name">{user?.name}</span>
          <Badge variant="mint" size="sm">{user?.role?.toUpperCase()}</Badge>
        </Link>
        <Button to={getDashboardPath()} variant="primary" size="sm" onClick={() => navigate(getDashboardPath())}>
          Dashboard
        </Button>
        <button type="button" onClick={handleLogout} className="btn btn-ghost btn-sm" title="Sign Out">
          <LogOut size={16} />
        </button>
      </div>
    );
  }

  return (
    <>
      <Link to="/login" className="btn btn-ghost btn-sm">Login</Link>
      <Button variant="primary" size="sm" onClick={() => navigate('/register')} icon={<ArrowRight size={14} />} iconPosition="right">
        Get Started
      </Button>
    </>
  );
};

export default NavbarActions;
