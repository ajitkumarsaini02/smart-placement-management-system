import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import mockStore from '../../data/mockStore';
import TPOLayout from '../../components/tpo/layout/TPOLayout';
import PlacementDriveManagement from '../../components/tpo/placementDriveManagement/PlacementDriveManagement';
import Loader from '../../components/common/Loader';

const PlacementDrives = () => {
  const [loading, setLoading] = useState(true);
  const [drives, setDrives] = useState([]);
  const [companies, setCompanies] = useState([]);

  const fetchData = async () => {
    try {
      setLoading(true);
      const [dRes, cRes] = await Promise.all([api.get('/tpo/drives'), api.get('/tpo/companies')]);
      const rawDrives = Array.isArray(dRes.data?.data) ? dRes.data.data : Array.isArray(dRes.data?.drives) ? dRes.data.drives : mockStore.getDrives();
      const rawCompanies = Array.isArray(cRes.data?.data) ? cRes.data.data : Array.isArray(cRes.data?.companies) ? cRes.data.companies : mockStore.getCompanies();
      setDrives(rawDrives);
      setCompanies(rawCompanies);
    } catch {
      setDrives(mockStore.getDrives());
      setCompanies(mockStore.getCompanies());
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchData(); }, []);

  const handleCreate = async (formData) => {
    try {
      const res = await api.post('/tpo/drives', formData);
      const item = res.data?.data || { _id: `drive_${Date.now()}`, ...formData };
      setDrives((p) => [item, ...p]);
    } catch {
      setDrives((p) => [{ _id: `drive_${Date.now()}`, ...formData }, ...p]);
    }
  };

  const handleUpdate = async (id, formData) => {
    try {
      const res = await api.put(`/tpo/drives/${id}`, formData);
      const updated = res.data?.data || formData;
      setDrives((p) => p.map((d) => d._id === id ? { ...d, ...updated } : d));
    } catch {
      setDrives((p) => p.map((d) => d._id === id ? { ...d, ...formData } : d));
    }
  };

  const handleCancel = async (id) => {
    try {
      await api.put(`/tpo/drives/${id}/cancel`);
      setDrives((p) => p.map((d) => d._id === id ? { ...d, status: 'cancelled' } : d));
    } catch {
      setDrives((p) => p.map((d) => d._id === id ? { ...d, status: 'cancelled' } : d));
    }
  };

  if (loading) return <TPOLayout pageTitle="Placement Drives"><div className="dashboard-loading-state"><Loader size="lg" text="Loading drives..." /></div></TPOLayout>;

  return (
    <TPOLayout pageTitle="Placement Recruitment Drives" pageSubtitle="Schedule on-campus and virtual hiring drives, configure registration windows, and cutoffs.">
      <PlacementDriveManagement drives={drives} companies={companies} onCreateDrive={handleCreate} onUpdateDrive={handleUpdate} onCancelDrive={handleCancel} />
    </TPOLayout>
  );
};

export default PlacementDrives;
