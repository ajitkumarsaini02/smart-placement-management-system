import React from 'react';
import { Sparkles, ShieldCheck } from 'lucide-react';
import { workflowPreviewData } from './WorkflowPreviewData';

export default function WorkflowStagePreview({ activeStep, current }) {
  const data = workflowPreviewData[activeStep] || workflowPreviewData[0];

  return (
    <div className="workflow-stage-mockup">
      <div className="mockup-header-bar">
        <div className="mockup-header-dots">
          <span className="dot red" />
          <span className="dot yellow" />
          <span className="dot green" />
        </div>
        <span className="mockup-header-tag">{data.roleTag}</span>
        <span className={`mockup-status-pill ${data.statusVariant}`}>
          <Sparkles size={11} /> {data.statusText}
        </span>
      </div>

      <div className="mockup-card-body">
        <div className="mockup-title-row">
          <div className="mockup-icon-wrapper">{current.icon}</div>
          <div>
            <h4 className="mockup-card-title">{data.title}</h4>
            <p className="mockup-card-sub">{data.subtitle}</p>
          </div>
        </div>

        <div className="mockup-stats-grid">
          {data.stats.map((s, idx) => (
            <div key={idx} className="mockup-stat-cell">
              <span className="stat-label">{s.label}</span>
              <span className="stat-value">{s.val}</span>
            </div>
          ))}
        </div>

        <div className="mockup-highlight-banner">
          <ShieldCheck size={16} className="highlight-icon" />
          <span>{data.highlight}</span>
        </div>
      </div>

      <div className="mockup-footer-bar">
        <span className="footer-meta">PlaceTrack Workflow Engine • Step {activeStep + 1} of 7</span>
        <span className="footer-badge">100% Digital &amp; Auditable</span>
      </div>
    </div>
  );
}
