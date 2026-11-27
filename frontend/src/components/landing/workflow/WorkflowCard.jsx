import React from 'react';
import { CheckCircle2, Sparkles } from 'lucide-react';

const stageMeta = {
  "01": { tag: "Corporate CRM", status: "Verified Partner Active" },
  "02": { tag: "Drive Management", status: "Eligibility Rules Enforced" },
  "03": { tag: "Student Portal", status: "1-Click Encrypted Apply" },
  "04": { tag: "Recruitment Funnel", status: "Live Round Tracker" },
  "05": { tag: "Candidate Review", status: "Panel Shortlisting" },
  "06": { tag: "Offer & Policy", status: "Dream Tier Locked" },
  "07": { tag: "NAAC / NBA Audit", status: "Accreditation Ready" },
};

export default function WorkflowCard({ step }) {
  const meta = stageMeta[step.stepNumber] || { tag: `Stage ${step.stepNumber}`, status: "Active" };

  return (
    <div className="workflow-grid-card">
      <div className="workflow-card-top">
        <span className="workflow-step-num-pill">Stage {step.stepNumber}</span>
        <span className="workflow-step-role-tag">{meta.tag}</span>
      </div>

      <div className="workflow-card-header">
        <div className="workflow-card-icon">{step.icon}</div>
        <div className="workflow-card-titles">
          <h3 className="workflow-card-title">{step.title}</h3>
          <p className="workflow-card-headline">{step.headline}</p>
        </div>
      </div>

      <p className="workflow-card-desc">{step.desc}</p>

      <div className="workflow-card-divider" />

      <ul className="workflow-card-bullets">
        {step.bullets.map((bullet, idx) => (
          <li key={idx} className="workflow-card-bullet-item">
            <CheckCircle2 size={15} className="bullet-icon" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>

      <div className="workflow-card-footer">
        <span className="workflow-card-status-pill">
          <Sparkles size={12} /> {meta.status}
        </span>
      </div>
    </div>
  );
}
