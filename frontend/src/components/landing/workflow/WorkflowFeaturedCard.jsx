import React from 'react';
import { CheckCircle2, ShieldCheck, Award } from 'lucide-react';

export default function WorkflowFeaturedCard({ step }) {
  return (
    <div className="workflow-grid-card workflow-featured-card">
      <div className="featured-card-content">
        <div className="featured-card-left">
          <div className="workflow-card-top">
            <span className="workflow-step-num-pill featured-num">
              Stage {step.stepNumber} • Final Governance
            </span>
            <span className="workflow-step-role-tag featured-tag">
              NAAC &amp; NBA Compliance
            </span>
          </div>

          <div className="workflow-card-header">
            <div className="workflow-card-icon featured-icon">{step.icon}</div>
            <div className="workflow-card-titles">
              <h3 className="workflow-card-title">{step.title}</h3>
              <p className="workflow-card-headline">{step.headline}</p>
            </div>
          </div>

          <p className="workflow-card-desc">{step.desc}</p>

          <ul className="workflow-card-bullets">
            {step.bullets.map((bullet, idx) => (
              <li key={idx} className="workflow-card-bullet-item">
                <CheckCircle2 size={15} className="bullet-icon" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="featured-card-right">
          <div className="featured-metrics-box">
            <div className="featured-metrics-header">
              <Award size={18} className="text-primary" />
              <span>Institutional Placement Audit</span>
            </div>
            <div className="featured-metrics-grid">
              <div className="metric-cell">
                <span className="metric-val">84.8%</span>
                <span className="metric-lbl">Placement Rate</span>
              </div>
              <div className="metric-cell">
                <span className="metric-val">5.2.1</span>
                <span className="metric-lbl">NAAC Metric</span>
              </div>
              <div className="metric-cell">
                <span className="metric-val">1-Click</span>
                <span className="metric-lbl">NIRF Export</span>
              </div>
            </div>
            <div className="featured-audit-badge">
              <ShieldCheck size={16} />
              <span>Certified 100% Digital &amp; Auditable Records</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
