import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../../services/api';
import TPOLayout from '../../../components/tpo/layout/TPOLayout';
import Loader from '../../../components/common/Loader';
import Button from '../../../components/common/Button';
import TPOStatsGrid from './TPOStatsGrid';
import TPORecentAppsTable from './TPORecentAppsTable';
import TPODrivesList from './TPODrivesList';
import TPOSummarySide from './TPOSummarySide';
import { AlertCircle, Plus } from 'lucide-react';

const TPODashboard = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [dashboardData, setDashboardData] = useState(null);

  const fetchDashboard = async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await api.get('/tpo/dashboard');
      if (res.data?.success) setDashboardData(res.data.data);
    } catch (err) { setError(err.response?.data?.message || 'Failed to load TPO dashboard.'); }
    finally { setLoading(false); }
  };

  useEffect(() => { fetchDashboard(); }, []);

  if (loading) return <TPOLayout pageTitle="TPO Dashboard"><div className="dashboard-loading-state"><Loader size="lg" text="Loading placement statistics..." /></div></TPOLayout>;
  if (error || !dashboardData) {
    return (
      <TPOLayout pageTitle="TPO Dashboard">
        <div className="dashboard-error-state"><AlertCircle size={36} className="text-amber" /><h3>Unable to load TPO Dashboard</h3><p>{error}</p><Button variant="primary" size="sm" onClick={fetchDashboard}>Retry</Button></div>
      </TPOLayout>
    );
  }

  const { statistics = {}, recentApplications = [], recentDrives = [], recentStudents = [] } = dashboardData;

  return (
    <TPOLayout
      pageTitle="Campus Placement Cell — Executive Overview"
      pageSubtitle="Institutional command center to monitor drives, student eligibility, and hiring outcomes."
      actionButton={<Link to="/tpo/drives" className="btn btn-primary btn-sm"><Plus size={16} /> New Placement Drive</Link>}
    >
      <TPOStatsGrid statistics={statistics} />
      <div className="dashboard-layout-columns">
        <div className="dashboard-column-main">
          <TPORecentAppsTable recentApplications={recentApplications} />
          <TPODrivesList recentDrives={recentDrives} />
        </div>
        <TPOSummarySide statistics={statistics} recentStudents={recentStudents} />
      </div>
    </TPOLayout>
  );
};

export default TPODashboard;
