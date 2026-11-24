import React from 'react';
import EligibilityManagement from '../eligibilityManagement/EligibilityManagement';
import Input from '../../common/Input';
import Button from '../../common/Button';
import { Calendar, X, Save } from 'lucide-react';

const driveStatusList = ['active', 'upcoming', 'completed', 'cancelled'];

export default function DriveModal({ isOpen, onClose, editingDrive, formData, setFormData, onSubmit, formError, submitting, companies }) {
  if (!isOpen) return null;

  return (
    <div className="tpo-modal-overlay" onClick={onClose}>
      <div className="tpo-modal-container tpo-modal-large" onClick={(e) => e.stopPropagation()}>
        <div className="tpo-modal-header">
          <div className="modal-title-with-avatar">
            <div className="modal-avatar"><Calendar size={20} /></div>
            <div>
              <h3 className="modal-heading">{editingDrive ? `Edit: ${editingDrive.title}` : 'Create Placement Drive'}</h3>
              <span className="modal-sub">Configure schedule and rules.</span>
            </div>
          </div>
          <button type="button" className="tpo-modal-close" onClick={onClose}><X size={20} /></button>
        </div>

        {formError && <div className="form-alert alert-error" style={{ margin: '1rem 1.5rem 0' }}><span>{formError}</span></div>}

        <form onSubmit={onSubmit}>
          <div className="tpo-modal-body">
            <div className="profile-form-grid">
              <div className="form-field-full">
                <Input label="Drive Title" value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} required />
              </div>
              <Input label="Cycle" value={formData.academicYear} onChange={(e) => setFormData({ ...formData, academicYear: e.target.value })} required />
              <div className="input-group">
                <label className="input-label">Partner Company</label>
                <select className="input-field" value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })}>
                  <option value="">General Drive</option>
                  {companies.map((c) => <option key={c._id} value={c._id}>{c.name}</option>)}
                </select>
              </div>
              <Input label="Start Date" type="date" value={formData.startDate} onChange={(e) => setFormData({ ...formData, startDate: e.target.value })} required />
              <Input label="End Date" type="date" value={formData.endDate} onChange={(e) => setFormData({ ...formData, endDate: e.target.value })} />
              <div className="input-group">
                <label className="input-label">Status</label>
                <select className="input-field" value={formData.status} onChange={(e) => setFormData({ ...formData, status: e.target.value })}>
                  {driveStatusList.map((st) => <option key={st} value={st}>{st.toUpperCase()}</option>)}
                </select>
              </div>
            </div>
            <div style={{ marginTop: '1.5rem' }}>
              <EligibilityManagement criteria={formData.eligibilityCriteria} onChange={(f, v) => setFormData((p) => ({ ...p, eligibilityCriteria: { ...p.eligibilityCriteria, [f]: v } }))} />
            </div>
          </div>

          <div className="tpo-modal-footer">
            <Button variant="ghost" size="sm" onClick={onClose}>Cancel</Button>
            <Button type="submit" variant="primary" size="sm" disabled={submitting} icon={<Save size={15} />}>
              {submitting ? 'Saving...' : editingDrive ? 'Save Changes' : 'Launch Drive'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
