import React from 'react';
import Button from '../../common/Button';
import { Calendar } from 'lucide-react';

export default function ScheduleInterviewModal({ target, form, onChange, onSubmit, onCancel, loading }) {
  if (!target) return null;

  return (
    <div className="modal-backdrop">
      <div className="modal-container">
        <div className="modal-header">
          <h3 className="modal-title">Schedule Candidate Interview</h3>
          <button type="button" className="modal-close-btn" onClick={onCancel}>✕</button>
        </div>
        <form onSubmit={onSubmit}>
          <div className="modal-body">
            <p className="modal-lead-text">
              Candidate: <strong>{target.student?.user?.name}</strong> ({target.job?.title})
            </p>
            <div className="form-group">
              <label className="input-label">Round Title *</label>
              <input type="text" className="input-field" value={form.roundName} onChange={(e) => onChange('roundName', e.target.value)} required />
            </div>
            <div className="form-group">
              <label className="input-label">Interview Date & Time *</label>
              <input type="datetime-local" className="input-field" value={form.scheduledAt} onChange={(e) => onChange('scheduledAt', e.target.value)} required />
            </div>
            <div className="form-group">
              <label className="input-label">Meeting Link / Location</label>
              <input type="text" className="input-field" placeholder="https://meet.google.com/xyz" value={form.meetingLink} onChange={(e) => onChange('meetingLink', e.target.value)} />
            </div>
            <div className="form-group">
              <label className="input-label">Candidate Instructions</label>
              <textarea className="input-textarea" rows={3} placeholder="Please be prepared with code editor..." value={form.instructions} onChange={(e) => onChange('instructions', e.target.value)} />
            </div>
          </div>
          <div className="modal-actions-bar">
            <Button type="button" variant="ghost" onClick={onCancel}>Cancel</Button>
            <Button type="submit" variant="primary" loading={loading} icon={<Calendar size={14} />}>Confirm & Notify</Button>
          </div>
        </form>
      </div>
    </div>
  );
}
