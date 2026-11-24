import React from 'react';
import Button from '../../common/Button';
import Input from '../../common/Input';
import { X, CheckCircle2, FileText, ExternalLink, Save } from 'lucide-react';

export default function StudentDetailModal({
  activeStudent, onClose, isEditing, setIsEditing, editFormData, setEditFormData,
  onSave, onToggleVerification, modalSuccessMsg,
}) {
  if (!activeStudent) return null;
  const resumeUrl = activeStudent.resume?.url ? (activeStudent.resume.url.startsWith('http') ? activeStudent.resume.url : `http://localhost:5000${activeStudent.resume.url}`) : null;

  return (
    <div className="tpo-modal-overlay" onClick={onClose}>
      <div className="tpo-modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="tpo-modal-header">
          <div className="modal-title-with-avatar">
            <div className="modal-avatar">{activeStudent.user?.name ? activeStudent.user.name.charAt(0).toUpperCase() : 'S'}</div>
            <div>
              <h3 className="modal-heading">{activeStudent.user?.name}</h3>
              <span className="modal-sub">Roll No: {activeStudent.rollNumber} • {activeStudent.department}</span>
            </div>
          </div>
          <button type="button" className="tpo-modal-close" onClick={onClose}><X size={20} /></button>
        </div>

        {modalSuccessMsg && <div className="form-alert alert-success" style={{ margin: '1rem 1.5rem 0' }}><CheckCircle2 size={16} /><span>{modalSuccessMsg}</span></div>}

        <div className="tpo-modal-body">
          {!isEditing ? (
            <div className="student-view-details">
              <div className="detail-section">
                <h4 className="detail-section-title">Academic & Institutional Records</h4>
                <div className="detail-grid">
                  <div className="detail-item"><span className="detail-label">Current CGPA</span><span className="detail-val font-bold text-emerald">{activeStudent.cgpa}</span></div>
                  <div className="detail-item"><span className="detail-label">Active Backlogs</span><span className="detail-val">{activeStudent.activeBacklogs || 0}</span></div>
                  <div className="detail-item"><span className="detail-label">10th Score</span><span className="detail-val">{activeStudent.tenthPercentage ? `${activeStudent.tenthPercentage}%` : 'N/A'}</span></div>
                  <div className="detail-item"><span className="detail-label">12th Score</span><span className="detail-val">{activeStudent.twelfthPercentage ? `${activeStudent.twelfthPercentage}%` : 'N/A'}</span></div>
                  <div className="detail-item"><span className="detail-label">Batch</span><span className="detail-val">{activeStudent.batchYear}</span></div>
                  <div className="detail-item"><span className="detail-label">Status</span><span className="detail-val font-bold">{activeStudent.placementStatus?.toUpperCase()}</span></div>
                </div>
              </div>
              <div className="modal-resume-box">
                <span className="resume-box-label">Resume:</span>
                {resumeUrl ? (
                  <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm"><FileText size={15} /> Preview PDF <ExternalLink size={14} /></a>
                ) : <span className="text-muted">No resume uploaded</span>}
              </div>
            </div>
          ) : (
            <form id="tpo-student-edit-form" onSubmit={onSave}>
              <div className="profile-form-grid">
                <Input label="Student Name" value={editFormData.name} onChange={(e) => setEditFormData({ ...editFormData, name: e.target.value })} required />
                <Input label="Roll Number" value={editFormData.rollNumber} onChange={(e) => setEditFormData({ ...editFormData, rollNumber: e.target.value })} required />
                <Input label="CGPA" type="number" step="0.01" value={editFormData.cgpa} onChange={(e) => setEditFormData({ ...editFormData, cgpa: parseFloat(e.target.value) || 0 })} required />
                <Input label="Active Backlogs" type="number" value={editFormData.activeBacklogs} onChange={(e) => setEditFormData({ ...editFormData, activeBacklogs: parseInt(e.target.value, 10) || 0 })} />
                <div className="input-group">
                  <label className="input-label">Placement Status</label>
                  <select className="input-field" value={editFormData.placementStatus} onChange={(e) => setEditFormData({ ...editFormData, placementStatus: e.target.value })}>
                    <option value="unplaced">Unplaced</option><option value="placed">Placed</option><option value="opted_out">Opted Out</option>
                  </select>
                </div>
              </div>
            </form>
          )}
        </div>

        <div className="tpo-modal-footer">
          {!isEditing ? (
            <>
              <Button variant="outline" size="sm" onClick={() => onToggleVerification(activeStudent._id, activeStudent.isVerified)}>
                {activeStudent.isVerified ? 'Mark Pending' : 'Verify Student'}
              </Button>
              <Button variant="primary" size="sm" onClick={() => setIsEditing(true)}>Edit Info</Button>
            </>
          ) : (
            <>
              <Button variant="ghost" size="sm" onClick={() => setIsEditing(false)}>Cancel</Button>
              <Button type="submit" form="tpo-student-edit-form" variant="primary" size="sm" icon={<Save size={15} />}>Save Changes</Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
