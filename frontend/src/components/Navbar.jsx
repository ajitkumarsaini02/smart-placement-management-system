import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home as HomeIcon, 
  Briefcase, 
  FileCheck2, 
  User, 
  Settings as SettingsIcon,
  Menu,
  X,
  Compass
} from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/', icon: HomeIcon },
    { name: 'Campus Drives', path: '/drives', icon: Briefcase },
    { name: 'My Applications', path: '/myapplications', icon: FileCheck2 },
    { name: 'My Profile', path: '/myprofile', icon: User },
    { name: 'Settings', path: '/settings', icon: SettingsIcon },
  ];

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="sticky top-0 z-40 w-full bg-[#d65d25] text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between min-h-[56px] py-1">
        
        {/* Desktop Router Links */}
        <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const active = isActive(link.path);
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                  active
                    ? 'bg-[#b84a16] text-white shadow-xs'
                    : 'text-white/90 hover:bg-[#f36c45] hover:text-white'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{link.name}</span>
              </Link>
            );
          })}
        </div>

        {/* Quick link on right */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/drives"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-white text-[#d65d25] hover:bg-slate-100 transition-colors shadow-2xs"
          >
            <Compass className="w-3.5 h-3.5" />
            <span>Explore 14 Active Drives</span>
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="flex md:hidden items-center justify-between w-full py-2">
          <span className="font-bold text-sm tracking-wide">PlaceTrack Navigation</span>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded-lg text-white hover:bg-[#f36c45] transition-colors"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#b84a16] px-4 pt-2 pb-4 space-y-1 border-t border-white/10">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const active = isActive(link.path);
            return (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center gap-2.5 px-3.5 py-2.5 rounded-lg text-sm font-medium ${
                  active
                    ? 'bg-white text-[#b84a16] font-bold shadow-xs'
                    : 'text-white/90 hover:bg-[#d65d25]'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{link.name}</span>
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
