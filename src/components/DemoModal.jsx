import React, { useState } from 'react';
import { 
  X, 
  GraduationCap, 
  CheckCircle2, 
  Sparkles, 
  Building2, 
  User, 
  Briefcase,
  ShieldCheck
} from 'lucide-react';

const DemoModal = ({ isOpen, onClose }) => {
  const [role, setRole] = useState('student'); // 'student' | 'tpo' | 'recruiter'
  
  // Interactive Eligibility Calculator state
  const [cgpa, setCgpa] = useState('8.4');
  const [branch, setBranch] = useState('CSE');
  const [backlogs, setBacklogs] = useState('0');
  const [calcResult, setCalcResult] = useState(null);

  if (!isOpen) return null;

  const handleSimulateCheck = (e) => {
    e.preventDefault();
    const numCgpa = parseFloat(cgpa);
    const numBacklogs = parseInt(backlogs, 10);

    if (numBacklogs > 0) {
      setCalcResult({
        status: 'warning',
        tier: 'Limited Eligibility',
        message: 'Active backlogs restrict Tier-1 Super Dream companies. Eligible for select Core IT pooled drives.',
        companies: ['TCS Digital (cleared condition)', 'Specialist Developer Pools'],
      });
    } else if (numCgpa >= 8.5) {
      setCalcResult({
        status: 'success',
        tier: 'Super Dream (Tier-1) Elite',
        message: 'Congratulations! You qualify for all high-package drives (Google, Microsoft, Amazon, Goldman Sachs, Adobe).',
        companies: ['Google (42.5 LPA)', 'Microsoft (44.5 LPA)', 'Amazon (36 LPA)', 'Goldman Sachs (38 LPA)'],
      });
    } else if (numCgpa >= 7.5) {
      setCalcResult({
        status: 'success',
        tier: 'Dream Tier-1',
        message: 'You are eligible for top product and engineering roles across 80% of partner companies.',
        companies: ['Microsoft Cloud', 'Amazon Intern', 'Accenture Advance', 'Infosys Specialist'],
      });
    } else {
      setCalcResult({
        status: 'info',
        tier: 'Core & IT Services Tier',
        message: 'Eligible for high-volume recruitment drives with competitive compensation.',
        companies: ['Infosys Digital', 'TCS Ninja & Digital', 'Cognizant GenC Next'],
      });
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div 
        className="relative bg-white rounded-3xl max-w-2xl w-full shadow-2xl border border-slate-200 overflow-hidden animate-fadeIn"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header */}
        <div className="p-6 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-xs">
              <GraduationCap className="w-6 h-6 stroke-[2]" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">
                Experience PlaceTrack Interactive Demo
              </h3>
              <p className="text-xs text-slate-500">
                Simulate student eligibility, application tracking, and TPO workflows
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

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Persona Selector Tabs */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
              Select User Role Persona
            </label>
            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => setRole('student')}
                className={`p-3 rounded-xl border text-xs font-bold flex flex-col items-center gap-1.5 transition-all cursor-pointer ${
                  role === 'student'
                    ? 'bg-blue-50 border-blue-600 text-blue-700 shadow-xs'
                    : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                }`}
              >
                <User className="w-4 h-4" />
                <span>Student View</span>
              </button>

              <button
                type="button"
                onClick={() => setRole('tpo')}
                className={`p-3 rounded-xl border text-xs font-bold flex flex-col items-center gap-1.5 transition-all cursor-pointer ${
                  role === 'tpo'
                    ? 'bg-blue-50 border-blue-600 text-blue-700 shadow-xs'
                    : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                }`}
              >
                <Building2 className="w-4 h-4" />
                <span>TPO Officer</span>
              </button>

              <button
                type="button"
                onClick={() => setRole('recruiter')}
                className={`p-3 rounded-xl border text-xs font-bold flex flex-col items-center gap-1.5 transition-all cursor-pointer ${
                  role === 'recruiter'
                    ? 'bg-blue-50 border-blue-600 text-blue-700 shadow-xs'
                    : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                }`}
              >
                <Briefcase className="w-4 h-4" />
                <span>Recruiter View</span>
              </button>
            </div>
          </div>

          {/* Interactive Feature: Student Eligibility Simulator */}
          {role === 'student' && (
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-blue-600" />
                  <span className="text-sm font-bold text-slate-900">
                    Live Eligibility Checker Simulator
                  </span>
                </div>
                <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  Interactive Test
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-medium text-slate-600 mb-1">
                    Current CGPA
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    min="5"
                    max="10"
                    value={cgpa}
                    onChange={(e) => setCgpa(e.target.value)}
                    className="w-full px-3 py-2 bg-white rounded-lg border border-slate-200 text-sm font-bold text-slate-900 focus:outline-blue-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-600 mb-1">
                    Branch / Dept
                  </label>
                  <select
                    value={branch}
                    onChange={(e) => setBranch(e.target.value)}
                    className="w-full px-3 py-2 bg-white rounded-lg border border-slate-200 text-sm font-bold text-slate-900 focus:outline-blue-600"
                  >
                    <option value="CSE">Computer Science (CSE)</option>
                    <option value="IT">Information Tech (IT)</option>
                    <option value="ECE">Electronics (ECE)</option>
                    <option value="MECH">Mechanical (ME)</option>
                    <option value="CIVIL">Civil (CE)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-600 mb-1">
                    Active Backlogs
                  </label>
                  <select
                    value={backlogs}
                    onChange={(e) => setBacklogs(e.target.value)}
                    className="w-full px-3 py-2 bg-white rounded-lg border border-slate-200 text-sm font-bold text-slate-900 focus:outline-blue-600"
                  >
                    <option value="0">0 (Zero Backlogs)</option>
                    <option value="1">1 Active Backlog</option>
                    <option value="2">2+ Active Backlogs</option>
                  </select>
                </div>
              </div>

              <button
                onClick={handleSimulateCheck}
                className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl shadow-xs transition-colors cursor-pointer"
              >
                Compute Real-Time Drive Eligibility
              </button>

              {calcResult && (
                <div className={`p-4 rounded-xl border text-xs space-y-2 ${
                  calcResult.status === 'success'
                    ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
                    : calcResult.status === 'warning'
                    ? 'bg-amber-50 border-amber-200 text-amber-900'
                    : 'bg-blue-50 border-blue-200 text-blue-900'
                }`}>
                  <div className="flex items-center justify-between font-bold text-sm">
                    <span>{calcResult.tier}</span>
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <p>{calcResult.message}</p>
                  <div className="pt-2 border-t border-black/10">
                    <span className="font-bold">Instant Matches: </span>
                    <span>{calcResult.companies.join(' • ')}</span>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TPO Officer Persona Details */}
          {role === 'tpo' && (
            <div className="p-5 rounded-2xl bg-blue-50/60 border border-blue-200 space-y-3 text-xs text-slate-700">
              <h4 className="font-bold text-sm text-blue-900 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-blue-600" />
                Training & Placement Officer Suite
              </h4>
              <p>
                PlaceTrack gives college placement directors one-click company approvals, automated branch eligibility filtering, NAAC accreditation reports, and synchronized interview room management.
              </p>
              <ul className="space-y-1.5 list-disc pl-4 text-slate-600">
                <li>Bulk import student marks directly from College ERP.</li>
                <li>Broadcast emergency drive alerts via WhatsApp & Email API.</li>
                <li>Monitor live company interview rounds and attendance.</li>
              </ul>
            </div>
          )}

          {/* Recruiter Persona Details */}
          {role === 'recruiter' && (
            <div className="p-5 rounded-2xl bg-purple-50/60 border border-purple-200 space-y-3 text-xs text-slate-700">
              <h4 className="font-bold text-sm text-purple-900 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-purple-600" />
                Corporate Recruiter Gateway
              </h4>
              <p>
                Recruiters can publish campus drive criteria, download verified student portfolios, schedule technical interviews without calendar conflicts, and roll out digital offer letters.
              </p>
              <ul className="space-y-1.5 list-disc pl-4 text-slate-600">
                <li>Automated shortlisting based on exact JD prerequisites.</li>
                <li>Direct slot booking integration with interviewer calendars.</li>
                <li>Offer acceptance tracking with electronic signature seals.</li>
              </ul>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="p-6 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
          <span className="text-xs text-slate-500">
            Frontend Prototype • College Project Showcase
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 transition-colors cursor-pointer"
          >
            Close & Back to Landing Page
          </button>
        </div>

      </div>
    </div>
  );
};

export default DemoModal;
