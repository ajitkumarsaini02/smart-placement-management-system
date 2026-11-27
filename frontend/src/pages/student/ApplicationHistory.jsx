import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import mockStore from '../../data/mockStore';
import StudentLayout from '../../components/student/layout/StudentLayout';
import MyApplications from '../../components/student/myApplications/MyApplications';
import PlacementHistory from '../../components/student/myApplications/PlacementHistory';
import Loader from '../../components/common/Loader';

const ApplicationHistory = () => {
  const [loading, setLoading] = useState(true);
  const [applications, setApplications] = useState([]);
  const [activeTab, setActiveTab] = useState('applications');

  const fetchApplications = async () => {
    try {
      setLoading(true);
      const res = await api.get('/student/applications');
      const raw = Array.isArray(res.data?.data) ? res.data.data : Array.isArray(res.data?.data?.applications) ? res.data.data.applications : Array.isArray(res.data?.applications) ? res.data.applications : mockStore.getApplications();
      setApplications(raw);
    } catch {
      setApplications(mockStore.getApplications());
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchApplications(); }, []);

  if (loading) return <StudentLayout pageTitle="Application History & Tracking"><div className="dashboard-loading-state"><Loader size="lg" text="Retrieving submitted applications..." /></div></StudentLayout>;

  return (
    <StudentLayout pageTitle="Application History & Tracking" pageSubtitle="Track your application progress through each stage of the campus recruitment lifecycle.">
      <div className="student-tab-controls">
        <button type="button" className={`tab-btn ${activeTab === 'applications' ? 'tab-btn-active' : ''}`} onClick={() => setActiveTab('applications')}>
          Active Applications ({applications.length})
        </button>
        <button type="button" className={`tab-btn ${activeTab === 'history' ? 'tab-btn-active' : ''}`} onClick={() => setActiveTab('history')}>
          Placement Records
        </button>
      </div>
      <div className="tab-pane-container">{activeTab === 'applications' ? <MyApplications applications={applications} /> : <PlacementHistory applications={applications} />}</div>
    </StudentLayout>
  );
};

export default ApplicationHistory;
