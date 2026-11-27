import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import TPOLayout from '../../components/tpo/layout/TPOLayout';
import PlacementDriveManagement from '../../components/tpo/placementDriveManagement/PlacementDriveManagement';
import Loader from '../../components/common/Loader';
import { AlertCircle } from 'lucide-react';

const PlacementDrives = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [drives, setDrives] = useState([]);
  const [companies, setCompanies] = useState([]);

  const fetchData = async () => {
    try {
      setLoading(true);
      const [dRes, cRes] = await Promise.all([api.get('/tpo/drives'), api.get('/tpo/companies')]);
      if (dRes.data?.success) setDrives(dRes.data.data || []);
      if (cRes.data?.success) setCompanies(cRes.data.data || []);
    } catch (err) { setError(err.response?.data?.message || 'Failed to load placement drives.'); }
    finally { setLoading(false); }
  };

  useEffect(() => { fetchData(); }, []);

  const handleCreate = async (formData) => {
    const res = await api.post('/tpo/drives', formData);
    if (res.data?.success) setDrives((p) => [res.data.data, ...p]);
  };

  const handleUpdate = async (id, formData) => {
    const res = await api.put(`/tpo/drives/${id}`, formData);
    if (res.data?.success) setDrives((p) => p.map((d) => d._id === id ? { ...d, ...res.data.data } : d));
  };

  const handleCancel = async (id) => {
    const res = await api.put(`/tpo/drives/${id}/cancel`);
    if (res.data?.success) setDrives((p) => p.map((d) => d._id === id ? { ...d, status: 'cancelled' } : d));
  };

  if (loading) return <TPOLayout pageTitle="Placement Drives"><div className="dashboard-loading-state"><Loader size="lg" text="Loading drives..." /></div></TPOLayout>;
  if (error) return <TPOLayout pageTitle="Placement Drives"><div className="dashboard-error-state"><AlertCircle size={36} className="text-amber" /><h3>Unable to load drives</h3><p>{error}</p></div></TPOLayout>;

  return (
    <TPOLayout pageTitle="Placement Recruitment Drives" pageSubtitle="Schedule on-campus and virtual hiring drives, configure registration windows, and cutoffs.">
      <PlacementDriveManagement drives={drives} companies={companies} onCreateDrive={handleCreate} onUpdateDrive={handleUpdate} onCancelDrive={handleCancel} />
    </TPOLayout>
  );
};

export default PlacementDrives;
