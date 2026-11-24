import React from 'react';
import Input from '../../common/Input';
import Button from '../../common/Button';
import { Building2, X, Save } from 'lucide-react';

export default function CompanyModal({ isOpen, onClose, editingCompany, formData, setFormData, onSubmit, formError, formSubmitting, tierList }) {
  if (!isOpen) return null;

  return (
    <div className="tpo-modal-overlay" onClick={onClose}>
      <div className="tpo-modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="tpo-modal-header">
          <div className="modal-title-with-avatar">
            <div className="modal-avatar"><Building2 size={20} /></div>
            <div>
              <h3 className="modal-heading">{editingCompany ? `Edit ${editingCompany.name}` : 'Register Company'}</h3>
              <span className="modal-sub">Corporate placement profile.</span>
            </div>
          </div>
          <button type="button" className="tpo-modal-close" onClick={onClose}><X size={20} /></button>
        </div>

        {formError && <div className="form-alert alert-error" style={{ margin: '1rem 1.5rem 0' }}><span>{formError}</span></div>}

        <form onSubmit={onSubmit}>
          <div className="tpo-modal-body">
            <div className="profile-form-grid">
              <Input label="Company Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
              <Input label="Industry" value={formData.industry} onChange={(e) => setFormData({ ...formData, industry: e.target.value })} required />
              <div className="input-group">
                <label className="input-label">Recruitment Tier</label>
                <select className="input-field" value={formData.tier} onChange={(e) => setFormData({ ...formData, tier: e.target.value })}>
                  {tierList.map((t) => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>
              <Input label="Website" type="url" value={formData.website} onChange={(e) => setFormData({ ...formData, website: e.target.value })} />
              <Input label="Location" value={formData.location} onChange={(e) => setFormData({ ...formData, location: e.target.value })} />
              <div className="input-group">
                <label className="input-label">Verification</label>
                <select className="input-field" value={formData.isVerified ? 'true' : 'false'} onChange={(e) => setFormData({ ...formData, isVerified: e.target.value === 'true' })}>
                  <option value="true">Verified Corporate Partner</option><option value="false">Pending</option>
                </select>
              </div>
              <div className="form-field-full">
                <label className="input-label">Description</label>
                <textarea rows="2" className="input-textarea" value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} />
              </div>
            </div>
          </div>

          <div className="tpo-modal-footer">
            <Button variant="ghost" size="sm" onClick={onClose}>Cancel</Button>
            <Button type="submit" variant="primary" size="sm" disabled={formSubmitting} icon={<Save size={15} />}>
              {formSubmitting ? 'Saving...' : editingCompany ? 'Save Changes' : 'Register Company'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
