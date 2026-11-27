import React from 'react';
import WorkflowHeader from './WorkflowHeader';
import WorkflowCard from './WorkflowCard';
import WorkflowFeaturedCard from './WorkflowFeaturedCard';
import workflowSteps from './workflowSteps';

const PlacementWorkflow = () => {
  const standardSteps = workflowSteps.slice(0, 6);
  const featuredStep = workflowSteps[6];

  return (
    <section className="section workflow-section" id="workflow">
      <div className="section-container">
        <WorkflowHeader />
        <div className="workflow-cards-grid">
          {standardSteps.map((step) => (
            <WorkflowCard key={step.stepNumber} step={step} />
          ))}
          {featuredStep && <WorkflowFeaturedCard step={featuredStep} />}
        </div>
      </div>
    </section>
  );
};

export default PlacementWorkflow;
