import React from 'react';
import Button from '../../common/Button';
import { Calendar, Briefcase } from 'lucide-react';

export default function CandidateModalActions({ application, onClose, onUpdateStatus, onScheduleInterview }) {
  return (
    <div className="modal-actions-bar">
      <Button variant="ghost" onClick={onClose}>Close</Button>
      {application.status !== 'rejected' && (
        <Button variant="outline" onClick={() => onUpdateStatus(application._id, 'rejected')} className="btn-danger-outline">
          Reject Candidate
        </Button>
      )}
      {application.status === 'applied' && (
        <Button variant="outline" onClick={() => onUpdateStatus(application._id, 'under_review')}>
          Mark Under Review
        </Button>
      )}
      {(application.status === 'applied' || application.status === 'under_review') && (
        <Button variant="primary" onClick={() => onUpdateStatus(application._id, 'shortlisted')}>
          Shortlist for Interview
        </Button>
      )}
      {application.status === 'shortlisted' && (
        <Button variant="primary" onClick={() => onScheduleInterview(application)} icon={<Calendar size={14} />}>
          Schedule Interview
        </Button>
      )}
      {application.status === 'interview_scheduled' && (
        <Button variant="primary" onClick={() => onUpdateStatus(application._id, 'selected')} icon={<Briefcase size={14} />}>
          Extend Offer / Select
        </Button>
      )}
    </div>
  );
}
