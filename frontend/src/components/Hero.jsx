import React from 'react';
import { 
  ArrowRight, 
  CheckCircle,
  Compass
} from 'lucide-react';
import DashboardPreview from './DashboardPreview';

const Hero = ({ onOpenOpportunities }) => {
  const scrollToFeatures = (e) => {
    e.preventDefault();
    const target = document.getElementById('features');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-6 sm:pt-8 md:pt-10 pb-8 sm:pb-10 md:pb-12 overflow-hidden bg-white">
      {/* Background Subtle Mesh and Patterns */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      
      {/* Soft gradient background glow circles */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[850px] h-[450px] bg-gradient-to-tr from-blue-100/60 via-sky-100/40 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Hero Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Description & Actions */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
                Your Career Journey Starts With the{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-500">
                  Right Opportunity.
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Discover placement opportunities, track applications, connect with top recruiters, and take control of your professional future with PlaceTrack.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <button
                onClick={onOpenOpportunities}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-base font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-600/30 hover:shadow-xl hover:shadow-blue-600/40 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer active:translate-y-0"
              >
                <Compass className="w-5 h-5" />
                <span>Explore Opportunities</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#features"
                onClick={scrollToFeatures}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-base font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200/90 shadow-2xs hover:shadow-sm hover:border-slate-300 transition-all duration-200 cursor-pointer"
              >
                <span>Learn More</span>
              </a>
            </div>

            {/* Micro Highlights & Trust Indicators */}
            <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-6 text-xs text-slate-500 font-medium">
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>100% Verified Campus Drives</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Automated CGPA & Branch Audits</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Zero Subscription Fees for Students</span>
              </div>
            </div>

            {/* Partnered Universities / Hiring Badges */}
            <div className="pt-2 flex items-center justify-center lg:justify-start gap-4">
              <div className="flex -space-x-2">
                <img
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover"
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80"
                  alt="Student"
                />
                <img
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover"
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80"
                  alt="Student"
                />
                <img
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80"
                  alt="Student"
                />
                <img
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover"
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80"
                  alt="Student"
                />
              </div>
              <div className="text-left">
                <div className="text-xs font-bold text-slate-800">
                  Joined by 5,000+ Students this month
                </div>
                <div className="text-[11px] text-slate-500">
                  From premier universities and engineering colleges
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Dashboard Preview */}
          <div className="lg:col-span-6">
            <DashboardPreview />
          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;
