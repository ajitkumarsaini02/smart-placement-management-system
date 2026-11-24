import React, { useState } from 'react';
import Badge from '../../common/Badge';
import ApplicationFilterToolbar from './ApplicationFilterToolbar';
import ApplicationStatusModal from './ApplicationStatusModal';
import { FileCheck } from 'lucide-react';

const getStatusBadge = (st) => {
  switch (st) {
    case 'offered':
    case 'offer_accepted': return <Badge variant="emerald" size="sm">Offered 🏆</Badge>;
    case 'interview_scheduled': return <Badge variant="mint" size="sm">Interview 📅</Badge>;
    case 'shortlisted':
    case 'assessment_cleared': return <Badge variant="emerald" size="sm">Shortlisted ⭐</Badge>;
    case 'rejected': return <Badge variant="outline" size="sm">Not Selected</Badge>;
    default: return <Badge variant="default" size="sm">Applied</Badge>;
  }
};

const ApplicationManagement = ({ applications = [], companies = [], onUpdateStatus }) => {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCompanyId, setSelectedCompanyId] = useState('');
  const [activeApp, setActiveApp] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState('');
  const [statusNotes, setStatusNotes] = useState('');
  const [feedback, setFeedback] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');

  const filtered = applications.filter((app) => {
    if (activeTab === 'shortlisted' && app.status !== 'shortlisted' && app.status !== 'assessment_cleared') return false;
    if (activeTab === 'interview' && app.status !== 'interview_scheduled') return false;
    if (activeTab === 'offered' && app.status !== 'offered' && app.status !== 'offer_accepted') return false;
    if (activeTab === 'rejected' && app.status !== 'rejected') return false;
    if (activeTab !== 'all' && activeTab !== 'shortlisted' && activeTab !== 'interview' && activeTab !== 'offered' && activeTab !== 'rejected' && app.status !== activeTab) return false;
    if (selectedCompanyId && String(app.job?.company?._id || app.job?.company) !== selectedCompanyId) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      return app.student?.user?.name?.toLowerCase().includes(q) || app.student?.rollNumber?.toLowerCase().includes(q) || app.job?.title?.toLowerCase().includes(q) || app.job?.company?.name?.toLowerCase().includes(q);
    }
    return true;
  });

  const handleSaveStatus = async (e) => {
    e.preventDefault();
    if (!activeApp) return;
    try {
      setSubmitting(true);
      await onUpdateStatus(activeApp._id, selectedStatus, statusNotes, feedback);
      setSuccessMsg(`Status updated to ${selectedStatus.replace('_', ' ')}!`);
      setTimeout(() => { setActiveApp(null); setSuccessMsg(''); }, 1200);
    } catch (err) { console.error('Status update failed:', err); }
    finally { setSubmitting(false); }
  };

  return (
    <div className="tpo-applications-manager-wrapper">
      <ApplicationFilterToolbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} selectedCompanyId={selectedCompanyId} setSelectedCompanyId={setSelectedCompanyId} companies={companies} activeTab={activeTab} setActiveTab={setActiveTab} applications={applications} />

      <div className="tpo-table-card">
        {filtered.length > 0 ? (
          <div className="tpo-table-responsive">
            <table className="tpo-data-table">
              <thead><tr><th>Candidate</th><th>Roll No & Dept</th><th>Company & Role</th><th>Package</th><th>Applied</th><th>Status</th><th className="text-right">Actions</th></tr></thead>
              <tbody>
                {filtered.map((app) => (
                  <tr key={app._id}>
                    <td><div className="tpo-table-user-cell"><div className="tpo-user-avatar">{app.student?.user?.name ? app.student.user.name.charAt(0).toUpperCase() : 'S'}</div><div className="tpo-user-names"><span className="tpo-student-name">{app.student?.user?.name}</span><span className="tpo-student-email">CGPA: {app.student?.cgpa || 'N/A'}</span></div></div></td>
                    <td><div className="tpo-dept-cell"><span className="tpo-roll-code">{app.student?.rollNumber || 'N/A'}</span><span className="tpo-branch-sub">{app.student?.department || 'Engineering'}</span></div></td>
                    <td><div className="tpo-dept-cell"><span className="tpo-student-name font-bold">{app.job?.title}</span><span className="tpo-branch-sub">{app.job?.company?.name}</span></div></td>
                    <td><span className="tpo-salary-text">{app.job?.packageLPA ? `₹ ${app.job.packageLPA} LPA` : 'Competitive'}</span></td>
                    <td><span className="tpo-date-cell">{new Date(app.createdAt).toLocaleDateString()}</span></td>
                    <td>{getStatusBadge(app.status)}</td>
                    <td className="text-right"><button type="button" className="btn btn-outline btn-sm" onClick={() => { setActiveApp(app); setSelectedStatus(app.status || 'applied'); setStatusNotes(''); setFeedback(app.feedback || ''); setSuccessMsg(''); }}>Update</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="tpo-empty-table-state"><FileCheck size={40} className="empty-icon" /><h4>No applications match filter</h4></div>
        )}
      </div>

      <ApplicationStatusModal activeApp={activeApp} onClose={() => setActiveApp(null)} selectedStatus={selectedStatus} setSelectedStatus={setSelectedStatus} statusNotes={statusNotes} setStatusNotes={setStatusNotes} feedback={feedback} setFeedback={setFeedback} onSave={handleSaveStatus} submitting={submitting} successMsg={successMsg} />
    </div>
  );
};

export default ApplicationManagement;
