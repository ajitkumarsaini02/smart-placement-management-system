import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import TPOLayout from '../../components/tpo/layout/TPOLayout';
import ApplicationManagement from '../../components/tpo/applicationManagement/ApplicationManagement';
import Loader from '../../components/common/Loader';
import { AlertCircle } from 'lucide-react';

const Applications = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [applications, setApplications] = useState([]);
  const [companies, setCompanies] = useState([]);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      const [appRes, compRes] = await Promise.all([
        api.get('/tpo/applications'),
        api.get('/tpo/companies'),
      ]);

      if (appRes.data?.success) {
        setApplications(appRes.data.data || []);
      }
      if (compRes.data?.success) {
        setCompanies(compRes.data.data || []);
      }
    } catch (err) {
      console.error('[Applications] Error fetching applications:', err);
      setError(err.response?.data?.message || 'Failed to load candidate applications.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleUpdateStatus = async (appId, status, notes, feedback) => {
    const res = await api.put(`/tpo/applications/${appId}/status`, {
      status,
      notes,
      feedback,
    });

    if (res.data?.success) {
      setApplications((prev) =>
        prev.map((a) => (a._id === appId ? { ...a, ...res.data.data } : a))
      );
    }
  };

  if (loading) {
    return (
      <TPOLayout pageTitle="Application Pipeline & Candidate Tracking">
        <div className="dashboard-loading-state">
          <Loader size="lg" text="Loading applications database..." />
        </div>
      </TPOLayout>
    );
  }

  if (error) {
    return (
      <TPOLayout pageTitle="Application Pipeline & Candidate Tracking">
        <div className="dashboard-error-state">
          <AlertCircle size={36} className="text-amber" />
          <h3>Unable to load applications</h3>
          <p>{error}</p>
        </div>
      </TPOLayout>
    );
  }

  return (
    <TPOLayout
      pageTitle="Application Pipeline & Candidate Tracking"
      pageSubtitle="Review candidate submissions, update recruitment interview stages, log feedback, and record verified job offers."
    >
      <ApplicationManagement
        applications={applications}
        companies={companies}
        onUpdateStatus={handleUpdateStatus}
      />
    </TPOLayout>
  );
};

export default Applications;
