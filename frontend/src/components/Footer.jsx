import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#142233] text-slate-300 border-t border-slate-700/60 mt-auto">
      {/* Upper Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b border-slate-700/60">
          
          {/* Brand info */}
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-xs">
                <GraduationCap className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold text-white">
                Place<span className="text-blue-400">Track</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Enterprise-grade campus placement tracking platform built for 5th Semester B.Tech College Presentation.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Platform Routes</h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li><Link to="/" className="hover:text-blue-400 transition-colors">Home Landing Page</Link></li>
              <li><Link to="/drives" className="hover:text-blue-400 transition-colors">Campus Placement Drives</Link></li>
              <li><Link to="/myapplications" className="hover:text-blue-400 transition-colors">My Applications</Link></li>
              <li><Link to="/myprofile" className="hover:text-blue-400 transition-colors">Student Profile & CGPA</Link></li>
              <li><Link to="/settings" className="hover:text-blue-400 transition-colors">Settings & Alerts</Link></li>
            </ul>
          </div>

          {/* Contact cell */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Placement Cell Help</h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>placements@placetrack.edu</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>+1 (555) 382-7200</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>Block IV, TPO Complex</span>
              </li>
            </ul>
          </div>

          {/* University note */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Drive Schedule</h4>
            <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700 text-xs text-slate-300">
              <span className="font-semibold text-emerald-400">Phase-1 Live:</span> Top Dream Tier 1 Recruiters conducting aptitude & tech rounds this week.
            </div>
          </div>

        </div>

        {/* Bottom Banner with User's signature */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <h2 className="text-sm font-semibold text-slate-200 text-center sm:text-left">
            Design and Developed by <span className="text-rose-500">❤️</span> Ajit Kumar Saini &copy; 2026
          </h2>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors cursor-pointer border border-slate-700"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
