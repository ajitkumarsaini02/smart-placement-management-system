import React from 'react';
import Badge from '../../common/Badge';
import CandidateAcademicSection from './CandidateAcademicSection';
import CandidateModalActions from './CandidateModalActions';
import { X, Mail, Phone, GraduationCap } from 'lucide-react';

const CandidateProfile = ({ application, onClose, onUpdateStatus, onScheduleInterview }) => {
  if (!application) return null;
  const { student } = application;
  const user = student?.user || {};
  const academic = student?.academicDetails || {};
  const rawUrl = student?.resume?.fileUrl || student?.resume?.url;
  const resumeUrl = rawUrl?.startsWith('http') ? rawUrl : rawUrl ? `http://localhost:5000${rawUrl}` : null;

  return (
    <div className="modal-backdrop">
      <div className="modal-container modal-lg">
        <div className="modal-header">
          <div className="header-candidate-id">
            <h3 className="modal-title">{user.name || 'Candidate Profile'}</h3>
            <span className="candidate-subhead">Applying for: <strong>{application.job?.title || 'Campus Opening'}</strong></span>
          </div>
          <button type="button" className="modal-close-btn" onClick={onClose}><X size={18} /></button>
        </div>

        <div className="modal-body candidate-modal-body">
          <div className="candidate-header-pill-row">
            <div className="contact-item"><Mail size={14} className="text-emerald" /><span>{user.email || 'N/A'}</span></div>
            {student?.personalDetails?.phone && (
              <div className="contact-item"><Phone size={14} className="text-emerald" /><span>{student.personalDetails.phone}</span></div>
            )}
            <div className="contact-item"><GraduationCap size={14} className="text-emerald" /><span>{student?.department || 'Engineering'}</span></div>
            <div className="status-slot">
              <Badge variant={application.status === 'selected' || application.status === 'offered' ? 'mint' : application.status === 'shortlisted' || application.status === 'interview_scheduled' ? 'warning' : application.status === 'rejected' ? 'danger' : 'default'} size="md">
                {application.status?.replace('_', ' ').toUpperCase()}
              </Badge>
            </div>
          </div>

          <CandidateAcademicSection
            academic={academic}
            student={student}
            skills={student?.skills || []}
            sop={application.statementOfPurpose}
            resume={student?.resume}
            resumeUrl={resumeUrl}
          />
        </div>

        <CandidateModalActions application={application} onClose={onClose} onUpdateStatus={onUpdateStatus} onScheduleInterview={onScheduleInterview} />
      </div>
    </div>
  );
};

export default CandidateProfile;
