import React, { useState } from 'react';
import Button from '../../common/Button';
import Badge from '../../common/Badge';
import { reportTypes } from './reportTypesData';
import { FileSpreadsheet, Download, CheckCircle2, AlertCircle } from 'lucide-react';

const PlacementReports = () => {
  const [downloadingType, setDownloadingType] = useState(null);
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleExportCSV = async (type) => {
    try {
      setDownloadingType(type);
      setSuccessMsg('');
      setErrorMsg('');
      const token = localStorage.getItem('placetrack_token');
      const response = await fetch(`http://localhost:5000/api/v1/tpo/reports/export?type=${type}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!response.ok) throw new Error('Failed to download report.');
      const blob = await response.blob();
      const downloadUrl = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = `placetrack-${type}-${new Date().toISOString().split('T')[0]}.csv`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(downloadUrl);
      setSuccessMsg(`Report (${type.toUpperCase()}) exported successfully in CSV format!`);
      setTimeout(() => setSuccessMsg(''), 5000);
    } catch {
      setErrorMsg('Failed to export report CSV. Please verify server connection.');
      setTimeout(() => setErrorMsg(''), 5000);
    } finally {
      setDownloadingType(null);
    }
  };

  return (
    <div className="tpo-reports-manager-wrapper">
      <div className="reports-intro-card">
        <div className="card-title-group">
          <FileSpreadsheet size={24} className="title-icon" />
          <div>
            <h3 className="card-section-title">Institutional Placement Reports & CSV Exports</h3>
            <p className="card-section-desc">Generate CSV spreadsheets for accreditation audits and campus records.</p>
          </div>
        </div>
      </div>

      {successMsg && <div className="form-alert alert-success"><CheckCircle2 size={18} /><span>{successMsg}</span></div>}
      {errorMsg && <div className="form-alert alert-error"><AlertCircle size={18} /><span>{errorMsg}</span></div>}

      <div className="tpo-reports-cards-grid">
        {reportTypes.map((rep) => (
          <div key={rep.type} className="tpo-report-card">
            <div className="report-card-top"><div className="report-icon-box">{rep.icon}</div><Badge variant="mint" size="sm">{rep.badge}</Badge></div>
            <h4 className="report-card-title">{rep.title}</h4>
            <p className="report-card-desc">{rep.description}</p>
            <div className="report-card-footer">
              <Button variant="outline" size="sm" onClick={() => handleExportCSV(rep.type)} disabled={downloadingType === rep.type} icon={<Download size={15} />} fullWidth>
                {downloadingType === rep.type ? 'Generating CSV...' : 'Export to CSV'}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlacementReports;
