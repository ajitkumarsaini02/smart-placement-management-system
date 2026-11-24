import React, { useState } from "react";
import WorkflowHeader from "./WorkflowHeader";
import WorkflowStepsNav from "./WorkflowStepsNav";
import WorkflowContentCard from "./WorkflowContentCard";
import workflowSteps from "./workflowSteps";

const PlacementWorkflow = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="section workflow-section" id="workflow">
      <div className="section-container">
        <WorkflowHeader />
        <WorkflowStepsNav activeStep={activeStep} onSelectStep={setActiveStep} />
        <WorkflowContentCard
          activeStep={activeStep}
          onNextStep={() => setActiveStep((activeStep + 1) % workflowSteps.length)}
        />
      </div>
    </section>
  );
};

export default PlacementWorkflow;
