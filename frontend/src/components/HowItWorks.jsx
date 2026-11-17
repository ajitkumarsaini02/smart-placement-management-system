import React, { useState } from 'react';
import { 
  UserCheck, 
  Compass, 
  Send, 
  Trophy, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  FileCheck,
  Check
} from 'lucide-react';
import { howItWorksSteps } from '../data/placementData';

const HowItWorks = ({ onOpenDemo }) => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const stepIcons = [UserCheck, Compass, Send, Trophy];

  return (
    <section id="how-it-works" className="py-12 sm:py-16 md:py-20 bg-slate-50/70 border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-blue-100/70 text-blue-700">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Smooth 4-Step Process</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            How PlaceTrack Works for You
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            From initial student registration to receiving your final corporate offer letter, our streamlined workflow ensures zero friction.
          </p>
        </div>

        {/* 4 Connected Step Cards (Desktop connected line, mobile stack) */}
        <div className="relative mb-10">
          {/* Subtle horizontal connecting line on desktop */}
          <div className="hidden lg:block absolute top-1/2 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-blue-300 via-sky-300 to-emerald-300 -translate-y-12 z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {howItWorksSteps.map((step, idx) => {
              const Icon = stepIcons[idx] || Sparkles;
              const isSelected = activeStepIndex === idx;

              return (
                <div
                  key={step.step}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`bg-white rounded-2xl p-6 border transition-all duration-300 cursor-pointer flex flex-col justify-between relative group ${
                    isSelected
                      ? 'border-blue-600 shadow-card-hover ring-2 ring-blue-600/20 -translate-y-1'
                      : 'border-slate-200/90 shadow-premium hover:border-blue-300 hover:shadow-md'
                  }`}
                >
                  <div>
                    {/* Top Step Number Badge & Icon */}
                    <div className="flex items-center justify-between mb-5">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors shadow-xs ${
                          isSelected
                            ? 'bg-blue-600 text-white'
                            : 'bg-blue-50 text-blue-600 group-hover:bg-blue-100'
                        }`}
                      >
                        <Icon className="w-6 h-6 stroke-[2]" />
                      </div>
                      <span className="text-2xl font-black text-slate-300 group-hover:text-blue-500 transition-colors font-mono">
                        {step.step}
                      </span>
                    </div>

                    <div className="space-y-2 mb-4">
                      <div className="inline-block text-[11px] font-bold text-blue-600 uppercase tracking-wider">
                        {step.pill}
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-slate-400 font-medium">{step.subtitle}</span>
                    <span
                      className={`font-semibold flex items-center gap-1 ${
                        isSelected ? 'text-blue-600' : 'text-slate-500'
                      }`}
                    >
                      {isSelected ? 'Active View' : 'Preview'}
                      <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Dynamic Step Detail Visual Showcase */}
        <div className="bg-white rounded-2xl border border-slate-200/90 shadow-xl overflow-hidden p-6 sm:p-8 lg:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Info Panel */}
            <div className="lg:col-span-5 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200">
                <span>Step {howItWorksSteps[activeStepIndex].step} Deep Dive</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                {howItWorksSteps[activeStepIndex].title}
              </h3>

              <p className="text-slate-600 text-sm leading-relaxed">
                {howItWorksSteps[activeStepIndex].description}
              </p>

              <div className="space-y-3 pt-2">
                {howItWorksSteps[activeStepIndex].features.map((feat, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-slate-700">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span className="font-medium">{feat}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <button
                  onClick={onOpenDemo}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-500/20 transition-all cursor-pointer"
                >
                  <span>Experience This Step</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Mock Illustration for current step */}
            <div className="lg:col-span-7 bg-slate-50 rounded-xl p-5 sm:p-6 border border-slate-200/80">
              
              {/* Step 1 Visual Mock */}
              {activeStepIndex === 0 && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-xs">
                        PT
                      </div>
                      <span className="text-xs font-bold text-slate-800">Student Profile Synchronization</span>
                    </div>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                      Verified 100%
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="p-3 bg-white rounded-lg border border-slate-200">
                      <div className="text-slate-400 text-[11px]">Academic Standing</div>
                      <div className="font-bold text-slate-900 text-sm mt-0.5">8.92 Cumulative GPA</div>
                      <div className="text-emerald-600 text-[10px] font-semibold mt-1">Verified with College Registrar</div>
                    </div>
                    <div className="p-3 bg-white rounded-lg border border-slate-200">
                      <div className="text-slate-400 text-[11px]">Backlog Audit</div>
                      <div className="font-bold text-emerald-600 text-sm mt-0.5">0 Active / 0 Historical</div>
                      <div className="text-slate-500 text-[10px] mt-1">Eligible for all Tier-1 drives</div>
                    </div>
                  </div>
                  <div className="p-3 bg-white rounded-lg border border-slate-200 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <FileCheck className="w-4 h-4 text-blue-600" />
                      <span className="font-medium text-slate-800">Master_Resume_ATS_v3.pdf</span>
                    </div>
                    <span className="text-slate-400 text-[11px]">Uploaded 2h ago</span>
                  </div>
                </div>
              )}

              {/* Step 2 Visual Mock */}
              {activeStepIndex === 1 && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                    <span className="text-xs font-bold text-slate-800">Smart Drive Filtering Feed</span>
                    <span className="text-xs text-blue-600 font-semibold">12 Eligible Opportunities</span>
                  </div>
                  <div className="p-3 bg-white rounded-lg border border-blue-200 flex items-center justify-between text-xs">
                    <div>
                      <div className="font-bold text-slate-900">Microsoft Cloud Solutions Architect</div>
                      <div className="text-slate-500 text-[11px]">On-Campus Drive • Hyderabad • 38.0 LPA</div>
                    </div>
                    <span className="px-2 py-1 rounded bg-emerald-50 text-emerald-700 font-bold text-[11px] border border-emerald-200">
                      100% Match
                    </span>
                  </div>
                  <div className="p-3 bg-white rounded-lg border border-slate-200 flex items-center justify-between text-xs">
                    <div>
                      <div className="font-bold text-slate-900">Goldman Sachs Analyst - Quant & Tech</div>
                      <div className="text-slate-500 text-[11px]">Pooled Campus • Bangalore • 36.5 LPA</div>
                    </div>
                    <span className="px-2 py-1 rounded bg-blue-50 text-blue-700 font-bold text-[11px] border border-blue-200">
                      Eligible
                    </span>
                  </div>
                </div>
              )}

              {/* Step 3 Visual Mock */}
              {activeStepIndex === 2 && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                    <span className="text-xs font-bold text-slate-800">Single-Click Application Modal</span>
                    <span className="text-xs font-bold text-emerald-600">Passed Pre-checks</span>
                  </div>
                  <div className="p-4 bg-white rounded-lg border border-slate-200 space-y-3">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-500">Applying to:</span>
                      <span className="font-bold text-slate-900">Amazon SDE Internship (2026 Batch)</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-500">Resume Attached:</span>
                      <span className="font-semibold text-blue-600">Software_Engineering_Resume.pdf</span>
                    </div>
                    <div className="p-2.5 bg-blue-50/70 rounded-md text-[11px] text-blue-800 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                      <span>Your CGPA (8.92) satisfies the minimum threshold (7.00).</span>
                    </div>
                    <button className="w-full py-2 bg-blue-600 text-white rounded-lg font-bold text-xs shadow-xs cursor-pointer">
                      Confirm & Submit Application
                    </button>
                  </div>
                </div>
              )}

              {/* Step 4 Visual Mock */}
              {activeStepIndex === 3 && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                    <span className="text-xs font-bold text-slate-800">Offer Rollout & Verification</span>
                    <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      Offer Accepted
                    </span>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-emerald-500 to-teal-600 text-white rounded-xl shadow-md space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="text-xs font-medium uppercase tracking-wider text-emerald-100">
                        Official Placement Letter
                      </div>
                      <Trophy className="w-5 h-5 text-amber-300" />
                    </div>
                    <div className="text-lg font-bold">Congratulations Aarav Sharma!</div>
                    <p className="text-xs text-emerald-100">
                      You have received an offer for Software Development Engineer (SDE-1) at Google India.
                    </p>
                    <div className="pt-2 flex items-center justify-between text-xs border-t border-emerald-400/40">
                      <span>Package: 42.5 LPA (Fixed + Bonus + Stocks)</span>
                      <span className="font-bold underline cursor-pointer">Download Offer PDF</span>
                    </div>
                  </div>
                </div>
              )}

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;
