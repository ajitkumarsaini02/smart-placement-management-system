import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import StudentLayout from '../../components/student/layout/StudentLayout';
import EligibleJobs from '../../components/student/eligibleJobs/EligibleJobs';
import Loader from '../../components/common/Loader';
import { AlertCircle } from 'lucide-react';

const Opportunities = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [hasResume, setHasResume] = useState(false);
  const [applyingJobId, setApplyingJobId] = useState(null);
  const [successMsg, setSuccessMsg] = useState('');
  const [actionErrorMsg, setActionErrorMsg] = useState('');

  const fetchJobs = async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await api.get('/student/jobs');
      if (res.data?.success) {
        setJobs(res.data.data.jobs || []);
        setHasResume(res.data.data.hasResume || false);
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to load recruitment opportunities.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchJobs(); }, []);

  const handleApply = async (jobId) => {
    setSuccessMsg('');
    setActionErrorMsg('');
    if (!hasResume) {
      setActionErrorMsg('You must upload a PDF resume in your Profile before applying to jobs.');
      return;
    }
    try {
      setApplyingJobId(jobId);
      const res = await api.post(`/student/apply/${jobId}`);
      if (res.data?.success) {
        setSuccessMsg(res.data.message || 'Application submitted successfully!');
        setJobs((prev) => prev.map((j) => (j._id === jobId ? { ...j, hasApplied: true, applicationStatus: 'applied' } : j)));
        setTimeout(() => setSuccessMsg(''), 6000);
      }
    } catch (err) {
      setActionErrorMsg(err.response?.data?.message || 'Failed to submit application.');
      setTimeout(() => setActionErrorMsg(''), 6000);
    } finally {
      setApplyingJobId(null);
    }
  };

  if (loading) {
    return (
      <StudentLayout pageTitle="Placement Opportunities">
        <div className="dashboard-loading-state"><Loader size="lg" text="Loading active campus opportunities..." /></div>
      </StudentLayout>
    );
  }

  if (error) {
    return (
      <StudentLayout pageTitle="Placement Opportunities">
        <div className="dashboard-error-state"><AlertCircle size={36} className="text-amber" /><h3>Unable to load opportunities</h3><p>{error}</p></div>
      </StudentLayout>
    );
  }

  return (
    <StudentLayout pageTitle="Placement Opportunities" pageSubtitle="Browse active campus job postings and check eligibility cutoffs.">
      <EligibleJobs jobs={jobs} hasResume={hasResume} onApply={handleApply} applyingJobId={applyingJobId} applicationSuccessMsg={successMsg} applicationErrorMsg={actionErrorMsg} />
    </StudentLayout>
  );
};

export default Opportunities;
