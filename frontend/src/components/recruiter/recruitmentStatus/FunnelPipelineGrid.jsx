import React from 'react';

export default function FunnelPipelineGrid({ stages, getStageCount, activeStage, setActiveStage }) {
  return (
    <div className="funnel-pipeline-grid">
      {stages.map((stage) => {
        const count = getStageCount(stage.key);
        const isSelected = activeStage === stage.key;
        return (
          <div
            key={stage.key}
            className={`funnel-stage-card ${isSelected ? 'stage-card-active' : ''}`}
            onClick={() => setActiveStage(isSelected ? 'all' : stage.key)}
          >
            <div className="stage-top">
              <span className="stage-icon">{stage.icon}</span>
              <span className="stage-badge-count">{count}</span>
            </div>
            <h4 className="stage-label">{stage.label}</h4>
            <span className="stage-action-hint">{isSelected ? 'Click to show all' : 'Filter stage'}</span>
          </div>
        );
      })}
    </div>
  );
}
