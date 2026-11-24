import React from 'react';
import Button from '../../common/Button';
import Badge from '../../common/Badge';
import { Calendar, Video, ExternalLink, Award, Clock } from 'lucide-react';

export default function ShortlistedCard({ app, onScheduleInterview, onSelect }) {
  const user = app.student?.user || {};
  const academic = app.student?.academicDetails || {};
  const interview = app.interviewDetails;

  return (
    <div className="shortlisted-card">
      <div className="card-top-row">
        <div>
          <h4 className="candidate-name">{user.name || 'Student Candidate'}</h4>
          <span className="candidate-role-sub">{app.job?.title}</span>
        </div>
        <Badge variant={app.status === 'interview_scheduled' ? 'mint' : 'warning'} size="sm">
          {app.status === 'interview_scheduled' ? 'Interview Set' : 'Shortlisted'}
        </Badge>
      </div>

      <div className="academic-snapshot">
        <span>Branch: {app.student?.department || 'CSE'}</span>
        <span>CGPA: <strong>{academic.cgpa || 'N/A'}</strong></span>
      </div>

      {interview ? (
        <div className="interview-notice-box">
          <div className="notice-row"><Calendar size={14} className="text-emerald" /><span>{new Date(interview.scheduledAt).toLocaleString()}</span></div>
          <div className="notice-row"><Video size={14} className="text-emerald" /><span>{interview.roundName || 'Technical Round'}</span></div>
          {interview.meetingLink && (
            <a href={interview.meetingLink} target="_blank" rel="noopener noreferrer" className="meet-link">
              <ExternalLink size={12} /> Join Google Meet
            </a>
          )}
        </div>
      ) : (
        <div className="pending-interview-box"><Clock size={14} className="text-warning" /><span>Awaiting interview round scheduling</span></div>
      )}

      <div className="card-action-bar">
        {app.status === 'shortlisted' && onScheduleInterview && (
          <Button variant="outline" size="sm" onClick={() => onScheduleInterview(app)} icon={<Calendar size={13} />}>
            Schedule Call
          </Button>
        )}
        <Button variant="primary" size="sm" onClick={() => onSelect(app._id)} icon={<Award size={13} />}>
          Select & Offer
        </Button>
      </div>
    </div>
  );
}
