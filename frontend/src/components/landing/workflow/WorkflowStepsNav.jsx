import React from 'react';
import workflowSteps from './workflowSteps';

const WorkflowStepsNav = ({ activeStep, onSelectStep }) => (
  <div className="workflow-steps-nav-wrapper">
    <div className="workflow-steps-nav">
      {workflowSteps.map((step, idx) => (
        <button
          key={idx}
          type="button"
          className={`workflow-step-btn ${activeStep === idx ? 'step-active' : ''}`}
          onClick={() => onSelectStep(idx)}
        >
          <span className="workflow-step-num">{step.stepNumber}</span>
          <span className="workflow-step-title">{step.title}</span>
        </button>
      ))}
    </div>
  </div>
);

export default WorkflowStepsNav;
