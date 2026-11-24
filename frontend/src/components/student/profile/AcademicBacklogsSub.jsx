import React from 'react';
import Input from '../../common/Input';
import { AlertTriangle, CheckCircle2 } from 'lucide-react';

export default function AcademicBacklogsSub({ activeBacklogs, totalBacklogs, onChange }) {
  return (
    <>
      <div className="form-field-wrapper">
        <Input
          label="Active Backlogs (Current Standing)"
          name="activeBacklogs"
          type="number"
          min="0"
          max="20"
          placeholder="0"
          value={activeBacklogs}
          onChange={(e) => onChange('activeBacklogs', parseInt(e.target.value, 10) || 0)}
          required
          icon={activeBacklogs > 0 ? <AlertTriangle size={16} className="text-amber" /> : <CheckCircle2 size={16} className="text-emerald" />}
        />
        <span className="field-hint">
          {activeBacklogs === 0 ? 'Clear standing — maximum job eligibility.' : 'Active backlogs may restrict tier-1 software companies.'}
        </span>
      </div>

      <div className="form-field-wrapper">
        <Input
          label="Total Backlogs (History)"
          name="totalBacklogs"
          type="number"
          min="0"
          max="30"
          placeholder="0"
          value={totalBacklogs}
          onChange={(e) => onChange('totalBacklogs', parseInt(e.target.value, 10) || 0)}
        />
        <span className="field-hint">Total backlogs including cleared ones.</span>
      </div>
    </>
  );
}
