import React from 'react';
import { 
  Search, 
  FileText, 
  CheckCircle2, 
  BarChart3, 
  Calendar, 
  PieChart, 
  ArrowUpRight,
  Sparkles,
  Check
} from 'lucide-react';
import { featuresData } from '../data/placementData';

const Features = ({ onSelectFeature }) => {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Search':
        return <Search className="w-6 h-6 stroke-[2]" />;
      case 'FileText':
        return <FileText className="w-6 h-6 stroke-[2]" />;
      case 'CheckCircle2':
        return <CheckCircle2 className="w-6 h-6 stroke-[2]" />;
      case 'BarChart3':
        return <BarChart3 className="w-6 h-6 stroke-[2]" />;
      case 'Calendar':
        return <Calendar className="w-6 h-6 stroke-[2]" />;
      case 'PieChart':
        return <PieChart className="w-6 h-6 stroke-[2]" />;
      default:
        return <Sparkles className="w-6 h-6 stroke-[2]" />;
    }
  };

  return (
    <section id="features" className="py-12 sm:py-16 md:py-20 bg-white relative">
      {/* Decorative background circle */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-50/60 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200/80">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Comprehensive Placement Suite</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Engineered for Modern <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-500">
              Campus Recruitment
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Eliminate manual spreadsheets and chaotic broadcast messages. PlaceTrack gives students and placement cells complete transparency at every stage.
          </p>
        </div>

        {/* 6 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresData.map((feature) => (
            <div
              key={feature.id}
              onClick={onSelectFeature}
              className="group relative bg-white rounded-2xl p-7 border border-slate-200/90 shadow-premium hover:shadow-card-hover hover:border-blue-400 transition-all duration-300 flex flex-col justify-between cursor-pointer"
            >
              <div>
                {/* Top Bar with Icon & Tagline */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-13 h-13 rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-xs group-hover:scale-105">
                    {getIcon(feature.iconName)}
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50/80 px-2.5 py-1 rounded-md border border-blue-100">
                    {feature.tagline}
                  </span>
                </div>

                {/* Heading & Description */}
                <div className="space-y-2.5 mb-6">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Feature Highlights Pill List */}
                <div className="space-y-2 mb-6">
                  {feature.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-600">
                      <div className="w-4 h-4 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                      <span className="font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer Action */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-500 group-hover:text-blue-600 transition-colors">
                <span>Explore Feature Details</span>
                <div className="w-7 h-7 rounded-full bg-slate-50 group-hover:bg-blue-50 text-slate-400 group-hover:text-blue-600 flex items-center justify-center transition-colors">
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Feature Bottom Summary Pill */}
        <div className="mt-14 p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-9 h-9 rounded-lg bg-blue-600 text-white flex items-center justify-center shrink-0 font-bold text-sm">
              ✓
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">
                Are you a Training & Placement Officer (TPO)?
              </h4>
              <p className="text-xs text-slate-500">
                Access custom cohort exports, NAAC/NIRF reporting matrices, and automated company approvals.
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className="px-4 py-2 rounded-xl text-xs font-bold text-blue-600 bg-white border border-slate-200 hover:border-blue-300 hover:bg-blue-50/50 shadow-2xs transition-colors shrink-0"
          >
            Request Institutional Demo
          </a>
        </div>

      </div>
    </section>
  );
};

export default Features;
