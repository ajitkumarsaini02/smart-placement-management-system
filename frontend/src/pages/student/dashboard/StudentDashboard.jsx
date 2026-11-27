import React, { useState, useEffect } from 'react';
import useAuth from '../../../hooks/useAuth';
import api from '../../../services/api';
import StudentLayout from '../../../components/student/layout/StudentLayout';
import Button from '../../../components/common/Button';
import Loader from '../../../components/common/Loader';
import StudentProfileBanner from './StudentProfileBanner';
import StudentStatsGrid from './StudentStatsGrid';
import StudentRecommendedJobs from './StudentRecommendedJobs';
import StudentUpcomingDrives from './StudentUpcomingDrives';
import StudentProfileSummaryCard from './StudentProfileSummaryCard';
import StudentRecentNotifications from './StudentRecentNotifications';
import { AlertCircle } from 'lucide-react';

const StudentDashboard = () => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [dashboardData, setDashboardData] = useState(null);

  const fetchDashboard = async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await api.get('/student/dashboard');
      if (res.data?.success) setDashboardData(res.data.data);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to load dashboard metrics.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchDashboard(); }, []);

  const markNotificationRead = async (notifId) => {
    try {
      await api.put(`/student/notifications/${notifId}/read`);
      setDashboardData((prev) => !prev ? prev : {
        ...prev,
        recentNotifications: prev.recentNotifications.map((n) => n._id === notifId ? { ...n, isRead: true } : n),
      });
    } catch (err) {
      console.error('Failed to mark read:', err);
    }
  };

  if (loading) {
    return (
      <StudentLayout pageTitle="Student Dashboard">
        <div className="dashboard-loading-state"><Loader size="lg" text="Loading your placement dashboard..." /></div>
      </StudentLayout>
    );
  }

  if (error || !dashboardData) {
    return (
      <StudentLayout pageTitle="Student Dashboard">
        <div className="dashboard-error-state">
          <AlertCircle size={36} className="text-amber" />
          <h3>Unable to load dashboard</h3>
          <p>{error || 'An unexpected error occurred while fetching your data.'}</p>
          <Button variant="primary" size="sm" onClick={fetchDashboard}>Retry Now</Button>
        </div>
      </StudentLayout>
    );
  }

  const { student, metrics = {}, upcomingDrives = [], recentNotifications = [], eligibleJobs = [] } = dashboardData;

  return (
    <StudentLayout
      pageTitle={`Welcome back, ${user?.name || 'Student'} 👋`}
      pageSubtitle="Track your recruitment progress, explore campus opportunities, and stay interview-ready."
    >
      <StudentProfileBanner student={student} profileCompletion={metrics.profileCompletion || 0} />
      <StudentStatsGrid metrics={metrics} />

      <div className="dashboard-layout-columns">
        <div className="dashboard-column-main">
          <StudentRecommendedJobs eligibleJobs={eligibleJobs} />
          <StudentUpcomingDrives upcomingDrives={upcomingDrives} />
        </div>
        <div className="dashboard-column-side">
          <StudentProfileSummaryCard user={user} student={student} />
          <StudentRecentNotifications recentNotifications={recentNotifications} onMarkRead={markNotificationRead} />
        </div>
      </div>
    </StudentLayout>
  );
};

export default StudentDashboard;
