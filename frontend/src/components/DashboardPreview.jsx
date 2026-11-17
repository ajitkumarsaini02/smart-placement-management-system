import React, { useState } from 'react';
import { 
  Briefcase, 
  CheckCircle2, 
  Clock, 
  Calendar, 
  ChevronRight, 
  TrendingUp, 
  ShieldCheck,
  Star,
  Sparkles
} from 'lucide-react';
import { heroJobOffers, upcomingInterviews } from '../data/placementData';

const DashboardPreview = () => {
  const [activeTab, setActiveTab] = useState('drives'); // 'drives' | 'stages' | 'interviews'

  return (
    <div className="relative mx-auto w-full max-w-2xl lg:max-w-none">
      {/* Decorative background glow accents */}
      <div className="absolute -top-10 -right-10 w-72 h-72 bg-sky-200/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-blue-200/40 rounded-full blur-3xl pointer-events-none" />

      {/* Main SaaS Window Frame */}
      <div className="relative bg-white rounded-2xl border border-slate-200 shadow-2xl shadow-blue-900/10 overflow-hidden transition-all duration-300 hover:shadow-blue-900/15">
        
        {/* Browser / Application Top Bar */}
        <div className="px-4 py-3 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 rounded-full bg-rose-400" />
            <span className="w-3 h-3 rounded-full bg-amber-400" />
            <span className="w-3 h-3 rounded-full bg-emerald-400" />
            <span className="ml-2 text-xs font-medium text-slate-400 font-mono hidden sm:inline-block">
              app.placetrack.edu/student/portal
            </span>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold border border-blue-200/60">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              <span>Drive Season 2026</span>
            </div>
            <div className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 text-[10px] font-bold">
              AS
            </div>
          </div>
        </div>

        {/* Dashboard Content Container */}
        <div className="p-4 sm:p-6 bg-white space-y-5">
          
          {/* Quick Profile Summary Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3.5 bg-slate-50 rounded-xl border border-slate-200/70">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-sm shadow-sm">
                AS
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h4 className="text-sm font-bold text-slate-900">Aarav Sharma</h4>
                  <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded text-[10px] font-medium bg-emerald-100 text-emerald-800">
                    <ShieldCheck className="w-3 h-3" />
                    Verified
                  </span>
                </div>
                <p className="text-xs text-slate-500">
                  B.Tech Computer Science • CGPA 8.92 • Batch 2026
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 self-start sm:self-auto">
              <span className="px-2.5 py-1 rounded-md text-xs font-medium bg-white border border-slate-200 text-slate-700 shadow-2xs">
                Zero Backlogs
              </span>
              <span className="px-2.5 py-1 rounded-md text-xs font-semibold bg-emerald-50 border border-emerald-200 text-emerald-700">
                Tier-1 Eligible
              </span>
            </div>
          </div>

          {/* 1. Placement Statistics Snapshot */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            <div className="p-3 rounded-xl bg-gradient-to-br from-blue-50/80 to-white border border-blue-100">
              <div className="flex items-center justify-between text-blue-600 mb-1">
                <Briefcase className="w-4 h-4" />
                <span className="text-[10px] font-bold text-blue-600 uppercase">Active</span>
              </div>
              <div className="text-xl font-bold text-slate-900">14</div>
              <div className="text-[11px] text-slate-500 font-medium">Eligible Drives</div>
            </div>

            <div className="p-3 rounded-xl bg-gradient-to-br from-sky-50/80 to-white border border-sky-100">
              <div className="flex items-center justify-between text-sky-600 mb-1">
                <TrendingUp className="w-4 h-4" />
                <span className="text-[10px] font-bold text-emerald-600">+2 New</span>
              </div>
              <div className="text-xl font-bold text-slate-900">5</div>
              <div className="text-[11px] text-slate-500 font-medium">Shortlisted</div>
            </div>

            <div className="p-3 rounded-xl bg-gradient-to-br from-emerald-50/80 to-white border border-emerald-100">
              <div className="flex items-center justify-between text-emerald-600 mb-1">
                <CheckCircle2 className="w-4 h-4" />
                <span className="text-[10px] font-bold text-emerald-700">Highest</span>
              </div>
              <div className="text-xl font-bold text-slate-900">44.5 LPA</div>
              <div className="text-[11px] text-slate-500 font-medium">Top Offer CTC</div>
            </div>

            <div className="p-3 rounded-xl bg-gradient-to-br from-purple-50/80 to-white border border-purple-100">
              <div className="flex items-center justify-between text-purple-600 mb-1">
                <Calendar className="w-4 h-4" />
                <span className="text-[10px] font-bold text-purple-600">Today</span>
              </div>
              <div className="text-xl font-bold text-slate-900">2</div>
              <div className="text-[11px] text-slate-500 font-medium">Interviews</div>
            </div>
          </div>

          {/* Interactive Navigation Tabs inside Mockup */}
          <div className="flex items-center justify-between border-b border-slate-200 pb-2">
            <div className="flex space-x-1 sm:space-x-2">
              <button
                onClick={() => setActiveTab('drives')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                  activeTab === 'drives'
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                Recent Opportunities
              </button>
              <button
                onClick={() => setActiveTab('stages')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                  activeTab === 'stages'
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                Application Pipeline
              </button>
              <button
                onClick={() => setActiveTab('interviews')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                  activeTab === 'interviews'
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                Upcoming Interviews
              </button>
            </div>
            <span className="text-[11px] text-slate-400 font-medium hidden md:inline">
              Live Mock Preview
            </span>
          </div>

          {/* Tab Content 1: Recent Job Opportunities */}
          {activeTab === 'drives' && (
            <div className="space-y-3">
              {heroJobOffers.map((job) => (
                <div
                  key={job.id}
                  className="p-3.5 rounded-xl border border-slate-200/80 hover:border-blue-400 bg-white hover:bg-blue-50/30 transition-all duration-200 group flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center font-bold text-slate-800 text-sm">
                      {job.company.substring(0, 2).toUpperCase()}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-bold text-sm text-slate-900 group-hover:text-blue-600 transition-colors">
                          {job.company}
                        </span>
                        <span className="text-xs text-slate-400">•</span>
                        <span className="text-xs font-medium text-slate-600">{job.role}</span>
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-blue-50 text-blue-700 border border-blue-200">
                          {job.type}
                        </span>
                      </div>
                      <div className="flex items-center gap-3 mt-1 text-xs text-slate-500">
                        <span className="font-semibold text-slate-900">{job.package}</span>
                        <span>•</span>
                        <span>{job.eligibility}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between sm:justify-end gap-2 shrink-0">
                    <span className="inline-flex items-center gap-1 text-[11px] text-amber-700 bg-amber-50 px-2 py-1 rounded-md border border-amber-200/60">
                      <Clock className="w-3 h-3" />
                      {job.deadline}
                    </span>
                    <button className="px-3 py-1 rounded-lg text-xs font-semibold text-blue-600 bg-blue-50 hover:bg-blue-600 hover:text-white transition-colors cursor-pointer">
                      Apply
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Tab Content 2: Application Progress Tracker */}
          {activeTab === 'stages' && (
            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h5 className="text-sm font-bold text-slate-900">
                    Google • Software Development Engineer (SDE-1)
                  </h5>
                  <p className="text-xs text-slate-500">Application ID: #PT-2026-9812 • On-Campus Drive</p>
                </div>
                <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800">
                  Round 3 In Progress
                </span>
              </div>

              {/* Step Progress Line */}
              <div className="pt-2">
                <div className="grid grid-cols-4 gap-2 text-center">
                  <div className="space-y-1">
                    <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto text-xs font-bold shadow-xs">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div className="text-[11px] font-bold text-slate-800">Applied</div>
                    <div className="text-[10px] text-slate-400">Completed</div>
                  </div>

                  <div className="space-y-1">
                    <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto text-xs font-bold shadow-xs">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div className="text-[11px] font-bold text-slate-800">Shortlisted</div>
                    <div className="text-[10px] text-slate-400">CGPA 8.92 Passed</div>
                  </div>

                  <div className="space-y-1">
                    <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center mx-auto text-xs font-bold shadow-xs animate-pulse ring-4 ring-blue-100">
                      3
                    </div>
                    <div className="text-[11px] font-bold text-blue-600">Tech Round</div>
                    <div className="text-[10px] text-blue-600 font-semibold">Today 2:30 PM</div>
                  </div>

                  <div className="space-y-1 opacity-50">
                    <div className="w-8 h-8 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center mx-auto text-xs font-bold">
                      4
                    </div>
                    <div className="text-[11px] font-medium text-slate-600">Offer Letter</div>
                    <div className="text-[10px] text-slate-400">Pending Round</div>
                  </div>
                </div>
              </div>

              {/* Progress Detail Box */}
              <div className="p-3 bg-white rounded-lg border border-slate-200 text-xs text-slate-600 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-500" />
                  <span>Interview link generated with interviewer panel from Google Cloud Bangalore.</span>
                </div>
                <button className="text-blue-600 font-semibold hover:underline cursor-pointer">View Room</button>
              </div>
            </div>
          )}

          {/* Tab Content 3: Upcoming Interviews */}
          {activeTab === 'interviews' && (
            <div className="space-y-3">
              {upcomingInterviews.map((interview) => (
                <div
                  key={interview.id}
                  className="p-3.5 rounded-xl border border-slate-200 bg-white hover:border-blue-400 transition-colors flex items-center justify-between"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 font-bold">
                      <Calendar className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-sm text-slate-900">{interview.company}</span>
                        <span className="text-xs text-slate-400">•</span>
                        <span className="text-xs font-medium text-slate-600">{interview.round}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-slate-500 mt-0.5">
                        <span className="text-blue-600 font-medium">{interview.time}</span>
                        <span>•</span>
                        <span>{interview.mode}</span>
                      </div>
                    </div>
                  </div>

                  <span className="px-2.5 py-1 rounded-md text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                    Confirmed
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Bottom Card Footer with Live Sync notice */}
          <div className="pt-2 flex items-center justify-between text-xs text-slate-400 border-t border-slate-100">
            <span className="flex items-center gap-1.5 text-slate-500">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              Automated sync with College TPO Database
            </span>
            <span className="font-semibold text-blue-600 flex items-center gap-1">
              Explore Live Workspace
              <ChevronRight className="w-3.5 h-3.5" />
            </span>
          </div>

        </div>
      </div>

      {/* Floating Decorative Badges */}
      <div className="hidden sm:flex items-center gap-3 absolute -bottom-5 -right-5 bg-white py-2.5 px-4 rounded-xl shadow-xl border border-slate-200/90 text-xs font-semibold text-slate-800">
        <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
          <CheckCircle2 className="w-4 h-4" />
        </div>
        <div>
          <div className="text-slate-900 font-bold">Offer Rolled Out!</div>
          <div className="text-emerald-600 text-[11px] font-semibold">Google SDE • 42.5 LPA</div>
        </div>
      </div>

      <div className="hidden sm:flex items-center gap-2.5 absolute -top-5 -left-5 bg-white py-2 px-3.5 rounded-xl shadow-xl border border-slate-200/90 text-xs font-semibold text-slate-800">
        <div className="w-6 h-6 rounded-md bg-blue-50 text-blue-600 flex items-center justify-center">
          <Star className="w-3.5 h-3.5 fill-blue-600" />
        </div>
        <span>Placement Rate: 95%</span>
      </div>

    </div>
  );
};

export default DashboardPreview;
