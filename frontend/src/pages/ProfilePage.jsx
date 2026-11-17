import React from 'react';
import { ShieldCheck, FileCheck } from 'lucide-react';

const ProfilePage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-8 py-10 space-y-6">
      <div className="pb-6 border-b border-slate-200">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
          Student Placement Profile
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          Verified academic credentials, backlog status, and ATS resume versions
        </p>
      </div>

      {/* Profile Card */}
      <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-premium space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-blue-600 text-white flex items-center justify-center text-xl font-bold shadow-md">
              AS
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-bold text-slate-900">Ajit Kumar Saini</h3>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-800">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Verified by TPO
                </span>
              </div>
              <p className="text-xs text-slate-500">
                B.Tech Computer Science & Engineering • 2022 - 2026 Batch
              </p>
              <p className="text-xs text-slate-400 mt-0.5">Roll No: 22BCSE104 • University Registration: #UR-9821</p>
            </div>
          </div>

          <span className="px-3 py-1.5 rounded-xl text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200 self-start sm:self-auto">
            Super Dream Tier-1 Eligible
          </span>
        </div>

        {/* Academic Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
            <div className="text-[11px] font-medium text-slate-400">Current CGPA</div>
            <div className="text-xl font-black text-slate-900 mt-0.5">8.92</div>
            <div className="text-[10px] text-emerald-600 font-bold">Top 5% in Dept</div>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
            <div className="text-[11px] font-medium text-slate-400">Active Backlogs</div>
            <div className="text-xl font-black text-emerald-600 mt-0.5">0</div>
            <div className="text-[10px] text-slate-500">Zero Backlog Record</div>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
            <div className="text-[11px] font-medium text-slate-400">10th / 12th Marks</div>
            <div className="text-xl font-black text-slate-900 mt-0.5">94% / 91%</div>
            <div className="text-[10px] text-slate-500">Verified Board Score</div>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
            <div className="text-[11px] font-medium text-slate-400">Offers Received</div>
            <div className="text-xl font-black text-blue-600 mt-0.5">1 Offer</div>
            <div className="text-[10px] text-blue-600 font-bold">42.5 LPA (Google)</div>
          </div>
        </div>

        {/* Resume Section */}
        <div className="p-4 rounded-xl border border-blue-200 bg-blue-50/40 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <FileCheck className="w-5 h-5 text-blue-600" />
            <div>
              <div className="text-xs font-bold text-slate-900">Master_Resume_Software_Engineering.pdf</div>
              <div className="text-[11px] text-slate-500">ATS Score: 96/100 • Last updated 2 days ago</div>
            </div>
          </div>
          <button className="text-xs font-bold text-blue-600 hover:underline">
            Replace Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
