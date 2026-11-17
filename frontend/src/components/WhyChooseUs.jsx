import React, { useState } from 'react';
import { 
  CheckCircle2, 
  XCircle, 
  Database, 
  Route, 
  Eye, 
  TrendingUp, 
  Sparkles, 
  ArrowRight
} from 'lucide-react';

const WhyChooseUs = ({ onOpenDemo }) => {
  const [activeTab, setActiveTab] = useState('placetrack'); // 'placetrack' | 'traditional'

  const valuePoints = [
    {
      id: 1,
      icon: Database,
      title: "Centralized Placement Information",
      description:
        "All verified job descriptions, eligibility criteria, CTC breakdowns, and company policies live in a single unified dashboard, eliminating scattered emails and frantic WhatsApp circulars.",
      badge: "Single Source of Truth",
    },
    {
      id: 2,
      icon: Route,
      title: "Easy Application Tracking",
      description:
        "Live pipeline tracking across every milestone — from initial screening and aptitude tests to technical interviews and HR clearance — with instant timestamped updates.",
      badge: "Real-Time Pipeline",
    },
    {
      id: 3,
      icon: Eye,
      title: "Transparent Recruitment Process",
      description:
        "Standardized criteria and automated audits ensure absolute fairness. Every student knows exactly why they qualify or what prerequisite was missing without manual favoritism.",
      badge: "Zero Bias Verification",
    },
    {
      id: 4,
      icon: TrendingUp,
      title: "Better Student Opportunities",
      description:
        "Smart discovery surfaces niche off-campus drives, pool drives, and high-growth unicorn listings that standard college notice boards often miss.",
      badge: "Higher Package Reach",
    },
  ];

  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 bg-slate-50/70 border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-blue-100/70 text-blue-700">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Modern Advantage</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Why Choose PlaceTrack?
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Engineered to bridge the communication gap between ambitious students, university placement offices, and elite corporate recruiters.
          </p>
        </div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: 4 Value Pillars */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-4">
              {valuePoints.map((point) => {
                const Icon = point.icon;
                return (
                  <div
                    key={point.id}
                    className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-premium hover:shadow-card-hover hover:border-blue-300 transition-all duration-300 group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white flex items-center justify-center shrink-0 transition-colors duration-300 shadow-2xs">
                        <Icon className="w-5 h-5 stroke-[2.2]" />
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                            {point.title}
                          </h3>
                          <span className="text-[10px] font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                            {point.badge}
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          {point.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenDemo}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-500/25 transition-all cursor-pointer"
              >
                <span>Experience the Difference</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Comparison Card & Visual Illustration */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-2xl border border-slate-200/90 shadow-xl overflow-hidden p-6 sm:p-8">
              
              {/* Header with Switcher */}
              <div className="flex items-center justify-between pb-6 border-b border-slate-200">
                <div>
                  <h4 className="text-lg font-bold text-slate-900">Process Comparison</h4>
                  <p className="text-xs text-slate-500">How PlaceTrack transforms campus recruitment</p>
                </div>

                <div className="flex bg-slate-100 p-1 rounded-xl">
                  <button
                    onClick={() => setActiveTab('placetrack')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      activeTab === 'placetrack'
                        ? 'bg-blue-600 text-white shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    With PlaceTrack
                  </button>
                  <button
                    onClick={() => setActiveTab('traditional')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      activeTab === 'traditional'
                        ? 'bg-rose-600 text-white shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Traditional System
                  </button>
                </div>
              </div>

              {/* Side-by-Side or Selected Tab Detail */}
              {activeTab === 'placetrack' ? (
                <div className="py-6 space-y-4">
                  <div className="p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-200/80 flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold text-emerald-900">
                        100% Automated Criteria Audits
                      </div>
                      <div className="text-xs text-emerald-700 mt-0.5">
                        Students instantly know their qualification status with no sudden on-the-spot disqualifications.
                      </div>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-blue-50/70 border border-blue-200/80 flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold text-blue-900">
                        One-Click Application & Instant Confirmation
                      </div>
                      <div className="text-xs text-blue-700 mt-0.5">
                        Prefilled academic details and version-controlled resumes sent straight to recruiter portal.
                      </div>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-sky-50/70 border border-sky-200/80 flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold text-sky-900">
                        Real-Time Interview Calendar & Room Alerts
                      </div>
                      <div className="text-xs text-sky-700 mt-0.5">
                        Slot conflicts are auto-resolved; students get SMS and calendar sync reminders.
                      </div>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-purple-50/70 border border-purple-200/80 flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold text-purple-900">
                        Verifiable Digital Offer Letters & Acceptance
                      </div>
                      <div className="text-xs text-purple-700 mt-0.5">
                        Instant digital offer archive, policy validation, and transparent salary breakdown.
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="py-6 space-y-4">
                  <div className="p-3.5 rounded-xl bg-rose-50/70 border border-rose-200/80 flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold text-rose-900">
                        Fragmented WhatsApp & Email Notice Boards
                      </div>
                      <div className="text-xs text-rose-700 mt-0.5">
                        Important registration deadlines get lost in massive spam messages and chat threads.
                      </div>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-rose-50/70 border border-rose-200/80 flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold text-rose-900">
                        Manual Excel Sheet Data Entry
                      </div>
                      <div className="text-xs text-rose-700 mt-0.5">
                        High risk of typos in CGPA, incorrect contact numbers, and outdated resume file links.
                      </div>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-rose-50/70 border border-rose-200/80 flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold text-rose-900">
                        Zero Visibility Into Interview Stages
                      </div>
                      <div className="text-xs text-rose-700 mt-0.5">
                        Students wait in physical corridors for hours without knowing if they made the next round.
                      </div>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-rose-50/70 border border-rose-200/80 flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold text-rose-900">
                        Manual Offer Verification Bottlenecks
                      </div>
                      <div className="text-xs text-rose-700 mt-0.5">
                        Paper offers, duplicate company selections, and complex university compliance audits.
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Bottom Metric Strip */}
              <div className="pt-4 border-t border-slate-100 grid grid-cols-2 gap-4 text-center">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="text-xl font-black text-blue-600">80%</div>
                  <div className="text-[11px] text-slate-500 font-medium">Reduced TPO Workload</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="text-xl font-black text-emerald-600">3.8x</div>
                  <div className="text-[11px] text-slate-500 font-medium">Faster Shortlist Turnaround</div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
