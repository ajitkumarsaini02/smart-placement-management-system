import React from 'react';
import Button from '../../common/Button';
import Input from '../../common/Input';
import { FileCheck, X, CheckCircle2, Send } from 'lucide-react';

const applicationStatusOptions = [
  { value: 'applied', label: 'Applied' },
  { value: 'shortlisted', label: 'Shortlisted' },
  { value: 'assessment_pending', label: 'Assessment Pending' },
  { value: 'assessment_cleared', label: 'Assessment Cleared' },
  { value: 'interview_scheduled', label: 'Interview Scheduled' },
  { value: 'offered', label: 'Offered / Selected' },
  { value: 'rejected', label: 'Not Selected / Rejected' },
];

export default function ApplicationStatusModal({ activeApp, onClose, selectedStatus, setSelectedStatus, statusNotes, setStatusNotes, feedback, setFeedback, onSave, submitting, successMsg }) {
  if (!activeApp) return null;

  return (
    <div className="tpo-modal-overlay" onClick={onClose}>
      <div className="tpo-modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="tpo-modal-header">
          <div className="modal-title-with-avatar">
            <div className="modal-avatar"><FileCheck size={20} /></div>
            <div>
              <h3 className="modal-heading">Manage Application Status</h3>
              <span className="modal-sub">{activeApp.student?.user?.name} → {activeApp.job?.title}</span>
            </div>
          </div>
          <button type="button" className="tpo-modal-close" onClick={onClose}><X size={20} /></button>
        </div>

        {successMsg && <div className="form-alert alert-success" style={{ margin: '1rem 1.5rem 0' }}><CheckCircle2 size={16} /><span>{successMsg}</span></div>}

        <form onSubmit={onSave}>
          <div className="tpo-modal-body">
            <div className="profile-form-grid">
              <div className="form-field-full">
                <label className="input-label">Select Recruitment Stage / Status</label>
                <select className="input-field" value={selectedStatus} onChange={(e) => setSelectedStatus(e.target.value)}>
                  {applicationStatusOptions.map((opt) => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
                </select>
              </div>
              <div className="form-field-full">
                <Input label="Timeline Notes (Visible to Student)" placeholder="e.g. Cleared technical interview..." value={statusNotes} onChange={(e) => setStatusNotes(e.target.value)} />
              </div>
              <div className="form-field-full">
                <label className="input-label">Recruiter Feedback / Evaluation</label>
                <textarea rows="3" className="input-textarea" placeholder="Optional feedback..." value={feedback} onChange={(e) => setFeedback(e.target.value)} />
              </div>
            </div>
            {selectedStatus === 'offered' && (
              <div className="ineligible-callout" style={{ backgroundColor: '#ECFDF5', borderColor: '#A7F3D0', color: '#047857' }}>
                <CheckCircle2 size={18} /><span><strong>Notice:</strong> Marking &quot;Offered&quot; updates student to &quot;Placed&quot;.</span>
              </div>
            )}
          </div>

          <div className="tpo-modal-footer">
            <Button variant="ghost" size="sm" onClick={onClose}>Cancel</Button>
            <Button type="submit" variant="primary" size="sm" disabled={submitting} icon={<Send size={15} />}>
              {submitting ? 'Updating...' : 'Confirm Status Update'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
