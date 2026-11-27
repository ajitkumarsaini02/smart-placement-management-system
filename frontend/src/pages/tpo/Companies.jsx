import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import mockStore from '../../data/mockStore';
import TPOLayout from '../../components/tpo/layout/TPOLayout';
import CompanyManagement from '../../components/tpo/companyManagement/CompanyManagement';
import Loader from '../../components/common/Loader';

const Companies = () => {
  const [loading, setLoading] = useState(true);
  const [companies, setCompanies] = useState([]);

  const fetchCompanies = async () => {
    try {
      setLoading(true);
      const res = await api.get('/tpo/companies');
      const raw = Array.isArray(res.data?.data) ? res.data.data : Array.isArray(res.data?.companies) ? res.data.companies : mockStore.getCompanies();
      setCompanies(raw);
    } catch {
      setCompanies(mockStore.getCompanies());
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchCompanies(); }, []);

  const handleCreate = async (payload) => {
    try {
      const res = await api.post('/tpo/companies', payload);
      const item = res.data?.data || { _id: `comp_${Date.now()}`, ...payload };
      setCompanies((p) => [item, ...p]);
    } catch {
      setCompanies((p) => [{ _id: `comp_${Date.now()}`, ...payload }, ...p]);
    }
  };

  const handleUpdate = async (id, payload) => {
    try {
      const res = await api.put(`/tpo/companies/${id}`, payload);
      const updated = res.data?.data || payload;
      setCompanies((p) => p.map((c) => c._id === id ? { ...c, ...updated } : c));
    } catch {
      setCompanies((p) => p.map((c) => c._id === id ? { ...c, ...payload } : c));
    }
  };

  const handleVerify = async (id, cur) => {
    try {
      await api.put(`/tpo/companies/${id}/verify`, { isVerified: !cur });
      setCompanies((p) => p.map((c) => c._id === id ? { ...c, isVerified: !cur } : c));
    } catch {
      setCompanies((p) => p.map((c) => c._id === id ? { ...c, isVerified: !cur } : c));
    }
  };

  const handleDelete = async (id) => {
    try {
      await api.delete(`/tpo/companies/${id}`);
      setCompanies((p) => p.filter((c) => c._id !== id));
    } catch {
      setCompanies((p) => p.filter((c) => c._id !== id));
    }
  };

  if (loading) return <TPOLayout pageTitle="Companies"><div className="dashboard-loading-state"><Loader size="lg" text="Loading corporate directory..." /></div></TPOLayout>;

  return (
    <TPOLayout pageTitle="Corporate Recruitment Partners" pageSubtitle="Register campus recruiting organizations, manage compensation tiers, and verify identities.">
      <CompanyManagement companies={companies} onCreateCompany={handleCreate} onUpdateCompany={handleUpdate} onVerifyCompany={handleVerify} onDeleteCompany={handleDelete} />
    </TPOLayout>
  );
};

export default Companies;
