import React from 'react';
import { CheckCircle2, AlertCircle } from 'lucide-react';

const stages = [
  { key: 'applied', label: 'Applied' },
  { key: 'under_review', label: 'Under Review' },
  { key: 'shortlisted', label: 'Shortlisted' },
  { key: 'interview_scheduled', label: 'Interview' },
  { key: 'selected', label: 'Final Decision' },
];

export default function ApplicationStepper({ status }) {
  const getStageIndex = () => {
    if (status === 'selected' || status === 'rejected') return 4;
    if (status === 'interview_scheduled') return 3;
    if (status === 'shortlisted') return 2;
    if (status === 'under_review') return 1;
    return 0;
  };

  const currentStageIndex = getStageIndex();

  return (
    <div className="app-stepper-container">
      {stages.map((stage, idx) => {
        const isDone = idx < currentStageIndex || (idx === 4 && status === 'selected');
        const isCurrent = idx === currentStageIndex && status !== 'selected' && status !== 'rejected';
        const isFailed = idx === 4 && status === 'rejected';

        return (
          <div
            key={stage.key}
            className={`stepper-step ${isDone ? 'step-completed' : ''} ${isCurrent ? 'step-current' : ''} ${isFailed ? 'step-rejected' : ''}`}
          >
            <div className="step-circle">
              {isDone ? <CheckCircle2 size={14} /> : isFailed ? <AlertCircle size={14} /> : <span>{idx + 1}</span>}
            </div>
            <span className="step-label">
              {idx === 4 && status === 'rejected' ? 'Not Selected' : stage.label}
            </span>
            {idx < stages.length - 1 && <div className="step-connector" />}
          </div>
        );
      })}
    </div>
  );
}
