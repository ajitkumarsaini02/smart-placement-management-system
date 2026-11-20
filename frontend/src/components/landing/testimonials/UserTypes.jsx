import React from 'react';
import { GraduationCap, ShieldCheck, Briefcase } from 'lucide-react';
import UserCard from './UserCard';

/**
 * User Types Section: One Platform. Three Powerful Experiences.
 */
const UserTypes = () => {
  const users = [
    {
      id: 1,
      title: 'For Students',
      description: 'Take control of your placement journey with organized opportunities and application tracking.',
      features: [
        'View eligible companies based on CGPA & criteria',
        'Manage and update verified ATS resumes',
        'Track multi-round application progress live',
        'Receive instant placement circulars and drive updates',
      ],
      accentClass: 'user-accent-student',
      icon: <GraduationCap size={24} className="user-icon-mint" />,
    },
    {
      id: 2,
      title: 'For Placement Officers',
      description: 'Manage campus recruitment activities with better visibility and centralized information.',
      features: [
        'Centralize student records and academic data',
        'Coordinate multiple simultaneous placement drives',
        'Automate eligibility screening without spreadsheets',
        'View cohort analytics and export accreditation reports',
      ],
      accentClass: 'user-accent-tpo',
      icon: <ShieldCheck size={24} className="user-icon-mint" />,
    },
    {
      id: 3,
      title: 'For Recruiters',
      description: 'Connect with eligible candidates and simplify campus recruitment coordination.',
      features: [
        'Explore verified candidate profiles and resumes',
        'Share job descriptions and hiring criteria easily',
        'Shortlist filtered candidate pools in minutes',
        'Coordinate test schedules and interview slots directly',
      ],
      accentClass: 'user-accent-recruiter',
      icon: <Briefcase size={24} className="user-icon-mint" />,
    },
  ];

  return (
    <section id="user-types" className="section user-types-section">
      <div className="section-container">
        
        {/* Section Heading */}
        <div className="section-header-centered">
          <span className="section-eyebrow">Audience Focused</span>
          <h2 className="section-title">One Platform. Three Powerful Experiences.</h2>
          <p className="section-subtitle">
            PlaceTrack brings everyone involved in campus placements together into a single, cohesive workflow.
          </p>
        </div>

        {/* 3 User Cards Grid */}
        <div className="user-types-grid">
          {users.map((user) => (
            <UserCard key={user.id} {...user} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default UserTypes;
