import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import StudentLayout from '../../components/student/layout/StudentLayout';
import MyApplications from '../../components/student/myApplications/MyApplications';
import PlacementHistory from '../../components/student/myApplications/PlacementHistory';
import Loader from '../../components/common/Loader';
import { AlertCircle } from 'lucide-react';

const ApplicationHistory = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [applications, setApplications] = useState([]);

  const fetchApplications = async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await api.get('/student/applications');
      if (res.data?.success) {
        setApplications(res.data.data.applications || []);
      }
    } catch (err) {
      console.error('[ApplicationHistory] Error fetching applications:', err);
      setError(err.response?.data?.message || 'Failed to load application history.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApplications();
  }, []);

  if (loading) {
    return (
      <StudentLayout pageTitle="Application History & Tracking">
        <div className="dashboard-loading-state">
          <Loader size="lg" text="Retrieving your submitted applications..." />
        </div>
      </StudentLayout>
    );
  }

  if (error) {
    return (
      <StudentLayout pageTitle="Application History & Tracking">
        <div className="dashboard-error-state">
          <AlertCircle size={36} className="text-amber" />
          <h3>Unable to load applications</h3>
          <p>{error}</p>
        </div>
      </StudentLayout>
    );
  }

  return (
    <StudentLayout
      pageTitle="Application History & Tracking"
      pageSubtitle="Track recruitment stages in real-time, view scheduled interviews, and review your placement performance."
    >
      <div className="history-page-grid">
        <PlacementHistory applications={applications} />
        <MyApplications applications={applications} />
      </div>
    </StudentLayout>
  );
};

export default ApplicationHistory;
