import React, { useState, useEffect } from 'react';
import useAuth from '../../../hooks/useAuth';
import api from '../../../services/api';
import { mockStore } from '../../../data/mockStore';
import StudentLayout from '../../../components/student/layout/StudentLayout';
import Loader from '../../../components/common/Loader';
import StudentProfileBanner from './StudentProfileBanner';
import StudentStatsGrid from './StudentStatsGrid';
import StudentRecommendedJobs from './StudentRecommendedJobs';
import StudentUpcomingDrives from './StudentUpcomingDrives';
import StudentProfileSummaryCard from './StudentProfileSummaryCard';
import StudentRecentNotifications from './StudentRecentNotifications';

const getFallbackData = () => {
  const std = mockStore.getStudent();
  const apps = mockStore.getApplications();
  const jobs = mockStore.getJobs();
  return {
    student: std,
    metrics: { profileCompletion: 85, appliedCount: apps.length, shortlistedCount: 1, interviewsCount: 1, offersCount: 1 },
    eligibleJobs: jobs.slice(0, 4),
    upcomingDrives: mockStore.getDrives().slice(0, 3),
    recentNotifications: mockStore.getNotifications().slice(0, 5),
  };
};

const StudentDashboard = () => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [dashboardData, setDashboardData] = useState(null);

  const fetchDashboard = async () => {
    try {
      setLoading(true);
      const res = await api.get('/student/dashboard');
      if (res.data?.data?.student || res.data?.data?.metrics) {
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

  const markNotificationRead = async (notifId) => {
    try {
      await api.put(`/student/notifications/${notifId}/read`);
      setDashboardData((prev) => !prev ? prev : {
        ...prev,
        recentNotifications: prev.recentNotifications.map((n) => n._id === notifId ? { ...n, isRead: true } : n),
      });
    } catch {}
  };

  if (loading) {
    return (
      <StudentLayout pageTitle="Student Dashboard">
        <div className="dashboard-loading-state"><Loader size="lg" text="Loading your placement dashboard..." /></div>
      </StudentLayout>
    );
  }

  const data = dashboardData || getFallbackData();
  const { student, metrics = {}, upcomingDrives = [], recentNotifications = [], eligibleJobs = [] } = data;

  return (
    <StudentLayout
      pageTitle={`Welcome back, ${user?.name || student?.user?.name || 'Student'} 👋`}
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
          <StudentProfileSummaryCard user={user || student?.user} student={student} />
          <StudentRecentNotifications recentNotifications={recentNotifications} onMarkRead={markNotificationRead} />
        </div>
      </div>
    </StudentLayout>
  );
};

export default StudentDashboard;
