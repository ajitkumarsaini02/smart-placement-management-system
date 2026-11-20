import React from 'react';

export const AboutFlowGraphic = () => (
  <div className="about-visual-column">
    <div className="workflow-graphic-container">
      <div className="workflow-graphic-header">
        <span className="workflow-header-pill">Placement Ecosystem Flow</span>
      </div>
      <div className="workflow-graphic-body">
        <div className="workflow-node node-students">
          <div className="node-icon-circle">🎓</div>
          <div className="node-text">
            <div className="node-title">Students</div>
            <div className="node-sub">Profile & Resumes</div>
          </div>
        </div>
        <div className="workflow-arrow">
          <div className="arrow-line" />
          <span className="arrow-label">Eligibility Match</span>
        </div>
        <div className="workflow-node node-hub">
          <div className="node-icon-circle">💼</div>
          <div className="node-text">
            <div className="node-title">PlaceTrack Platform</div>
            <div className="node-sub">Smart Coordination & Verification Hub</div>
          </div>
        </div>
        <div className="workflow-arrow">
          <div className="arrow-line" />
          <span className="arrow-label">Recruitment Pipeline</span>
        </div>
        <div className="workflow-dual-nodes">
          <div className="workflow-subnode node-tpo">
            <div className="node-icon-circle">🏛️</div>
            <div className="node-subnode-title">Placement Cell</div>
            <div className="node-subnode-desc">Drives & Approvals</div>
          </div>
          <div className="workflow-subnode node-recruiters">
            <div className="node-icon-circle">🏢</div>
            <div className="node-subnode-title">Recruiters</div>
            <div className="node-subnode-desc">Interviews & Offers</div>
          </div>
        </div>
      </div>
      <div className="workflow-graphic-footer">
        <div className="workflow-sync-indicator">
          <span className="pulse-dot" />
          <span>Real-Time Bi-Directional Synchronization</span>
        </div>
      </div>
    </div>
  </div>
);

export default AboutFlowGraphic;
