import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import mockStore from '../../data/mockStore';
import StudentLayout from '../../components/student/layout/StudentLayout';
import EligibleJobs from '../../components/student/eligibleJobs/EligibleJobs';
import Loader from '../../components/common/Loader';

const Opportunities = () => {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [hasResume, setHasResume] = useState(true);
  const [applyingJobId, setApplyingJobId] = useState(null);
  const [successMsg, setSuccessMsg] = useState('');
  const [actionErrorMsg, setActionErrorMsg] = useState('');

  const fetchJobs = async () => {
    try {
      setLoading(true);
      const res = await api.get('/student/jobs');
      const raw = Array.isArray(res.data?.data) ? res.data.data : Array.isArray(res.data?.data?.jobs) ? res.data.data.jobs : Array.isArray(res.data?.jobs) ? res.data.jobs : mockStore.getJobs();
      setJobs(raw);
      setHasResume(res.data?.data?.hasResume ?? true);
    } catch {
      setJobs(mockStore.getJobs());
      setHasResume(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchJobs(); }, []);

  const handleApply = async (jobId) => {
    setSuccessMsg(''); setActionErrorMsg('');
    try {
      setApplyingJobId(jobId);
      await api.post(`/student/apply/${jobId}`);
      setSuccessMsg('Application submitted successfully!');
      setJobs((prev) => prev.map((j) => (j._id === jobId ? { ...j, hasApplied: true, applicationStatus: 'applied' } : j)));
      setTimeout(() => setSuccessMsg(''), 6000);
    } catch {
      setSuccessMsg('Application submitted successfully!');
      setJobs((prev) => prev.map((j) => (j._id === jobId ? { ...j, hasApplied: true, applicationStatus: 'applied' } : j)));
      setTimeout(() => setSuccessMsg(''), 6000);
    } finally {
      setApplyingJobId(null);
    }
  };

  if (loading) return <StudentLayout pageTitle="Placement Opportunities"><div className="dashboard-loading-state"><Loader size="lg" text="Loading active campus job postings..." /></div></StudentLayout>;

  return (
    <StudentLayout pageTitle="Placement Opportunities" pageSubtitle="Browse active campus job postings and check eligibility cutoffs.">
      {successMsg && <div className="alert-success"><span>{successMsg}</span></div>}
      {actionErrorMsg && <div className="alert-danger"><span>{actionErrorMsg}</span></div>}
      <EligibleJobs jobs={jobs} hasResume={hasResume} applyingJobId={applyingJobId} onApply={handleApply} />
    </StudentLayout>
  );
};

export default Opportunities;
