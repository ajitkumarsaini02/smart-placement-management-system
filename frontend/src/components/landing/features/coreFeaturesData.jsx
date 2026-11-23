import React from 'react';
import {
  Building2, Briefcase, Layers, UserCheck, ShieldCheck, Mail,
  GraduationCap, BarChart3, MessageSquare, Share2, FileText, FileSpreadsheet
} from 'lucide-react';

export const coreModulesData = [
  { num: '01', icon: <Building2 size={22} className="mod-icon" />, tag: 'Recruiter CRM', title: 'Recruiter Management', desc: 'Maintain a full recruiter database with profiles, past hiring history, approval status, and relationship tracking.' },
  { num: '02', icon: <Briefcase size={22} className="mod-icon" />, tag: 'Campus Drives', title: 'Job & Drive Management', desc: 'Create, publish, and manage campus drives and job postings with eligibility filters, packages, and drive status.' },
  { num: '03', icon: <Layers size={22} className="mod-icon" />, tag: 'Live Tracking', title: 'Application Tracking', desc: 'Track every student application round-by-round with live status — Applied, Under Review, Shortlisted, Selected, Rejected.' },
  { num: '04', icon: <UserCheck size={22} className="mod-icon" />, tag: 'Interviews', title: 'Interview Round Tracking', desc: 'Define multiple interview rounds (Aptitude, GD, Technical, HR) and track candidate progression through each stage.' },
  { num: '05', icon: <ShieldCheck size={22} className="mod-icon" />, tag: 'Verification', title: 'Student Eligibility Verification', desc: 'Automated verification against minimum CGPA, eligible branches, backlog counts, and academic history.' },
  { num: '06', icon: <Mail size={22} className="mod-icon" />, tag: 'Alerts', title: 'Communication Center', desc: 'Database-backed notifications, email alerts for new drives, deadline warnings, and round-qualification updates.' },
  { num: '07', icon: <GraduationCap size={22} className="mod-icon" />, tag: 'Internships', title: 'Internship Management', desc: 'Manage summer and final-semester internships, track monthly stipends, and record pre-placement offer (PPO) conversions.' },
  { num: '08', icon: <BarChart3 size={22} className="mod-icon" />, tag: 'Analytics', title: 'Placement Analytics', desc: 'Real-time placement percentage, salary trends (highest, median, average CTC), and recruiter participation charts.' },
  { num: '09', icon: <MessageSquare size={22} className="mod-icon" />, tag: 'Feedback', title: 'Feedback Management', desc: 'Collect structured student reviews on recruitment experience, test fairness, and company conduct after every drive.' },
  { num: '10', icon: <Share2 size={22} className="mod-icon" />, tag: 'Onboarding', title: 'Recruiter Invitations', desc: 'Generate institution-specific recruiter registration links. Recruiters self-register in minutes — zero manual data entry.' },
  { num: '11', icon: <FileText size={22} className="mod-icon" />, tag: 'Portfolios', title: 'Student Profiles & Resumes', desc: 'Verified student academic credentials, technical skills, project links, and direct PDF resume viewing for recruiters.' },
  { num: '12', icon: <FileSpreadsheet size={22} className="mod-icon" />, tag: 'Compliance', title: 'Report Generation', desc: 'Export comprehensive reports in Excel and PDF formats for NAAC, NBA, NIRF, and Governing Council documentation.' },
];
export default coreModulesData;
