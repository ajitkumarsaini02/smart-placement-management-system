import React from 'react';

export default function EligibilityDepartmentPicker({ allDepartments, allowedDepartments, onToggle, onSelectAll }) {
  return (
    <div className="departments-picker-section">
      <div className="departments-picker-header">
        <label className="input-label">Eligible Academic Departments</label>
        <button type="button" className="btn-select-all" onClick={onSelectAll}>
          {allowedDepartments.length === allDepartments.length ? 'Deselect All' : 'Select All'}
        </button>
      </div>

      <div className="department-chips-grid">
        {allDepartments.map((dept) => {
          const isSelected = allowedDepartments.includes(dept);
          return (
            <button
              key={dept}
              type="button"
              className={`dept-chip-btn ${isSelected ? 'dept-chip-selected' : ''}`}
              onClick={() => onToggle(dept)}
            >
              <span>{dept}</span>
              {isSelected && <span className="chip-check">✓</span>}
            </button>
          );
        })}
      </div>
      {allowedDepartments.length === 0 && (
        <span className="field-hint text-amber">Notice: No departments selected. All academic departments will be permitted.</span>
      )}
    </div>
  );
}
