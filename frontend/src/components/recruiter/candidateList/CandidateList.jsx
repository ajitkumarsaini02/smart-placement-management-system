import React, { useState, useEffect } from 'react';
import recruiterService from '../../../services/recruiterService';
import mockStore from '../../../data/mockStore';
import Loader from '../../common/Loader';
import CandidateProfile from '../candidateProfile/CandidateProfile';
import CandidateFiltersBar from './CandidateFiltersBar';
import ScheduleInterviewModal from './ScheduleInterviewModal';
import CandidateTableRow from './CandidateTableRow';
import { Users, CheckCircle, AlertCircle } from 'lucide-react';

const CandidateList = ({ preselectedJobId = null }) => {
  const [candidates, setCandidates] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [search, setSearch] = useState('');
  const [selectedJob, setSelectedJob] = useState(preselectedJobId || 'all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [departmentFilter, setDepartmentFilter] = useState('all');
  const [minCgpa, setMinCgpa] = useState('');
  const [activeCandidate, setActiveCandidate] = useState(null);
  const [interviewModalTarget, setInterviewModalTarget] = useState(null);
  const [interviewForm, setInterviewForm] = useState({ scheduledAt: '', roundName: 'Technical Round 1', mode: 'Online', meetingLink: '', instructions: '' });

  const fetchCandidatesAndJobs = async () => {
    try {
      setLoading(true);
      const params = {};
      if (search) params.search = search;
      if (selectedJob !== 'all') params.jobId = selectedJob;
      if (statusFilter !== 'all') params.status = statusFilter;
      if (departmentFilter !== 'all') params.department = departmentFilter;
      if (minCgpa) params.minCGPA = minCgpa;
      const [cRes, jRes] = await Promise.all([recruiterService.getCandidates(params), recruiterService.getJobs()]);
      const rawCands = Array.isArray(cRes?.data) ? cRes.data : Array.isArray(cRes?.candidates) ? cRes.candidates : Array.isArray(cRes) ? cRes : mockStore.getApplications();
      const rawJobs = Array.isArray(jRes?.data) ? jRes.data : Array.isArray(jRes?.jobs) ? jRes.jobs : Array.isArray(jRes) ? jRes : mockStore.getJobs();
      setCandidates(rawCands);
      setJobs(rawJobs);
    } catch {
      setCandidates(mockStore.getApplications());
      setJobs(mockStore.getJobs());
    } finally { setLoading(false); }
  };

  useEffect(() => { fetchCandidatesAndJobs(); }, [selectedJob, statusFilter, departmentFilter]);

  const handleUpdateStatus = async (appId, status, notes = '') => {
    try {
      setActionLoading(true);
      await recruiterService.updateCandidateStatus(appId, status, notes);
      setSuccessMsg(`Candidate marked as ${status.replace('_', ' ')}`);
      if (activeCandidate?._id === appId) setActiveCandidate((p) => ({ ...p, status }));
      await fetchCandidatesAndJobs();
      setTimeout(() => setSuccessMsg(''), 4000);
    } catch (err) { setErrorMsg(err.message || 'Failed status update'); } finally { setActionLoading(false); }
  };

  const handleScheduleSubmit = async (e) => {
    e.preventDefault();
    if (!interviewForm.scheduledAt) return setErrorMsg('Interview date is required');
    try {
      setActionLoading(true);
      await recruiterService.scheduleInterview(interviewModalTarget._id, interviewForm);
      setSuccessMsg('Interview scheduled successfully!');
      setInterviewModalTarget(null);
      if (activeCandidate) setActiveCandidate(null);
      await fetchCandidatesAndJobs();
      setTimeout(() => setSuccessMsg(''), 4000);
    } catch (err) { setErrorMsg(err.message || 'Schedule failed'); } finally { setActionLoading(false); }
  };

  const safeCandidates = Array.isArray(candidates) ? candidates : [];

  return (
    <div className="candidate-list-wrapper">
      <CandidateFiltersBar search={search} setSearch={setSearch} selectedJob={selectedJob} setSelectedJob={setSelectedJob} jobs={jobs} statusFilter={statusFilter} setStatusFilter={setStatusFilter} departmentFilter={departmentFilter} setDepartmentFilter={setDepartmentFilter} minCgpa={minCgpa} setMinCgpa={setMinCgpa} onSubmit={(e) => { e.preventDefault(); fetchCandidatesAndJobs(); }} />
      {successMsg && <div className="alert-success"><CheckCircle size={16} /> <span>{successMsg}</span></div>}
      {errorMsg && <div className="alert-danger"><AlertCircle size={16} /> <span>{errorMsg}</span></div>}
      {loading ? <Loader text="Loading applicants..." /> : safeCandidates.length === 0 ? (
        <div className="empty-state-box"><Users size={40} className="empty-icon text-muted" /><h3>No Applicants</h3></div>
      ) : (
        <div className="table-responsive-wrapper">
          <table className="data-table">
            <thead><tr><th>Candidate</th><th>Applied Role</th><th>Department</th><th>CGPA</th><th>Backlogs</th><th>Stage</th><th>Actions</th></tr></thead>
            <tbody>{safeCandidates.map((app) => <CandidateTableRow key={app._id} app={app} onSelect={setActiveCandidate} onUpdateStatus={handleUpdateStatus} onScheduleInterview={setInterviewModalTarget} actionLoading={actionLoading} />)}</tbody>
          </table>
        </div>
      )}
      {activeCandidate && <CandidateProfile application={activeCandidate} onClose={() => setActiveCandidate(null)} onUpdateStatus={handleUpdateStatus} onScheduleInterview={setInterviewModalTarget} />}
      <ScheduleInterviewModal target={interviewModalTarget} form={interviewForm} onChange={(k, v) => setInterviewForm((p) => ({ ...p, [k]: v }))} onSubmit={handleScheduleSubmit} onCancel={() => setInterviewModalTarget(null)} loading={actionLoading} />
    </div>
  );
};
export default CandidateList;
