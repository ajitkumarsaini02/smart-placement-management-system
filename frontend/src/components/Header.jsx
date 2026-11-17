import React from 'react';
import { GraduationCap } from 'lucide-react';

const Header = () => {
  return (
    <header className="w-full bg-[#142233] text-white py-3 px-4 sm:px-8 border-b border-slate-700/60 shadow-md">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2.5">
        
        {/* Brand identity */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20">
            <GraduationCap className="w-5 h-5 stroke-[2.2]" />
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-white leading-none">
              Place<span className="text-blue-400">Track</span>
            </h1>
            <span className="text-[10px] uppercase font-semibold tracking-wider text-slate-400">
              Smart Placement Management & Tracking System
            </span>
          </div>
        </div>

        {/* Right status badge */}
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-300 border border-blue-400/30">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>2026 Campus Placement Cycle Active</span>
          </span>
          <span className="text-xs text-slate-400 hidden md:inline">
            TPO University Portal
          </span>
        </div>

      </div>
    </header>
  );
};

export default Header;
