import React from 'react';
import { Star, Quote, CheckCircle2, Sparkles } from 'lucide-react';
import { testimonialsData } from '../data/placementData';

const Testimonials = () => {
  return (
    <section className="py-20 sm:py-28 bg-white border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Success Stories</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Hear from Placed Students
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Real experiences from students who navigated their recruitment drives and landed dream offers with PlaceTrack.
          </p>
        </div>

        {/* 3 Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-7 border border-slate-200/90 shadow-premium hover:shadow-card-hover hover:border-blue-300 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Top Row: Stars & Placement Tag */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(item.stars)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200/60">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    Placed at {item.placedAt}
                  </span>
                </div>

                {/* Quote Text */}
                <div className="relative mb-6">
                  <Quote className="w-8 h-8 text-blue-100 absolute -top-3 -left-2 -z-0 opacity-80" />
                  <p className="text-sm text-slate-600 relative z-10 leading-relaxed italic">
                    "{item.quote}"
                  </p>
                </div>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-11 h-11 rounded-full object-cover ring-2 ring-blue-100"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {item.name}
                    </h4>
                    <p className="text-xs text-slate-500">{item.role}</p>
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-[10px] uppercase font-bold text-slate-400">Package</div>
                  <div className="text-xs font-extrabold text-blue-600">{item.package}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 text-center text-xs text-slate-400">
          Showing 3 of 1,200+ verified campus placement stories from the 2024-2026 batches.
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
