import React, { useState } from 'react';
import { 
  X, 
  Search, 
  Briefcase, 
  MapPin, 
  Clock, 
  Check
} from 'lucide-react';

const mockOpportunities = [
  {
    id: 1,
    company: "Google",
    role: "Software Development Engineer - I",
    type: "Full-Time (Super Dream)",
    location: "Bangalore / Hybrid",
    package: "42.5 LPA",
    eligibility: "CGPA ≥ 8.0 • CSE / IT / ECE",
    deadline: "2 days remaining",
    color: "#EA4335",
    tags: ["Distributed Systems", "C++", "Algorithms"],
  },
  {
    id: 2,
    company: "Microsoft",
    role: "Cloud Solutions Architect (Azure)",
    type: "Full-Time (Super Dream)",
    location: "Hyderabad",
    package: "38.0 LPA",
    eligibility: "CGPA ≥ 7.5 • All Engineering",
    deadline: "4 days remaining",
    color: "#00A4EF",
    tags: ["Cloud", "Kubernetes", "Python"],
  },
  {
    id: 3,
    company: "Amazon",
    role: "Software Development Intern (6 Months)",
    type: "Internship + PPO",
    location: "Bangalore",
    package: "₹1,10,000 / mo",
    eligibility: "CGPA ≥ 7.0 • 2026 Batch",
    deadline: "Tomorrow 5:00 PM",
    color: "#FF9900",
    tags: ["Java", "AWS", "Data Structures"],
  },
  {
    id: 4,
    company: "Goldman Sachs",
    role: "Analyst - Engineering & Quant",
    type: "Full-Time (Dream)",
    location: "Bangalore",
    package: "36.5 LPA",
    eligibility: "CGPA ≥ 7.5 • CSE / IT / Math",
    deadline: "5 days remaining",
    color: "#2563EB",
    tags: ["Fintech", "Microservices", "Python"],
  },
  {
    id: 5,
    company: "Adobe",
    role: "Member of Technical Staff",
    type: "Full-Time (Super Dream)",
    location: "Noida",
    package: "41.0 LPA",
    eligibility: "CGPA ≥ 8.2 • CSE / IT",
    deadline: "3 days remaining",
    color: "#ED2224",
    tags: ["C++", "Computer Graphics", "AI"],
  },
  {
    id: 6,
    company: "TCS",
    role: "TCS Digital - System Engineer",
    type: "Full-Time (Core IT)",
    location: "Pan India",
    package: "8.5 LPA",
    eligibility: "CGPA ≥ 6.5 • All Branches",
    deadline: "7 days remaining",
    color: "#1E3A8A",
    tags: ["Full Stack", "SQL", "Java"],
  },
];

const OpportunityModal = ({ isOpen, onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('All');
  const [appliedIds, setAppliedIds] = useState([]);

  if (!isOpen) return null;

  const filteredJobs = mockOpportunities.filter((job) => {
    const matchesSearch =
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.tags.some((t) => t.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesTag =
      selectedTag === 'All' ||
      (selectedTag === 'Super Dream' && job.type.includes('Super Dream')) ||
      (selectedTag === 'Internship' && job.type.includes('Internship')) ||
      (selectedTag === 'Core IT' && job.type.includes('Core IT'));

    return matchesSearch && matchesTag;
  });

  const handleApply = (id) => {
    if (!appliedIds.includes(id)) {
      setAppliedIds([...appliedIds, id]);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div 
        className="relative bg-white rounded-3xl max-w-4xl w-full shadow-2xl border border-slate-200 overflow-hidden animate-fadeIn"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-xs">
              <Briefcase className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">
                Explore Active Placement Opportunities
              </h3>
              <p className="text-xs text-slate-500">
                Browse verified campus drives, internship listings, and high-package openings
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-200/70 hover:bg-slate-300 text-slate-600 flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Filter & Search Bar */}
        <div className="p-6 border-b border-slate-100 bg-white space-y-4">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by company, role (e.g., Google, SDE, Cloud)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-800 placeholder-slate-400 focus:outline-blue-600"
              />
            </div>

            <div className="flex gap-2">
              {['All', 'Super Dream', 'Internship', 'Core IT'].map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`px-3 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    selectedTag === tag
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Opportunities List Container */}
        <div className="p-6 max-h-[60vh] overflow-y-auto space-y-4">
          {filteredJobs.length === 0 ? (
            <div className="text-center py-12 text-slate-400 text-sm">
              No placement opportunities match your search.
            </div>
          ) : (
            filteredJobs.map((job) => {
              const isApplied = appliedIds.includes(job.id);
              return (
                <div
                  key={job.id}
                  className="p-5 rounded-2xl border border-slate-200 hover:border-blue-400 transition-all bg-white hover:bg-blue-50/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-black text-sm shrink-0 shadow-xs"
                      style={{ backgroundColor: job.color }}
                    >
                      {job.company.substring(0, 2).toUpperCase()}
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h4 className="text-base font-bold text-slate-900">{job.company}</h4>
                        <span className="text-xs text-slate-400">•</span>
                        <span className="text-xs font-semibold text-slate-700">{job.role}</span>
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-50 text-blue-700 border border-blue-200">
                          {job.type}
                        </span>
                      </div>

                      <div className="flex flex-wrap items-center gap-y-1 gap-x-3 text-xs text-slate-500">
                        <span className="font-bold text-slate-900">{job.package}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {job.location}
                        </span>
                        <span>•</span>
                        <span className="text-emerald-700 font-medium">{job.eligibility}</span>
                      </div>

                      <div className="flex items-center gap-1.5 pt-1.5">
                        {job.tags.map((t) => (
                          <span
                            key={t}
                            className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 text-[10px] font-medium"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center gap-2 shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-100">
                    <span className="inline-flex items-center gap-1 text-[11px] text-amber-700 bg-amber-50 px-2 py-1 rounded-md border border-amber-200">
                      <Clock className="w-3 h-3" />
                      {job.deadline}
                    </span>

                    {isApplied ? (
                      <span className="inline-flex items-center gap-1 px-4 py-2 rounded-xl text-xs font-bold bg-emerald-100 text-emerald-800">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                        Application Submitted
                      </span>
                    ) : (
                      <button
                        onClick={() => handleApply(job.id)}
                        className="px-5 py-2 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-xs transition-colors cursor-pointer"
                      >
                        1-Click Apply
                      </button>
                    )}
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
          <span>Interactive Preview • 1-Click apply triggers demo confirmation</span>
          <button
            onClick={onClose}
            className="font-bold text-blue-600 hover:underline cursor-pointer"
          >
            Close Window
          </button>
        </div>

      </div>
    </div>
  );
};

export default OpportunityModal;
