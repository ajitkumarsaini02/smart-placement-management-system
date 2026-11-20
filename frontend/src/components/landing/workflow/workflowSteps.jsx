import React from 'react';
import { Building2, Briefcase, Users, Layers, UserCheck, FileCheck, BarChart3 } from 'lucide-react';

export const workflowSteps = [
  {
    stepNumber: '01',
    title: 'Recruiter Management',
    icon: <Building2 size={20} />,
    headline: 'Build a Centralised Recruiter Database',
    desc: 'Maintain structured recruiter profiles, contact persons, past hiring records, and institutional approval workflows in one secure directory.',
    bullets: ['Complete company database with sector and size categorization', 'Direct recruiter self-service portal and registration links', 'Historical hiring packages and past visit analytics'],
  },
  {
    stepNumber: '02',
    title: 'Job & Drive Posting',
    icon: <Briefcase size={20} />,
    headline: 'Publish Campus Drives with Dynamic Filters',
    desc: 'Define campus placement drives with precise academic criteria, salary CTC packages, job locations, and application deadlines.',
    bullets: ['Automatic CGPA, branch, and backlog eligibility filters', 'Full compensation breakdown (CTC, stipend, base, bonds)', 'Designate placement officers and schedule drive milestones'],
  },
  {
    stepNumber: '03',
    title: 'Student Applications',
    icon: <Users size={20} />,
    headline: 'Verified 1-Click Student Applications',
    desc: 'Eligible students discover campus openings and submit applications instantly with institutional verified academic records and resumes.',
    bullets: ['Strict eligibility engine blocks non-eligible submissions', 'Automatic resume attachment and skill tags', 'Real-time student application tracking status'],
  },
  {
    stepNumber: '04',
    title: 'Round Tracking',
    icon: <Layers size={20} />,
    headline: 'Multi-Round Interview Progression',
    desc: 'Seamlessly transition candidates through custom recruitment stages (Aptitude test, Group Discussion, Technical interview, HR round).',
    bullets: ['Live round progression with qualified vs rejected counts', 'Rejection reason notes logged for student counseling', 'Visual recruitment funnel for TPO and recruiters'],
  },
  {
    stepNumber: '05',
    title: 'Selection Process',
    icon: <UserCheck size={20} />,
    headline: 'Transparent Shortlists & Candidate Review',
    desc: 'Recruiters review candidate profiles, view uploaded resumes, record interview evaluation notes, and mark final selects.',
    bullets: ['Instant candidate resume viewing without downloads', 'Recruiter feedback capture per student', '1-click shortlist notifications to selected students'],
  },
  {
    stepNumber: '06',
    title: 'Offer Management',
    icon: <FileCheck size={20} />,
    headline: 'Offer Acceptance & Joining Confirmation',
    desc: 'Issue official offer confirmations, manage one-student-one-job placement policies, and track student offer acceptance.',
    bullets: ['Offer letter upload and compensation verification', 'Enforce institutional dream / super dream policy', 'Real-time acceptance status and joining confirmation'],
  },
  {
    stepNumber: '07',
    title: 'Placement Reports',
    icon: <BarChart3 size={20} />,
    headline: 'NAAC & NBA Accreditation Reports',
    desc: 'Generate comprehensive placement statistics, department-wise placement percentages, salary distribution charts, and company-wise tables.',
    bullets: ['1-click export to PDF and Excel for accreditation review', 'NIRF ranking criteria 5.2.1 compliance export', 'Real-time university dashboard widgets and KPIs'],
  },
];

export default workflowSteps;
