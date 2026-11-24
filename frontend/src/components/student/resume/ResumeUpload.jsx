import React, { useState, useRef } from 'react';
import studentService from '../../../services/studentService';
import Badge from '../../common/Badge';
import { FileText, CheckCircle, AlertCircle, FileCheck } from 'lucide-react';
import ResumeActiveCard from './ResumeActiveCard';
import ResumeDropzone from './ResumeDropzone';

const ResumeUpload = ({ resumeData, onResumeUpdated }) => {
  const [uploading, setUploading] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);

  const handleFileUpload = async (file) => {
    setErrorMessage(''); setSuccessMessage('');
    if (!file) return;
    if (!file.name.toLowerCase().endsWith('.pdf')) return setErrorMessage('Please upload a PDF (.pdf) document.');
    if (file.size > 5 * 1024 * 1024) return setErrorMessage('File size exceeds 5MB limit.');
    setUploading(true);
    const res = await studentService.uploadResume(file);
    setUploading(false);
    if (res.success) {
      setSuccessMessage('Resume uploaded successfully!');
      onResumeUpdated?.(res.data?.resume);
    } else {
      setErrorMessage(res.message || 'Failed to upload.');
    }
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handleDeleteResume = async () => {
    if (!window.confirm('Delete your current resume?')) return;
    setDeleting(true);
    const res = await studentService.deleteResume();
    setDeleting(false);
    if (res.success) {
      setSuccessMessage('Resume removed.');
      onResumeUpdated?.(null);
    }
  };

  const resumeUrl = resumeData?.fileUrl || resumeData?.url;

  return (
    <div className="resume-manager-card">
      <div className="card-header-bar">
        <div className="card-title-group">
          <FileText className="title-icon" size={20} />
          <div>
            <h3 className="card-section-title">Resume &amp; CV Management</h3>
            <p className="card-section-desc">Upload your PDF resume to auto-attach when applying to companies.</p>
          </div>
        </div>
        {resumeUrl && <Badge variant="emerald" size="sm" icon={<FileCheck size={14} />}>Verified PDF</Badge>}
      </div>

      {errorMessage && <div className="form-alert alert-error"><AlertCircle size={16} /><span>{errorMessage}</span></div>}
      {successMessage && <div className="form-alert alert-success"><CheckCircle size={16} /><span>{successMessage}</span></div>}

      <input ref={fileInputRef} type="file" accept="application/pdf" style={{ display: 'none' }} onChange={(e) => e.target.files?.[0] && handleFileUpload(e.target.files[0])} />

      {resumeUrl ? (
        <ResumeActiveCard resumeData={resumeData} resumeUrl={resumeUrl} uploading={uploading} deleting={deleting} onReplaceClick={() => fileInputRef.current?.click()} onDeleteClick={handleDeleteResume} />
      ) : (
        <ResumeDropzone
          isDragging={isDragging} uploading={uploading}
          onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
          onDragLeave={() => setIsDragging(false)}
          onDrop={(e) => { e.preventDefault(); setIsDragging(false); e.dataTransfer.files?.[0] && handleFileUpload(e.dataTransfer.files[0]); }}
          onClick={() => fileInputRef.current?.click()}
        />
      )}
    </div>
  );
};

export default ResumeUpload;
