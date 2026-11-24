import React from 'react';
import Badge from '../../common/Badge';
import { MapPin, Globe, ExternalLink, Briefcase, CheckCircle2, Clock, Edit2, Trash2 } from 'lucide-react';

const getTierBadge = (tier) => {
  switch (tier) {
    case 'Super Dream': return <Badge variant="emerald" size="sm">Super Dream ⭐</Badge>;
    case 'Dream': return <Badge variant="mint" size="sm">Dream</Badge>;
    case 'Core': return <Badge variant="outline" size="sm">Core</Badge>;
    default: return <Badge variant="default" size="sm">{tier || 'Regular'}</Badge>;
  }
};

export default function CompanyCard({ comp, onVerifyCompany, onOpenEdit, onDeleteCompany }) {
  return (
    <div className="tpo-company-card">
      <div className="company-card-top">
        <div className="company-logo-avatar">{comp.name ? comp.name.charAt(0).toUpperCase() : 'C'}</div>
        <div className="company-info-block">
          <h4 className="company-name">{comp.name}</h4>
          <span className="company-industry">{comp.industry}</span>
        </div>
        <div className="company-tier-badge">{getTierBadge(comp.tier)}</div>
      </div>

      {comp.description && (
        <p className="company-desc-text">
          {comp.description.length > 120 ? `${comp.description.slice(0, 120)}...` : comp.description}
        </p>
      )}

      <div className="company-meta-items">
        {comp.location && <span className="company-meta-item"><MapPin size={14} className="text-emerald" /> {comp.location}</span>}
        {comp.website && (
          <a href={comp.website.startsWith('http') ? comp.website : `https://${comp.website}`} target="_blank" rel="noopener noreferrer" className="company-meta-item company-website-link">
            <Globe size={14} /> Website <ExternalLink size={12} />
          </a>
        )}
        <span className="company-meta-item"><Briefcase size={14} className="text-emerald" /><strong>{comp.jobsCount || 0}</strong> Roles</span>
      </div>

      <div className="company-card-footer">
        <button
          type="button"
          className={`tpo-verify-toggle-btn ${comp.isVerified ? 'verified-active' : 'verified-pending'}`}
          onClick={() => onVerifyCompany(comp._id, comp.isVerified)}
          title="Toggle verification"
        >
          {comp.isVerified ? <><CheckCircle2 size={13} /> Verified</> : <><Clock size={13} /> Unverified</>}
        </button>

        <div className="company-actions-group">
          <button type="button" className="btn-icon-subtle" onClick={() => onOpenEdit(comp)} title="Edit"><Edit2 size={16} /></button>
          <button type="button" className="btn-icon-subtle text-danger" onClick={() => onDeleteCompany(comp)} title="Delete"><Trash2 size={16} /></button>
        </div>
      </div>
    </div>
  );
}
