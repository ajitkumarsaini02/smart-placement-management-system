import React from 'react';
import { 
  CheckCircle, 
  FileText, 
  Activity, 
  Bell, 
  Building2, 
  BarChart3 
} from 'lucide-react';
import FeatureCard from './FeatureCard';

/**
 * Features Section: 6 Reusable Capability Cards with Emerald + Mint Accents
 */
const Features = () => {
  const featureList = [
    {
      id: 1,
      icon: <CheckCircle size={24} className="feature-svg-icon" />,
      title: 'Smart Eligibility',
      description: 'Automatically checks candidate eligibility criteria based on CGPA, branch, backlogs, and academic requirements.',
      badge: 'Automated',
    },
    {
      id: 2,
      icon: <FileText size={24} className="feature-svg-icon" />,
      title: 'Resume Management',
      description: 'Store, update and share verified student resumes and academic credentials securely with hiring teams.',
      badge: 'Centralized',
    },
    {
      id: 3,
      icon: <Activity size={24} className="feature-svg-icon" />,
      title: 'Application Tracking',
      description: 'Track the status of placement applications across test rounds, interviews, and final job offer stages.',
      badge: 'Real-Time',
    },
    {
      id: 4,
      icon: <Bell size={24} className="feature-svg-icon" />,
      title: 'Placement Notifications',
      description: 'Receive instant notifications regarding upcoming recruitment drives, schedules, deadlines, and circulars.',
      badge: 'Instant',
    },
    {
      id: 5,
      icon: <Building2 size={24} className="feature-svg-icon" />,
      title: 'Company Information',
      description: 'Explore comprehensive details about visiting companies, job descriptions, CTC packages, and eligibility rules.',
      badge: 'Verified',
    },
    {
      id: 6,
      icon: <BarChart3 size={24} className="feature-svg-icon" />,
      title: 'Placement Analytics',
      description: 'Gain valuable insights into student performance, placement statistics, CTC distributions, and recruitment trends.',
      badge: 'Reporting',
    },
  ];

  return (
    <section id="features" className="section features-section">
      <div className="section-container">
        
        {/* Section Heading */}
        <div className="section-header-centered">
          <span className="section-eyebrow">Platform Capabilities</span>
          <h2 className="section-title">Everything You Need for a Smarter Placement Journey</h2>
          <p className="section-subtitle">
            Designed to help students, placement officers and recruiters work together effectively.
          </p>
        </div>

        {/* 6 Features Grid */}
        <div className="features-grid">
          {featureList.map((feature) => (
            <FeatureCard key={feature.id} {...feature} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Features;
