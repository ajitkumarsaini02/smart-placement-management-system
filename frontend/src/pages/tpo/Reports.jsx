import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import TPOLayout from '../../components/tpo/layout/TPOLayout';
import TPOAnalytics from '../../components/tpo/analytics/TPOAnalytics';
import PlacementReports from '../../components/tpo/placementReports/PlacementReports';
import Loader from '../../components/common/Loader';
import { AlertCircle, BarChart3, FileSpreadsheet } from 'lucide-react';

const Reports = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [analyticsData, setAnalyticsData] = useState(null);
  const [activeTab, setActiveTab] = useState('analytics'); // 'analytics' | 'reports'

  const fetchAnalytics = async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await api.get('/tpo/analytics');
      if (res.data?.success) {
        setAnalyticsData(res.data.data);
      }
    } catch (err) {
      console.error('[Reports] Error fetching analytics:', err);
      setError(err.response?.data?.message || 'Failed to load placement analytics.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAnalytics();
  }, []);

  if (loading) {
    return (
      <TPOLayout pageTitle="Institutional Reports & Placement Analytics">
        <div className="dashboard-loading-state">
          <Loader size="lg" text="Aggregating placement data records..." />
        </div>
      </TPOLayout>
    );
  }

  if (error || !analyticsData) {
    return (
      <TPOLayout pageTitle="Institutional Reports & Placement Analytics">
        <div className="dashboard-error-state">
          <AlertCircle size={36} className="text-amber" />
          <h3>Unable to load analytics</h3>
          <p>{error || 'An unexpected error occurred while fetching reports.'}</p>
        </div>
      </TPOLayout>
    );
  }

  return (
    <TPOLayout
      pageTitle="Institutional Placement Analytics & CSV Reports"
      pageSubtitle="Audited statistical reporting based on verified candidate records and corporate recruitment outcomes."
    >
      {/* Top Section View Tabs */}
      <div className="tpo-view-toggle-bar">
        <button
          type="button"
          className={`tpo-view-tab-btn ${activeTab === 'analytics' ? 'view-tab-active' : ''}`}
          onClick={() => setActiveTab('analytics')}
        >
          <BarChart3 size={17} /> Live Institutional Analytics
        </button>
        <button
          type="button"
          className={`tpo-view-tab-btn ${activeTab === 'reports' ? 'view-tab-active' : ''}`}
          onClick={() => setActiveTab('reports')}
        >
          <FileSpreadsheet size={17} /> Export Official Reports (CSV)
        </button>
      </div>

      {/* Render Active View */}
      {activeTab === 'analytics' ? (
        <TPOAnalytics analyticsData={analyticsData} />
      ) : (
        <PlacementReports />
      )}
    </TPOLayout>
  );
};

export default Reports;
