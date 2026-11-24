import React from 'react';
import { Calendar, Clock, Video, MapPin } from 'lucide-react';

export default function ApplicationInterviewBox({ interview }) {
  if (!interview) return null;

  const formatDateTime = (dateString) => {
    if (!dateString) return 'N/A';
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit',
    });
  };

  return (
    <div className="interview-scheduled-box">
      <div className="interview-header">
        <Calendar size={18} className="text-emerald" />
        <h4 className="interview-title">Scheduled Interview: {interview.roundName || 'Technical Evaluation'}</h4>
      </div>

      <div className="interview-details-grid">
        <div className="interview-detail-item">
          <Clock size={15} />
          <span>{formatDateTime(interview.scheduledAt)}</span>
        </div>
        <div className="interview-detail-item">
          {interview.mode === 'online' ? <Video size={15} /> : <MapPin size={15} />}
          <span>Mode: {interview.mode === 'online' ? 'Online Video Call' : 'In-Person / Campus'}</span>
        </div>
      </div>

      {interview.meetingLink && (
        <div className="interview-link-row">
          <a href={interview.meetingLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm interview-join-btn">
            <Video size={15} /> Join Interview Meeting
          </a>
        </div>
      )}

      {interview.instructions && (
        <p className="interview-notes"><strong>Instructions:</strong> {interview.instructions}</p>
      )}
    </div>
  );
}
