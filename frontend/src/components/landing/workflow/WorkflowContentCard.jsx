import React from "react";
import { ArrowRight } from "lucide-react";
import workflowSteps from "./workflowSteps";

const WorkflowContentCard = ({ activeStep, onNextStep }) => {
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
              <span className="workflow-bullet-check">✓</span>
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="workflow-card-right">
        <div className="workflow-visual-preview">
          <div className="visual-top">
            <div className="visual-icon-box">{current.icon}</div>
            <div>
              <span className="visual-label">Placement Stage Active</span>
              <h4 className="visual-title">{current.title}</h4>
            </div>
          </div>
          <div className="visual-status-box">
            <span className="status-label">Process Compliance</span>
            <span className="status-badge-green">
              100% Digital &amp; Auditable
            </span>
          </div>
          <div className="visual-progress-bar">
            <div
              className="visual-progress-fill"
              style={{
                width: `${((activeStep + 1) / workflowSteps.length) * 100}%`,
              }}
            />
          </div>
          <div className="visual-footer">
            <span>Step {activeStep + 1} of 7</span>
            <button
              type="button"
              className="visual-next-btn"
              onClick={onNextStep}
            >
              Next Stage <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkflowContentCard;
