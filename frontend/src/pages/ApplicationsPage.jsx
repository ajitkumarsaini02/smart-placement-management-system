import React from 'react';
import { Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ApplicationsPage = () => {
  const applications = [
    {
      id: "PT-2026-9812",
      company: "Google India",
      role: "Software Development Engineer (SDE-1)",
      package: "42.5 LPA",
      appliedDate: "12 Nov 2026",
      status: "Technical Round 2",
      badgeColor: "bg-blue-100 text-blue-800",
      nextStep: "System Design Interview Today at 2:30 PM",
    },
    {
      id: "PT-2026-8741",
      company: "Microsoft IDC",
      role: "Cloud Solution Architect",
      package: "44.5 LPA",
      appliedDate: "10 Nov 2026",
      status: "Shortlisted",
      badgeColor: "bg-emerald-100 text-emerald-800",
      nextStep: "Online Technical Assessment on Friday",
    },
    {
      id: "PT-2026-7619",
      company: "Amazon Web Services",
      role: "Software Development Intern",
      package: "₹1,10,000 / mo",
      appliedDate: "08 Nov 2026",
      status: "Assessment Passed",
      badgeColor: "bg-purple-100 text-purple-800",
      nextStep: "Interview Slot Booking Open",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-8 py-10 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            My Applications & Drive Status
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Real-time recruitment pipeline updates across active on-campus and pooled drives
          </p>
        </div>

        <Link
          to="/drives"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-2xs self-start sm:self-auto"
        >
          <span>Explore More Drives</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      {/* Applications List */}
      <div className="space-y-4">
        {applications.map((app) => (
          <div
            key={app.id}
            className="p-5 rounded-2xl bg-white border border-slate-200 shadow-premium flex flex-col md:flex-row md:items-center justify-between gap-4"
          >
            <div className="space-y-1.5">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="font-bold text-base text-slate-900">{app.company}</span>
                <span className="text-xs text-slate-400">•</span>
                <span className="text-xs font-semibold text-slate-700">{app.role}</span>
                <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${app.badgeColor}`}>
                  {app.status}
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-500">
                <span>App ID: <strong className="text-slate-800">{app.id}</strong></span>
                <span>Package: <strong className="text-blue-600">{app.package}</strong></span>
                <span>Applied: {app.appliedDate}</span>
              </div>

              <div className="flex items-center gap-1.5 text-xs text-slate-700 pt-1 font-medium">
                <Clock className="w-3.5 h-3.5 text-amber-600" />
                <span>Next Milestone: {app.nextStep}</span>
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0 pt-2 md:pt-0 border-t md:border-t-0 border-slate-100">
              <button className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors">
                View Timeline
              </button>
              <button className="px-4 py-2 rounded-xl text-xs font-semibold bg-blue-50 hover:bg-blue-600 hover:text-white text-blue-700 transition-colors">
                Interview Room
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApplicationsPage;
