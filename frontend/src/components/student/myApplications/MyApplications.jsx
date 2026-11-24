import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ApplicationCard from '../applicationCard/ApplicationCard';
import MyApplicationsToolbar from './MyApplicationsToolbar';
import { FileText, Compass } from 'lucide-react';

const MyApplications = ({ applications = [] }) => {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = applications.filter((app) => {
    if (activeTab === 'in_progress' && app.status !== 'applied' && app.status !== 'under_review') return false;
    if (activeTab === 'shortlisted' && app.status !== 'shortlisted' && app.status !== 'interview_scheduled') return false;
    if (activeTab === 'selected' && app.status !== 'selected') return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      return app.job?.title?.toLowerCase().includes(q) || app.company?.name?.toLowerCase().includes(q);
    }
    return true;
  });

  const counts = {
    total: applications.length,
    inProgress: applications.filter((a) => a.status === 'applied' || a.status === 'under_review').length,
    shortlisted: applications.filter((a) => a.status === 'shortlisted' || a.status === 'interview_scheduled').length,
    selected: applications.filter((a) => a.status === 'selected').length,
  };

  return (
    <div className="my-applications-wrapper">
      <MyApplicationsToolbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        counts={counts}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      <div className="applications-list-grid">
        {filtered.length > 0 ? (
          filtered.map((app) => <ApplicationCard key={app._id} application={app} />)
        ) : (
          <div className="empty-applications-card">
            <div className="empty-app-icon"><FileText size={38} /></div>
            <h3 className="empty-app-title">No applications found</h3>
            <p className="empty-app-subtitle">
              {searchQuery ? `No applications matching "${searchQuery}".` : 'You have no applications in this view.'}
            </p>
            <Link to="/student/opportunities" className="btn btn-primary btn-md">
              <Compass size={16} /> Explore Open Opportunities
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyApplications;
