import React from 'react';
import { GraduationCap, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Features', href: '#features' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Top Recruiters', href: '#recruiters' },
    { name: 'Why PlaceTrack', href: '#about' },
    { name: 'Contact Cell', href: '#contact' },
  ];

  return (
    <footer id="contact" className="w-full bg-white text-slate-600 border-t border-slate-200/90 mt-auto">
      {/* Upper Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b border-slate-200">
          
          {/* Brand info */}
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-teal-600 flex items-center justify-center text-white shadow-xs">
                <GraduationCap className="w-5 h-5 stroke-[2.2]" />
              </div>
              <span className="text-xl font-bold text-slate-900">
                Place<span className="text-teal-600">Track</span>
              </span>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed">
              Enterprise-grade campus placement management and recruitment tracking platform for students, universities, and corporate recruiters.
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">Quick Navigation</h4>
            <ul className="space-y-1.5 text-xs text-slate-600">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-teal-600 transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact cell */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">Placement Cell Help</h4>
            <ul className="space-y-1.5 text-xs text-slate-600">
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                <span>placements@placetrack.edu</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                <span>+1 (555) 382-7200</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                <span>Block IV, TPO Complex</span>
              </li>
            </ul>
          </div>

          {/* University note */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">Drive Schedule</h4>
            <div className="p-3 bg-teal-50/70 rounded-xl border border-teal-200/60 text-xs text-slate-700">
              <span className="font-semibold text-teal-800">Placement Cycle 2026:</span> Top Dream Tier-1 recruiters actively conducting on-campus recruitment drives.
            </div>
          </div>

        </div>

        {/* Bottom Banner */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <h2 className="text-xs font-semibold text-slate-600 text-center sm:text-left">
            &copy; 2026 PlaceTrack Inc. Smart Placement Management &amp; Tracking Platform. All rights reserved.
          </h2>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 text-slate-700 hover:text-teal-600 hover:border-teal-300 transition-colors cursor-pointer border border-slate-200 shadow-2xs font-medium"
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
