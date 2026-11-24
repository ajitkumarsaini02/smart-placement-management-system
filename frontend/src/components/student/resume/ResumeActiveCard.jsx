import React from 'react';
import { FileText, ExternalLink, Download, RefreshCw, Trash2 } from 'lucide-react';
import Button from '../../common/Button';

export const ResumeActiveCard = ({
  resumeData,
  resumeUrl,
  uploading,
  deleting,
  onReplaceClick,
  onDeleteClick,
}) => {
  const formatFileSize = (bytes) => {
    if (!bytes) return '1.5 MB';
    if (typeof bytes === 'string') return bytes;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  const formatDate = (dateStr) => {
    if (!dateStr) return 'Recently';
    return new Date(dateStr).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
  };

  return (
    <div className="active-resume-box">
      <div className="resume-file-info">
        <div className="resume-icon-badge"><FileText size={28} /></div>
        <div className="resume-meta">
          <h4 className="resume-filename">{resumeData.originalName || resumeData.fileName || 'Placement-Resume.pdf'}</h4>
          <div className="resume-sub-meta">
            <span>Size: {formatFileSize(resumeData.fileSize)}</span>
            <span className="dot-sep">•</span>
            <span>Uploaded: {formatDate(resumeData.uploadedAt || resumeData.updatedAt)}</span>
          </div>
        </div>
      </div>
      <div className="resume-action-buttons">
        <a href={resumeUrl || '#'} target="_blank" rel="noreferrer" className="btn btn-outline btn-sm resume-action-btn">
          <ExternalLink size={15} /> Preview PDF
        </a>
        <a href={resumeUrl || '#'} download={resumeData.originalName || 'Placement-Resume.pdf'} className="btn btn-primary btn-sm resume-action-btn">
          <Download size={15} /> Download
        </a>
        <Button variant="outline" size="sm" onClick={onReplaceClick} disabled={uploading || deleting} icon={<RefreshCw size={15} />}>
          {uploading ? 'Replacing...' : 'Replace'}
        </Button>
        <Button variant="ghost" size="sm" onClick={onDeleteClick} disabled={uploading || deleting} className="btn-danger-ghost" icon={<Trash2 size={15} />}>
          {deleting ? 'Removing...' : 'Delete'}
        </Button>
      </div>
    </div>
  );
};

export default ResumeActiveCard;
