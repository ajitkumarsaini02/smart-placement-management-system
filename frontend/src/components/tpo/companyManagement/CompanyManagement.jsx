import React, { useState } from 'react';
import Button from '../../common/Button';
import CompanyCard from './CompanyCard';
import CompanyModal from './CompanyModal';
import { Building2, Plus, Search } from 'lucide-react';

const tierList = ['Super Dream', 'Dream', 'Core', 'Regular'];

const CompanyManagement = ({ companies = [], onCreateCompany, onUpdateCompany, onVerifyCompany, onDeleteCompany }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTier, setSelectedTier] = useState('');
  const [selectedVerified, setSelectedVerified] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingCompany, setEditingCompany] = useState(null);
  const [formData, setFormData] = useState({ name: '', industry: '', tier: 'Regular', website: '', location: '', description: '', isVerified: true });
  const [formError, setFormError] = useState('');
  const [formSubmitting, setFormSubmitting] = useState(false);

  const filtered = companies.filter((c) => {
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      if (!c.name?.toLowerCase().includes(q) && !c.industry?.toLowerCase().includes(q) && !c.location?.toLowerCase().includes(q)) return false;
    }
    if (selectedTier && c.tier !== selectedTier) return false;
    if (selectedVerified !== '' && c.isVerified !== (selectedVerified === 'true')) return false;
    return true;
  });

  const handleOpenCreate = () => {
    setEditingCompany(null); setFormError('');
    setFormData({ name: '', industry: '', tier: 'Regular', website: '', location: '', description: '', isVerified: true });
    setIsModalOpen(true);
  };

  const handleOpenEdit = (comp) => {
    setEditingCompany(comp); setFormError('');
    setFormData({ name: comp.name || '', industry: comp.industry || '', tier: comp.tier || 'Regular', website: comp.website || '', location: comp.location || '', description: comp.description || '', isVerified: comp.isVerified ?? true });
    setIsModalOpen(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.industry.trim()) return setFormError('Company name and industry are required.');
    try {
      setFormSubmitting(true);
      if (editingCompany) await onUpdateCompany(editingCompany._id, formData);
      else await onCreateCompany(formData);
      setIsModalOpen(false);
    } catch (err) { setFormError(err.response?.data?.message || 'Failed to save company.'); }
    finally { setFormSubmitting(false); }
  };

  return (
    <div className="tpo-company-manager-wrapper">
      <div className="tpo-filter-card">
        <div className="tpo-filter-top-row">
          <div className="tpo-search-input-box"><Search size={18} className="search-icon" /><input type="text" placeholder="Search companies..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="tpo-search-field" /></div>
          <Button variant="primary" size="md" onClick={handleOpenCreate} icon={<Plus size={16} />}>Add New Company</Button>
        </div>
        <div className="tpo-filter-dropdowns-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
          <div className="filter-select-group"><label className="filter-label">Recruitment Tier</label><select value={selectedTier} onChange={(e) => setSelectedTier(e.target.value)} className="tpo-select"><option value="">All Tiers</option>{tierList.map((t) => <option key={t} value={t}>{t}</option>)}</select></div>
          <div className="filter-select-group"><label className="filter-label">Verification</label><select value={selectedVerified} onChange={(e) => setSelectedVerified(e.target.value)} className="tpo-select"><option value="">All</option><option value="true">Verified</option><option value="false">Pending</option></select></div>
          <div className="filter-select-group" style={{ display: 'flex', alignItems: 'flex-end' }}><span className="tpo-results-summary">Showing <strong>{filtered.length}</strong> of {companies.length}</span></div>
        </div>
      </div>

      <div className="tpo-companies-grid">
        {filtered.length > 0 ? (
          filtered.map((comp) => (
            <CompanyCard key={comp._id} comp={comp} onVerifyCompany={onVerifyCompany} onOpenEdit={handleOpenEdit} onDeleteCompany={(c) => { if (window.confirm(`Delete ${c.name}?`)) onDeleteCompany(c._id); }} />
          ))
        ) : (
          <div className="empty-panel-state" style={{ gridColumn: '1 / -1', padding: '3rem' }}><Building2 size={44} className="text-emerald" /><h4>No companies found</h4></div>
        )}
      </div>

      <CompanyModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} editingCompany={editingCompany} formData={formData} setFormData={setFormData} onSubmit={handleSubmit} formError={formError} formSubmitting={formSubmitting} tierList={tierList} />
    </div>
  );
};

export default CompanyManagement;
