import React from 'react';
import TPOAnalyticsMetrics from './TPOAnalyticsMetrics';
import TPOBranchTable from './TPOBranchTable';
import TPOLeaderboardFunnel from './TPOLeaderboardFunnel';

const TPOAnalytics = ({ analyticsData }) => {
  if (!analyticsData) {
    return <div className="empty-panel-state">No analytics data available.</div>;
  }

  const { overview = {}, branchWiseStats = [], statusDistribution = [], topCompanies = [] } = analyticsData;

  return (
    <div className="tpo-analytics-wrapper">
      <TPOAnalyticsMetrics overview={overview} />
      <TPOBranchTable branchWiseStats={branchWiseStats} />
      <TPOLeaderboardFunnel
        statusDistribution={statusDistribution}
        topCompanies={topCompanies}
        totalApplications={overview.totalApplications || 0}
      />
    </div>
  );
};

export default TPOAnalytics;
