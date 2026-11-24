import React from 'react';

export default function JobCardDrawer({ description, selectionProcess, allowedDepartments }) {
  return (
    <div className="job-details-drawer">
      <div className="drawer-section">
        <h4 className="drawer-heading">About the Opportunity</h4>
        <p className="drawer-text">{description || 'No detailed job description provided.'}</p>
      </div>

      {selectionProcess && selectionProcess.length > 0 && (
        <div className="drawer-section">
          <h4 className="drawer-heading">Selection Process Rounds</h4>
          <div className="selection-rounds-stepper">
            {selectionProcess.map((round, rIdx) => (
              <div key={rIdx} className="round-step">
                <div className="round-number">{round.roundNumber || rIdx + 1}</div>
                <div className="round-info">
                  <span className="round-name">{round.name}</span>
                  {round.type && <span className="round-type">({round.type})</span>}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {allowedDepartments && allowedDepartments.length > 0 && (
        <div className="drawer-section">
          <h4 className="drawer-heading">Eligible Departments</h4>
          <div className="departments-tags">
            {allowedDepartments.map((dept, dIdx) => (
              <span key={dIdx} className="mini-tag">{dept}</span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
