import React, { useState, useEffect } from 'react';
import recruiterService from '../../../services/recruiterService';
import mockStore from '../../../data/mockStore';
import Button from '../../common/Button';
import Loader from '../../common/Loader';
import JobForm from '../jobForm/JobForm';
import JobManagementCard from './JobManagementCard';
import { Briefcase, Plus, CheckCircle, AlertCircle, Search, Filter } from 'lucide-react';

const JobManagement = ({ onViewCandidates }) => {
  const [jobs, setJobs] = useState([]);
  const [companyVerified, setCompanyVerified] = useState(false);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [actionLoading, setActionLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [editingJob, setEditingJob] = useState(null);

  const fetchJobs = async () => {
    try {
      setLoading(true);
      const [jRes, pRes] = await Promise.all([
        recruiterService.getJobs({ search, status: statusFilter !== 'all' ? statusFilter : undefined }),
        recruiterService.getCompanyProfile(),
      ]);
      const raw = Array.isArray(jRes?.data) ? jRes.data : Array.isArray(jRes?.jobs) ? jRes.jobs : Array.isArray(jRes) ? jRes : mockStore.getJobs();
      setJobs(raw);
      setCompanyVerified(!!(pRes?.data?.isVerified ?? pRes?.isVerified ?? true));
    } catch {
      setJobs(mockStore.getJobs());
    } finally { setLoading(false); }
  };

  useEffect(() => { fetchJobs(); }, [statusFilter]);

  const handleCreateOrUpdateJob = async (payload) => {
    try {
      setActionLoading(true);
      if (editingJob) await recruiterService.updateJob(editingJob._id, payload);
      else await recruiterService.createJob(payload);
      setSuccessMsg('Job opening saved successfully');
      setShowModal(false); setEditingJob(null);
      await fetchJobs();
      setTimeout(() => setSuccessMsg(''), 4000);
    } catch (err) { setErrorMsg(err.message || 'Failed to save job'); } finally { setActionLoading(false); }
  };

  const handlePublish = async (id) => {
    try {
      setActionLoading(true);
      await recruiterService.publishJob(id);
      setSuccessMsg('Job published live!');
      await fetchJobs();
      setTimeout(() => setSuccessMsg(''), 4000);
    } catch (err) { setErrorMsg(err.message || 'Publish failed'); } finally { setActionLoading(false); }
  };

  const handleClose = async (id) => {
    if (!window.confirm('Close this job?')) return;
    try { setActionLoading(true); await recruiterService.closeJob(id); await fetchJobs(); }
    catch (err) { setErrorMsg(err.message || 'Close failed'); } finally { setActionLoading(false); }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this draft?')) return;
    try { setActionLoading(true); await recruiterService.deleteJob(id); await fetchJobs(); }
    catch (err) { setErrorMsg(err.message || 'Delete failed'); } finally { setActionLoading(false); }
  };

  const safeJobs = Array.isArray(jobs) ? jobs : [];

  return (
    <div className="job-management-container">
      <div className="recruiter-controls-card">
        <form onSubmit={(e) => { e.preventDefault(); fetchJobs(); }} className="search-filter-row">
          <div className="search-input-box"><Search size={16} className="search-icon" /><input type="text" className="search-field" placeholder="Search jobs..." value={search} onChange={(e) => setSearch(e.target.value)} /></div>
          <div className="filter-select-box"><Filter size={16} className="filter-icon" /><select className="filter-select" value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}><option value="all">All</option><option value="open">Active</option><option value="draft">Drafts</option><option value="closed">Closed</option></select></div>
          <Button type="button" variant="primary" size="md" icon={<Plus size={16} />} onClick={() => { setEditingJob(null); setShowModal(true); }}>Post Job</Button>
        </form>
      </div>
      {successMsg && <div className="alert-success"><CheckCircle size={16} /> <span>{successMsg}</span></div>}
      {errorMsg && <div className="alert-danger"><AlertCircle size={16} /> <span>{errorMsg}</span></div>}
      {loading ? <Loader text="Loading job postings..." /> : safeJobs.length === 0 ? (
        <div className="empty-state-box"><Briefcase size={40} className="empty-icon text-muted" /><h3>No Job Openings</h3></div>
      ) : (
        <div className="jobs-card-grid">
          {safeJobs.map((job) => <JobManagementCard key={job._id} job={job} onViewCandidates={onViewCandidates} companyVerified={companyVerified} actionLoading={actionLoading} onPublish={handlePublish} onClose={handleClose} onEdit={(j) => { setEditingJob(j); setShowModal(true); }} onDelete={handleDelete} />)}
        </div>
      )}
      {showModal && (
        <div className="modal-backdrop">
          <div className="modal-container modal-lg">
            <div className="modal-header"><h3>{editingJob ? 'Edit Job' : 'Post Job'}</h3><button type="button" className="modal-close-btn" onClick={() => { setShowModal(false); setEditingJob(null); }}>✕</button></div>
            <div className="modal-body"><JobForm initialData={editingJob} isVerified={companyVerified} onSave={handleCreateOrUpdateJob} onCancel={() => { setShowModal(false); setEditingJob(null); }} /></div>
          </div>
        </div>
      )}
    </div>
  );
};
export default JobManagement;
