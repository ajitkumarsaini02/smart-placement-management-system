import React, { useState } from 'react';
import WorkflowHeader from './WorkflowHeader';
import WorkflowStepsNav from './WorkflowStepsNav';
import WorkflowContentCard from './WorkflowContentCard';
import workflowSteps from './workflowSteps';

const PlacementWorkflow = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => setActiveStep((prev) => (prev + 1) % workflowSteps.length);
  const handlePrev = () => setActiveStep((prev) => (prev - 1 + workflowSteps.length) % workflowSteps.length);

  return (
    <section className="section workflow-section" id="workflow">
      <div className="section-container">
        <WorkflowHeader />
        <WorkflowStepsNav activeStep={activeStep} onSelectStep={setActiveStep} />
        <WorkflowContentCard
          activeStep={activeStep}
          onNextStep={handleNext}
          onPrevStep={handlePrev}
        />
      </div>
    </section>
  );
};

export default PlacementWorkflow;
