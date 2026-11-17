import React from 'react';
import { Users, Building2, Award, TrendingUp, Info } from 'lucide-react';
import { statsData } from '../data/placementData';

const Statistics = () => {
  const iconMap = {
    1: Users,
    2: Building2,
    3: Award,
    4: TrendingUp,
  };

  return (
    <section className="py-14 sm:py-20 bg-slate-50/80 border-y border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading & Label */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-100/70 text-blue-700 mb-2">
              <TrendingUp className="w-3.5 h-3.5" />
              Impact & Placement Track Record
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Driving Measurable Career Milestones
            </h2>
          </div>

          <div className="flex items-center gap-1.5 text-xs text-slate-500 bg-white px-3 py-1.5 rounded-lg border border-slate-200 shrink-0 shadow-2xs">
            <Info className="w-3.5 h-3.5 text-blue-500" />
            <span>Illustrative & Demo Platform Statistics</span>
          </div>
        </div>

        {/* 4 Statistics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {statsData.map((stat) => {
            const Icon = iconMap[stat.id] || Users;
            return (
              <div
                key={stat.id}
                className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-premium hover:shadow-card-hover hover:border-blue-300 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 group-hover:bg-blue-600 text-blue-600 group-hover:text-white flex items-center justify-center transition-colors duration-300 shadow-2xs">
                      <Icon className="w-6 h-6 stroke-[2]" />
                    </div>
                    <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 group-hover:bg-blue-50 group-hover:text-blue-700 transition-colors">
                      {stat.badge}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <div className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors">
                      {stat.value}
                    </div>
                    <div className="text-base font-bold text-slate-800">
                      {stat.label}
                    </div>
                    <p className="text-xs text-slate-500 leading-relaxed pt-1">
                      {stat.subtext}
                    </p>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-medium">Metric Scope</span>
                  <span className="font-semibold text-blue-600">{stat.highlight}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Statistics;
