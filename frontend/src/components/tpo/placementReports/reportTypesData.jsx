import React from 'react';
import { Users, Building2, FileCheck, Trophy, PieChart } from 'lucide-react';

export const reportTypes = [
  { type: 'students', title: 'Student Master Roster', description: 'Complete verified student registry with department, batch, CGPA, backlogs, and verification.', icon: <Users size={22} className="text-emerald" />, badge: 'Master Record' },
  { type: 'companies', title: 'Recruiting Companies Directory', description: 'Corporate partners listing including tier classifications, domains, and records.', icon: <Building2 size={22} className="text-emerald" />, badge: 'Corporate' },
  { type: 'applications', title: 'Comprehensive Applications Log', description: 'All candidate applications submitted across campus drives with stages and packages.', icon: <FileCheck size={22} className="text-emerald" />, badge: 'Applications' },
  { type: 'placements', title: 'Offers & Placed Candidates Roster', description: 'Verified student placement conversions, offering companies, and compensation.', icon: <Trophy size={22} className="text-emerald" />, badge: 'Conversions' },
  { type: 'branchwise', title: 'Department-Wise Placement Summary', description: 'Aggregated analytics breakdown of placement percentages, counts, and average CGPA.', icon: <PieChart size={22} className="text-emerald" />, badge: 'Executive' },
];
