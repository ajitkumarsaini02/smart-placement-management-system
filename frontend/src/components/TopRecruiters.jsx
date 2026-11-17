import React, { useState } from 'react';
import { Building2, Award, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { recruitersData } from '../data/placementData';

const TopRecruiters = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Super Dream', 'Core IT', 'Consulting & Tech', 'Fintech Dream'];

  const filteredRecruiters =
    selectedCategory === 'All'
      ? recruitersData
      : recruitersData.filter((r) => r.category.toLowerCase().includes(selectedCategory.toLowerCase()));

  return (
    <section id="recruiters" className="py-12 sm:py-16 md:py-20 bg-white border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200">
            <Building2 className="w-3.5 h-3.5" />
            <span>Top Tier Hiring Partners</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Connecting You with Industry Leaders
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            From world-renowned technology titans to leading global consultancies, PlaceTrack hosts campus drives for the most respected employers.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                  : 'bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-slate-200/80'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Recruiters Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredRecruiters.map((recruiter) => (
            <div
              key={recruiter.name}
              className="group bg-white rounded-2xl p-6 border border-slate-200/90 shadow-premium hover:shadow-card-hover hover:border-blue-400 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Brand Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-extrabold text-base shadow-sm"
                      style={{ backgroundColor: recruiter.color }}
                    >
                      {recruiter.name.substring(0, 2).toUpperCase()}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {recruiter.name}
                      </h4>
                      <span className="text-[11px] font-semibold text-slate-400">
                        {recruiter.category}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Recruiter Details */}
                <div className="space-y-2.5 my-4">
                  <div className="text-xs text-slate-600">
                    <span className="font-semibold text-slate-700">Hiring Roles:</span>{' '}
                    <span>{recruiter.roles}</span>
                  </div>

                  <div className="flex items-center justify-between text-xs pt-1">
                    <span className="text-slate-500">Avg Package:</span>
                    <span className="font-bold text-slate-900 bg-slate-50 px-2 py-0.5 rounded border border-slate-200/60">
                      {recruiter.avgPackage}
                    </span>
                  </div>
                </div>
              </div>

              {/* Footer Pill */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="inline-flex items-center gap-1 text-emerald-700 font-semibold text-[11px] bg-emerald-50 px-2 py-0.5 rounded">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                  {recruiter.hires}
                </span>
                <span className="text-blue-600 font-semibold group-hover:underline flex items-center gap-0.5">
                  View Drives
                  <ArrowUpRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Recruiter Trust Strip */}
        <div className="mt-14 py-6 px-8 rounded-2xl bg-gradient-to-r from-blue-50/80 via-slate-50 to-sky-50/80 border border-slate-200/80 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">
                Are you a corporate recruiter looking to hire top talent?
              </h4>
              <p className="text-xs text-slate-600 mt-0.5">
                Post job mandates, conduct pre-placement talks, and shortlist candidates with 0 administrative lag.
              </p>
            </div>
          </div>

          <a
            href="#contact"
            className="px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-600/20 transition-all shrink-0 cursor-pointer"
          >
            Register as Recruiter
          </a>
        </div>

      </div>
    </section>
  );
};

export default TopRecruiters;
