import React, { useState } from 'react';
import Button from '../../common/Button';
import Input from '../../common/Input';
import { BadgeCheck, Plus, ExternalLink, Trash2 } from 'lucide-react';

export const SkillsCertificationsSub = ({ certifications = [], onCertificationsChange }) => {
  const [showAdd, setShowAdd] = useState(false);
  const [form, setForm] = useState({ name: '', issuer: '', issueDate: '', credentialUrl: '' });

  const handleAdd = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.issuer.trim()) return;
    const newCert = {
      name: form.name.trim(),
      issuer: form.issuer.trim(),
      issueDate: form.issueDate || undefined,
      credentialUrl: form.credentialUrl.trim(),
    };
    onCertificationsChange([...certifications, newCert]);
    setForm({ name: '', issuer: '', issueDate: '', credentialUrl: '' });
    setShowAdd(false);
  };

  const handleRemove = (idx) => onCertificationsChange(certifications.filter((_, i) => i !== idx));

  return (
    <div className="profile-section-card">
      <div className="card-header-bar">
        <div className="card-title-group">
          <BadgeCheck className="title-icon" size={20} />
          <div>
            <h3 className="card-section-title">Certifications &amp; Licenses</h3>
            <p className="card-section-desc">Add verified credentials from AWS, Google, HackerRank, etc.</p>
          </div>
        </div>
        {!showAdd && (
          <Button variant="outline" size="sm" onClick={() => setShowAdd(true)} icon={<Plus size={15} />}>Add Certificate</Button>
        )}
      </div>

      {showAdd && (
        <form className="item-create-form" onSubmit={handleAdd}>
          <h4 className="form-subheading">New Certification</h4>
          <div className="profile-form-grid">
            <Input label="Certification Name" placeholder="e.g. AWS Certified Developer" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
            <Input label="Issuing Organization" placeholder="e.g. Amazon Web Services" value={form.issuer} onChange={(e) => setForm({ ...form, issuer: e.target.value })} required />
            <Input label="Date Issued" type="date" value={form.issueDate} onChange={(e) => setForm({ ...form, issueDate: e.target.value })} />
            <Input label="Verification URL" type="url" placeholder="https://..." value={form.credentialUrl} onChange={(e) => setForm({ ...form, credentialUrl: e.target.value })} />
          </div>
          <div className="form-actions-row">
            <Button type="submit" variant="primary" size="sm">Save Certificate</Button>
            <Button type="button" variant="ghost" size="sm" onClick={() => setShowAdd(false)}>Cancel</Button>
          </div>
        </form>
      )}

      <div className="items-list">
        {certifications?.length > 0 ? (
          certifications.map((cert, idx) => (
            <div key={idx} className="project-card-item">
              <div className="item-header">
                <div>
                  <h4 className="item-title">{cert.name}</h4>
                  <p className="item-desc">Issued by <strong>{cert.issuer}</strong>{cert.issueDate && ` • ${new Date(cert.issueDate).toLocaleDateString()}`}</p>
                </div>
                <div className="item-actions">
                  {cert.credentialUrl && <a href={cert.credentialUrl} target="_blank" rel="noreferrer" className="btn-icon-link"><ExternalLink size={16} /></a>}
                  <button type="button" className="btn-icon-danger" onClick={() => handleRemove(idx)}><Trash2 size={16} /></button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="empty-hint">No certifications listed yet.</p>
        )}
      </div>
    </div>
  );
};

export default SkillsCertificationsSub;
