import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../../services/api';
import { mockStore } from '../../../data/mockStore';
import TPOLayout from '../../../components/tpo/layout/TPOLayout';
import Loader from '../../../components/common/Loader';
import TPOStatsGrid from './TPOStatsGrid';
import TPORecentAppsTable from './TPORecentAppsTable';
import TPODrivesList from './TPODrivesList';
import TPOSummarySide from './TPOSummarySide';
import { Plus } from 'lucide-react';

const getFallbackData = () => ({
  statistics: { totalStudents: 450, totalCompanies: 65, activeJobs: 28, campusDrives: 14, totalApplications: 1240, placedStudents: 382, placementRate: 84.8, avgPackage: '7.8 LPA', highestPackage: '44.0 LPA' },
  recentDrives: mockStore.getDrives(),
  recentApplications: mockStore.getApplications().slice(0, 5),
  recentStudents: mockStore.getStudents().slice(0, 5),
});

const TPODashboard = () => {
  const [loading, setLoading] = useState(true);
  const [dashboardData, setDashboardData] = useState(null);

  const fetchDashboard = async () => {
    try {
      setLoading(true);
      const res = await api.get('/tpo/dashboard');
      if (res.data?.data?.statistics) {
        setDashboardData(res.data.data);
      } else {
        setDashboardData(getFallbackData());
      }
    } catch {
      setDashboardData(getFallbackData());
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchDashboard(); }, []);

  if (loading) return <TPOLayout pageTitle="TPO Dashboard"><div className="dashboard-loading-state"><Loader size="lg" text="Loading placement statistics..." /></div></TPOLayout>;

  const data = dashboardData || getFallbackData();
  const { statistics = {}, recentApplications = [], recentDrives = [], recentStudents = [] } = data;

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
