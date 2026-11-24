import React from 'react';
import Input from '../../common/Input';
import { Award } from 'lucide-react';

export default function JobFormEligibility({ formData, handleChange, handleBranchToggle, allBranches }) {
  return (
    <>
      <div className="form-section-title"><Award size={16} /> Campus Eligibility Criteria</div>
      <div className="form-grid-3">
        <Input label="Minimum CGPA *" type="number" step="0.1" min="0" max="10" name="minCGPA" value={formData.minCGPA} onChange={handleChange} required />
        <Input label="Max Active Backlogs *" type="number" min="0" name="maxBacklogs" value={formData.maxBacklogs} onChange={handleChange} required />
        <Input label="Min 10th Marks (%)" type="number" min="0" max="100" name="minTenthPercentage" value={formData.minTenthPercentage} onChange={handleChange} />
      </div>

      <div className="form-group">
        <label className="input-label">Eligible Engineering Branches *</label>
        <div className="checkbox-branches-grid">
          {allBranches.map((b) => (
            <label key={b} className="branch-check-item">
              <input type="checkbox" checked={formData.eligibleBranches.includes(b)} onChange={() => handleBranchToggle(b)} />
              <span>{b}</span>
            </label>
          ))}
        </div>
      </div>
    </>
  );
}
