import React from 'react';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import workflowSteps from './workflowSteps';
import WorkflowStagePreview from './WorkflowStagePreview';

const WorkflowContentCard = ({ activeStep, onNextStep, onPrevStep }) => {
  const current = workflowSteps[activeStep];

  return (
    <div className="workflow-content-card">
      <div className="workflow-card-left">
        <div className="workflow-card-badge">
          <span className="stage-tag">Stage {current.stepNumber}</span>
          <span className="stage-name">{current.title}</span>
        </div>
        <h3 className="workflow-headline">{current.headline}</h3>
        <p className="workflow-desc">{current.desc}</p>

        <ul className="workflow-bullet-list">
          {current.bullets.map((b, i) => (
            <li key={i} className="workflow-bullet-item">
              <CheckCircle2 size={18} className="workflow-bullet-check" />
              <span>{b}</span>
            </li>
          ))}
        </ul>

        <div className="workflow-navigation-actions">
          <button
            type="button"
            className="workflow-nav-arrow-btn"
            onClick={onPrevStep}
            disabled={activeStep === 0}
            title="Previous Stage"
          >
            <ArrowLeft size={16} /> Previous
          </button>
          <div className="workflow-step-counter">
            Stage <strong>{activeStep + 1}</strong> of <strong>{workflowSteps.length}</strong>
          </div>
          <button
            type="button"
            className="workflow-nav-arrow-btn workflow-nav-next"
            onClick={onNextStep}
            title="Next Stage"
          >
            Next <ArrowRight size={16} />
          </button>
        </div>
      </div>

      <div className="workflow-card-right">
        <WorkflowStagePreview activeStep={activeStep} current={current} />
      </div>
    </div>
  );
};

export default WorkflowContentCard;
