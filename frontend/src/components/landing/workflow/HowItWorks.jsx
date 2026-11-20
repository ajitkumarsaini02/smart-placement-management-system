import React from 'react';
import StepCard from './StepCard';

/**
 * How It Works Section: 4 Simple Steps with Connected Horizontal Timeline
 */
const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      stepNumber: '01',
      title: 'Create Your Profile',
      description: 'Build your comprehensive student profile with academic records, verified CGPA, and resume.',
    },
    {
      id: 2,
      stepNumber: '02',
      title: 'Discover Opportunities',
      description: 'Explore upcoming recruitment circulars, package details, and verified corporate partner criteria.',
    },
    {
      id: 3,
      stepNumber: '03',
      title: 'Check Eligibility & Apply',
      description: 'Instantly view eligible companies matching your profile and apply with a single verified submission.',
    },
    {
      id: 4,
      stepNumber: '04',
      title: 'Track & Get Placed',
      description: 'Follow your application progress in real time across assessment rounds and land your dream offer.',
    },
  ];

  return (
    <section id="how-it-works" className="section how-it-works-section">
      <div className="section-container">
        
        {/* Section Heading */}
        <div className="section-header-centered">
          <span className="section-eyebrow">Clear Workflow</span>
          <h2 className="section-title">Your Placement Journey in 4 Simple Steps</h2>
          <p className="section-subtitle">
            A structured, transparent pathway guiding students from initial registration to final offer letter.
          </p>
        </div>

        {/* Timeline Grid with Horizontal Connecting Line on Desktop */}
        <div className="steps-timeline-wrapper">
          <div className="steps-connector-line" />
          <div className="steps-grid">
            {steps.map((step) => (
              <StepCard key={step.id} {...step} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;
