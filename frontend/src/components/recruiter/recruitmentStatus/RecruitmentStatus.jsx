import React, { useState, useEffect } from 'react';
import recruiterService from '../../../services/recruiterService';
import mockStore from '../../../data/mockStore';
import Badge from '../../common/Badge';
import Loader from '../../common/Loader';
import FunnelPipelineGrid from './FunnelPipelineGrid';
import { FileText, Clock, Calendar, Award, XCircle, Users } from 'lucide-react';

const STAGES = [
  { key: 'applied', label: 'Applied', icon: <FileText size={16} /> },
  { key: 'under_review', label: 'Under Review', icon: <Clock size={16} /> },
  { key: 'shortlisted', label: 'Shortlisted', icon: <Users size={16} /> },
  { key: 'interview_scheduled', label: 'Interview Scheduled', icon: <Calendar size={16} /> },
  { key: 'selected', label: 'Selected / Offered', icon: <Award size={16} /> },
  { key: 'rejected', label: 'Rejected', icon: <XCircle size={16} /> },
];

const RecruitmentStatus = () => {
  const [candidates, setCandidates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeStage, setActiveStage] = useState('all');

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const res = await recruiterService.getCandidates();
        const raw = Array.isArray(res?.data) ? res.data : Array.isArray(res?.candidates) ? res.candidates : Array.isArray(res) ? res : mockStore.getApplications();
        setCandidates(raw);
      } catch { setCandidates(mockStore.getApplications()); }
      finally { setLoading(false); }
    })();
  }, []);

  const safeCandidates = Array.isArray(candidates) ? candidates : [];

  const getStageCount = (stageKey) => {
    if (stageKey === 'selected') return safeCandidates.filter((c) => c.status === 'selected' || c.status === 'offered').length;
    return safeCandidates.filter((c) => c.status === stageKey).length;
  };

  const filteredCandidates = activeStage === 'all' ? safeCandidates : activeStage === 'selected'
    ? safeCandidates.filter((c) => c.status === 'selected' || c.status === 'offered')
    : safeCandidates.filter((c) => c.status === activeStage);

  if (loading) return <Loader text="Loading recruitment funnel..." />;

  return (
    <div className="recruitment-funnel-wrapper">
      <FunnelPipelineGrid stages={STAGES} getStageCount={getStageCount} activeStage={activeStage} setActiveStage={setActiveStage} />
      <div className="funnel-candidates-panel">
        <div className="panel-header">
          <h3 className="panel-title">
            {activeStage === 'all' ? 'All Applications in Funnel' : `${STAGES.find((s) => s.key === activeStage)?.label} Candidates`}
            <span className="panel-count"> ({filteredCandidates.length})</span>
          </h3>
          {activeStage !== 'all' && (
            <button type="button" className="btn btn-ghost btn-sm" onClick={() => setActiveStage('all')}>Clear Filter</button>
          )}
        </div>
        {filteredCandidates.length === 0 ? (
          <div className="empty-state-box"><Users size={32} className="text-muted" /><p className="empty-text">No candidates found in this stage.</p></div>
        ) : (
          <div className="stage-candidates-list">
            {filteredCandidates.map((app) => (
              <div key={app._id} className="stage-candidate-item">
                <div className="cand-info">
                  <h4 className="cand-name">{app.student?.user?.name || 'Candidate'}</h4>
                  <p className="cand-sub">{app.job?.title} • {app.student?.department} • CGPA: <strong>{app.student?.academicDetails?.cgpa || 'N/A'}</strong></p>
                </div>
                <div className="cand-meta">
                  <Badge variant={app.status === 'selected' || app.status === 'offered' ? 'mint' : app.status === 'shortlisted' || app.status === 'interview_scheduled' ? 'warning' : app.status === 'rejected' ? 'danger' : 'default'} size="sm">
                    {app.status?.replace('_', ' ').toUpperCase()}
                  </Badge>
                  <span className="cand-date">Applied: {new Date(app.createdAt).toLocaleDateString()}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
export default RecruitmentStatus;
