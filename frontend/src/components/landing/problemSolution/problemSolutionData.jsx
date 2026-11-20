import React from "react";
import {
  Users,
  FileSpreadsheet,
  Clock,
  Database,
  Zap,
  ShieldCheck,
} from "lucide-react";

export const painPoints = [
  {
    icon: <Users size={18} className="problem-icon" />,
    title: "Managing Recruiters Manually",
    desc: "Recruiter contacts scattered in email threads, WhatsApp chats, and disconnected spreadsheets.",
  },
  {
    icon: <FileSpreadsheet size={18} className="problem-icon" />,
    title: "Manual Interview Round Tracking",
    desc: "Tracking who passed Aptitude, GD, Technical in separate Excel sheets without live synchronization.",
  },
  {
    icon: <Clock size={18} className="problem-icon" />,
    title: "Lost Placement Opportunities",
    desc: "Drive invitations go out late — students miss deadlines, recruiters move on to other colleges.",
  },
  {
    icon: <Database size={18} className="problem-icon" />,
    title: "No Centralised Student Database",
    desc: "Incomplete profiles, unverified CGPA scores, and missing resumes causing compliance bottlenecks.",
  },
];

export const solutions = [
  {
    icon: <Users size={18} className="solution-icon" />,
    title: "Structured Recruiter CRM",
    desc: "Complete company database, visit records, approval status, and self-service recruiter portal access.",
  },
  {
    icon: <Zap size={18} className="solution-icon" />,
    title: "Round-by-Round Pipeline",
    desc: "Live stage progression (Aptitude → GD → Tech → HR) with instant qualification and rejection logs.",
  },
  {
    icon: <Clock size={18} className="solution-icon" />,
    title: "Instant Drive Alerts & Invites",
    desc: "Automated student eligibility matching, real-time push alerts, and 1-tap recruiter invitation links.",
  },
  {
    icon: <ShieldCheck size={18} className="solution-icon" />,
    title: "Verified Profiles & NAAC Reports",
    desc: "Institutional verification, automated resume screening, and 1-click NAAC/NBA accreditation export.",
  },
];
