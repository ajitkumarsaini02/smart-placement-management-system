import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import mockStore from '../../data/mockStore';
import TPOLayout from '../../components/tpo/layout/TPOLayout';
import ApplicationManagement from '../../components/tpo/applicationManagement/ApplicationManagement';
import Loader from '../../components/common/Loader';

const Applications = () => {
  const [loading, setLoading] = useState(true);
  const [applications, setApplications] = useState([]);
  const [companies, setCompanies] = useState([]);

  const fetchData = async () => {
    try {
      setLoading(true);
      const [appRes, compRes] = await Promise.all([
        api.get('/tpo/applications'),
        api.get('/tpo/companies'),
      ]);
      const rawApps = Array.isArray(appRes.data?.data) ? appRes.data.data : Array.isArray(appRes.data?.applications) ? appRes.data.applications : mockStore.getApplications();
      const rawComps = Array.isArray(compRes.data?.data) ? compRes.data.data : Array.isArray(compRes.data?.companies) ? compRes.data.companies : mockStore.getCompanies();
      setApplications(rawApps);
      setCompanies(rawComps);
    } catch {
      setApplications(mockStore.getApplications());
      setCompanies(mockStore.getCompanies());
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchData(); }, []);

  const handleUpdateStatus = async (appId, status, notes, feedback) => {
    try {
      const res = await api.put(`/tpo/applications/${appId}/status`, { status, notes, feedback });
      const updated = res.data?.data || { status, notes, feedback };
      setApplications((prev) => prev.map((a) => (a._id === appId ? { ...a, ...updated } : a)));
    } catch {
      setApplications((prev) => prev.map((a) => (a._id === appId ? { ...a, status, notes, feedback } : a)));
    }
  };

  if (loading) return <TPOLayout pageTitle="Application Pipeline & Candidate Tracking"><div className="dashboard-loading-state"><Loader size="lg" text="Loading applications..." /></div></TPOLayout>;

  return (
    <TPOLayout pageTitle="Application Pipeline & Candidate Tracking" pageSubtitle="Campus placement application pool with end-to-end recruitment lifecycle status management.">
      <ApplicationManagement applications={applications} companies={companies} onUpdateStatus={handleUpdateStatus} />
    </TPOLayout>
  );
};

export default Applications;
