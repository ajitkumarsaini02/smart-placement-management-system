import React from 'react';
import { UploadCloud } from 'lucide-react';
import Button from '../../common/Button';
import Loader from '../../common/Loader';

export const ResumeDropzone = ({ isDragging, uploading, onDragOver, onDragLeave, onDrop, onClick }) => (
  <div
    className={`resume-dropzone ${isDragging ? 'dropzone-active' : ''}`}
    onDragOver={onDragOver}
    onDragLeave={onDragLeave}
    onDrop={onDrop}
    onClick={onClick}
  >
    {uploading ? (
      <div className="dropzone-loading">
        <Loader size="md" text="Uploading PDF resume..." />
      </div>
    ) : (
      <div className="dropzone-content">
        <div className="dropzone-icon-circle"><UploadCloud size={32} /></div>
        <h4 className="dropzone-prompt">Click or drag &amp; drop your PDF resume here</h4>
        <p className="dropzone-hint">Strictly PDF format only (.pdf). Maximum file size 5MB.</p>
        <Button variant="secondary" size="sm" className="dropzone-btn" onClick={(e) => { e.stopPropagation(); onClick(); }}>
          Choose File from Computer
        </Button>
      </div>
    )}
  </div>
);

export default ResumeDropzone;
