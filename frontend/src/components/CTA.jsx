import React from 'react';
import { ArrowRight, Sparkles, GraduationCap, ShieldCheck, CheckCircle2 } from 'lucide-react';

const CTA = ({ onOpenDemo }) => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white relative overflow-hidden">
      {/* Background Decorative Gradient & Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-blue-100/70 via-sky-100/60 to-blue-50/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-gradient-to-b from-blue-50/90 via-sky-50/50 to-white rounded-3xl p-8 sm:p-12 lg:p-16 border border-blue-200/80 shadow-2xl shadow-blue-900/5 text-center relative overflow-hidden">
          
          {/* Subtle watermark logo in background */}
          <div className="absolute -right-10 -bottom-10 opacity-5 pointer-events-none">
            <GraduationCap className="w-80 h-80 text-blue-900" />
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold bg-blue-600 text-white shadow-xs shadow-blue-500/20 mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Campus Placement Season 2026</span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight max-w-2xl mx-auto mb-5">
            Your Dream Career Is Just One{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-500">
              Opportunity Away.
            </span>
          </h2>

          {/* Description */}
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed mb-8">
            Stay prepared, discover opportunities, and make your next career move with confidence.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenDemo}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-xl shadow-blue-600/30 hover:shadow-2xl hover:shadow-blue-600/40 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer active:translate-y-0"
            >
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-base font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 shadow-xs hover:border-slate-300 transition-all duration-200"
            >
              <span>Contact TPO Cell</span>
            </a>
          </div>

          {/* Trust Guarantees */}
          <div className="mt-10 pt-8 border-t border-slate-200/70 flex flex-wrap items-center justify-center gap-y-3 gap-x-8 text-xs text-slate-500 font-medium">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Instant Student Account Creation</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-blue-600" />
              <span>Verified University Placement Cell Sync</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>No Hidden Charges for Students</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CTA;
