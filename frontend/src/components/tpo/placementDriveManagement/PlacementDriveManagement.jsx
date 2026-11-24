import React, { useState } from 'react';
import Button from '../../common/Button';
import DriveCard from './DriveCard';
import DriveModal from './DriveModal';
import { Calendar, Plus } from 'lucide-react';

const PlacementDriveManagement = ({ drives = [], companies = [], onCreateDrive, onUpdateDrive, onCancelDrive }) => {
  const [activeTab, setActiveTab] = useState('all');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingDrive, setEditingDrive] = useState(null);
  const [formData, setFormData] = useState({
    title: '', academicYear: '2025-2026', description: '', company: '', startDate: '', endDate: '', registrationDeadline: '', status: 'active',
    eligibilityCriteria: { minCGPA: 6.5, minTenthPercentage: 60, minTwelfthPercentage: 60, maxActiveBacklogs: 0, allowedDepartments: ['CSE', 'IT', 'ECE'], batchYear: 2026 },
  });
  const [formError, setFormError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const filtered = drives.filter((d) => activeTab === 'all' || d.status === activeTab);

  const handleOpenCreate = () => {
    setEditingDrive(null); setFormError('');
    setFormData({
      title: '', academicYear: '2025-2026', description: '', company: companies[0]?._id || '',
      startDate: new Date().toISOString().split('T')[0], endDate: '', registrationDeadline: '', status: 'active',
      eligibilityCriteria: { minCGPA: 6.5, minTenthPercentage: 60, minTwelfthPercentage: 60, maxActiveBacklogs: 0, allowedDepartments: ['CSE', 'IT', 'ECE'], batchYear: 2026 },
    });
    setIsModalOpen(true);
  };

  const handleOpenEdit = (drive) => {
    setEditingDrive(drive); setFormError('');
    setFormData({
      title: drive.title || '', academicYear: drive.academicYear || '2025-2026', description: drive.description || '',
      company: drive.company?._id || drive.company || '', startDate: drive.startDate ? new Date(drive.startDate).toISOString().split('T')[0] : '',
      endDate: drive.endDate ? new Date(drive.endDate).toISOString().split('T')[0] : '',
      registrationDeadline: drive.registrationDeadline ? new Date(drive.registrationDeadline).toISOString().split('T')[0] : '',
      status: drive.status || 'active', eligibilityCriteria: drive.eligibilityCriteria || { minCGPA: 6.0, maxActiveBacklogs: 0 },
    });
    setIsModalOpen(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.title.trim() || !formData.startDate) return setFormError('Drive title and start date are required.');
    try {
      setSubmitting(true);
      if (editingDrive) await onUpdateDrive(editingDrive._id, formData);
      else await onCreateDrive(formData);
      setIsModalOpen(false);
    } catch (err) { setFormError(err.response?.data?.message || 'Failed to save drive.'); }
    finally { setSubmitting(false); }
  };

  return (
    <div className="tpo-drives-manager-wrapper">
      <div className="tpo-filter-card">
        <div className="tpo-filter-top-row">
          <div className="filter-tabs-group">
            <button type="button" className={`filter-tab-btn ${activeTab === 'all' ? 'filter-tab-active' : ''}`} onClick={() => setActiveTab('all')}>All <span className="tab-count">{drives.length}</span></button>
            <button type="button" className={`filter-tab-btn ${activeTab === 'active' ? 'filter-tab-active' : ''}`} onClick={() => setActiveTab('active')}>Active <span className="tab-count tab-count-emerald">{drives.filter((d) => d.status === 'active').length}</span></button>
            <button type="button" className={`filter-tab-btn ${activeTab === 'upcoming' ? 'filter-tab-active' : ''}`} onClick={() => setActiveTab('upcoming')}>Upcoming <span className="tab-count">{drives.filter((d) => d.status === 'upcoming').length}</span></button>
          </div>
          <Button variant="primary" size="md" onClick={handleOpenCreate} icon={<Plus size={16} />}>Create Placement Drive</Button>
        </div>
      </div>

      <div className="tpo-drives-grid">
        {filtered.length > 0 ? (
          filtered.map((drive) => <DriveCard key={drive._id} drive={drive} onOpenEdit={handleOpenEdit} onCancelDrive={onCancelDrive} />)
        ) : (
          <div className="empty-panel-state" style={{ padding: '3rem' }}><Calendar size={44} className="text-emerald" /><h4>No placement drives found</h4></div>
        )}
      </div>

      <DriveModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} editingDrive={editingDrive} formData={formData} setFormData={setFormData} onSubmit={handleSubmit} formError={formError} submitting={submitting} companies={companies} />
    </div>
  );
};

export default PlacementDriveManagement;
