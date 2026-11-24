import React, { useState, useEffect } from 'react';
import recruiterService from '../../../services/recruiterService';
import Loader from '../../common/Loader';
import ShortlistedCard from './ShortlistedCard';
import { Award, CheckCircle, AlertCircle } from 'lucide-react';

const ShortlistedCandidates = ({ onScheduleInterview }) => {
  const [candidates, setCandidates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState('');
  const [actionSuccess, setActionSuccess] = useState('');

  const fetchShortlisted = async () => {
    try {
      setLoading(true);
      setErrorMsg('');
      const res = await recruiterService.getCandidates();
      if (res.data) {
        setCandidates(res.data.filter((c) => c.status === 'shortlisted' || c.status === 'interview_scheduled'));
      }
    } catch (err) {
      setErrorMsg(err.message || 'Failed to load shortlisted pool');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchShortlisted(); }, []);

  const handleSelect = async (candidateId) => {
    try {
      await recruiterService.updateCandidateStatus(candidateId, 'selected');
      setActionSuccess('Candidate selected & placement offer extended!');
      await fetchShortlisted();
      setTimeout(() => setActionSuccess(''), 4000);
    } catch (err) {
      setErrorMsg(err.message || 'Status update failed');
    }
  };

  if (loading) return <Loader text="Loading shortlisted candidates..." />;

  return (
    <div className="shortlisted-wrapper">
      {actionSuccess && <div className="alert-success"><CheckCircle size={16} /> <span>{actionSuccess}</span></div>}
      {errorMsg && <div className="alert-danger"><AlertCircle size={16} /> <span>{errorMsg}</span></div>}

      {candidates.length === 0 ? (
        <div className="empty-state-box">
          <Award size={40} className="empty-icon text-muted" />
          <h3 className="empty-title">No Candidates Currently in Shortlist</h3>
          <p className="empty-text">Shortlist applicants from the "Candidates" tab to schedule interviews.</p>
        </div>
      ) : (
        <div className="shortlisted-cards-grid">
          {candidates.map((app) => (
            <ShortlistedCard key={app._id} app={app} onScheduleInterview={onScheduleInterview} onSelect={handleSelect} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ShortlistedCandidates;
