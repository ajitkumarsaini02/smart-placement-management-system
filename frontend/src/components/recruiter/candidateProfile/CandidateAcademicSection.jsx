import React from 'react';
import { Award, Code, User, FileText, ExternalLink } from 'lucide-react';

export default function CandidateAcademicSection({ academic, student, skills, sop, resume, resumeUrl }) {
  return (
    <>
      <div className="candidate-section">
        <h4 className="section-mini-heading"><Award size={15} /> Academic Credentials</h4>
        <div className="academic-stats-row">
          <div className="stat-pill"><span className="stat-lbl">CGPA</span><span className="stat-val text-emerald">{academic.cgpa || 'N/A'}</span></div>
          <div className="stat-pill"><span className="stat-lbl">10th Standard</span><span className="stat-val">{academic.tenthPercentage ? `${academic.tenthPercentage}%` : 'N/A'}</span></div>
          <div className="stat-pill"><span className="stat-lbl">12th / Diploma</span><span className="stat-val">{academic.twelfthPercentage ? `${academic.twelfthPercentage}%` : 'N/A'}</span></div>
          <div className="stat-pill"><span className="stat-lbl">Active Backlogs</span><span className={`stat-val ${academic.activeBacklogs > 0 ? 'text-danger' : 'text-emerald'}`}>{academic.activeBacklogs ?? 0}</span></div>
          <div className="stat-pill"><span className="stat-lbl">Batch</span><span className="stat-val">{student?.graduationYear || '2026'}</span></div>
        </div>
      </div>

      <div className="candidate-section">
        <h4 className="section-mini-heading"><Code size={15} /> Technical Skills</h4>
        <div className="skills-tags-cluster">
          {skills.length > 0 ? skills.map((s, i) => <span key={i} className="skill-bubble">{s}</span>) : <span className="text-muted">No skills listed</span>}
        </div>
      </div>

      {sop && (
        <div className="candidate-section">
          <h4 className="section-mini-heading"><User size={15} /> Candidate Cover Note</h4>
          <p className="sop-text">{sop}</p>
        </div>
      )}

      <div className="candidate-section">
        <h4 className="section-mini-heading"><FileText size={15} /> Verified Resume Document</h4>
        {resumeUrl ? (
          <div className="resume-download-bar">
            <div className="resume-file-info">
              <FileText size={20} className="text-emerald" />
              <div>
                <span className="file-name">{resume?.fileName || resume?.originalName || 'Student_Resume.pdf'}</span>
                <span className="file-meta">Uploaded on {resume?.uploadedAt ? new Date(resume.uploadedAt).toLocaleDateString() : 'Active'}</span>
              </div>
            </div>
            <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm">
              <ExternalLink size={14} /> Open Resume PDF
            </a>
          </div>
        ) : (
          <p className="text-muted">No resume uploaded by student.</p>
        )}
      </div>
    </>
  );
}
