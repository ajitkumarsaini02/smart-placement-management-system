import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import recruiterService from '../../../services/recruiterService';
import RecruiterLayout from '../../../components/recruiter/layout/RecruiterLayout';
import Button from '../../../components/common/Button';
import Loader from '../../../components/common/Loader';
import RecruiterKpiGrid from './RecruiterKpiGrid';
import RecruiterShortcuts from './RecruiterShortcuts';
import { Plus, AlertCircle, Clock, ShieldCheck } from 'lucide-react';

const RecruiterDashboard = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const res = await recruiterService.getDashboard();
        if (res.data) setStats(res.data);
      } catch (err) { setErrorMsg(err.message || 'Failed to fetch metrics'); } finally { setLoading(false); }
    })();
  }, []);

  if (loading) return <RecruiterLayout pageTitle="Recruiter Hiring Dashboard"><Loader text="Loading live metrics..." /></RecruiterLayout>;

  const kpis = stats?.stats || { totalJobs: 0, activeJobs: 0, totalApplicants: 0, shortlisted: 0, interviewsScheduled: 0, selected: 0 };
  const isVerified = !!stats?.company?.isVerified;

  return (
    <RecruiterLayout
      pageTitle="Corporate Hiring Dashboard"
      pageSubtitle={`Welcome to ${stats?.company?.name || 'Recruiter'} Placement Portal`}
      isVerified={isVerified}
      actionButton={<Button variant="primary" size="md" icon={<Plus size={16} />} onClick={() => navigate('/recruiter/jobs')}>Post New Opening</Button>}
    >
      {errorMsg && <div className="alert-danger"><AlertCircle size={16} /> <span>{errorMsg}</span></div>}
      {!isVerified ? (
        <div className="recruiter-alert-banner warning-banner">
          <Clock size={20} className="text-warning" />
          <div className="banner-content">
            <h4 className="banner-title">Account Awaiting TPO Institutional Verification</h4>
            <p className="banner-text">Your company profile has been initialized. Once verified, openings will go live.</p>
          </div>
          <Link to="/recruiter/company" className="btn btn-outline btn-sm">Complete Profile</Link>
        </div>
      ) : (
        <div className="recruiter-alert-banner success-banner">
          <ShieldCheck size={20} className="text-emerald" />
          <div className="banner-content">
            <h4 className="banner-title">Verified Campus Recruitment Partner</h4>
            <p className="banner-text">Your company profile is active and verified. Campus openings are visible to students.</p>
          </div>
        </div>
      )}
      <RecruiterKpiGrid kpis={kpis} />
      <div className="dashboard-columns-2">
        <RecruiterShortcuts />
        <div className="dash-box">
          <h3 className="dash-box-title">Recent Recruitment Activity</h3>
          {stats?.recentActivities?.length > 0 ? (
            <div className="activity-timeline-list">
              {stats.recentActivities.map((act) => (
                <div key={act.id} className="timeline-item">
                  <span className="timeline-dot" /><div className="timeline-content"><p className="timeline-msg">{act.message}</p><span className="timeline-time">{new Date(act.timestamp).toLocaleString()}</span></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="empty-box-inline"><Clock size={28} className="text-muted" /><p>No recent activity yet.</p></div>
          )}
        </div>
      </div>
    </RecruiterLayout>
  );
};
export default RecruiterDashboard;
