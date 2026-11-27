import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import TPOLayout from '../../components/tpo/layout/TPOLayout';
import CompanyManagement from '../../components/tpo/companyManagement/CompanyManagement';
import Loader from '../../components/common/Loader';
import { AlertCircle } from 'lucide-react';

const Companies = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [companies, setCompanies] = useState([]);

  const fetchCompanies = async () => {
    try {
      setLoading(true);
      const res = await api.get('/tpo/companies');
      if (res.data?.success) setCompanies(res.data.data || []);
    } catch (err) { setError(err.response?.data?.message || 'Failed to load partners.'); }
    finally { setLoading(false); }
  };

  useEffect(() => { fetchCompanies(); }, []);

  const handleCreate = async (payload) => {
    const res = await api.post('/tpo/companies', payload);
    if (res.data?.success) setCompanies((p) => [res.data.data, ...p]);
  };

  const handleUpdate = async (id, payload) => {
    const res = await api.put(`/tpo/companies/${id}`, payload);
    if (res.data?.success) setCompanies((p) => p.map((c) => c._id === id ? { ...c, ...res.data.data } : c));
  };

  const handleVerify = async (id, cur) => {
    try {
      const res = await api.put(`/tpo/companies/${id}/verify`, { isVerified: !cur });
      if (res.data?.success) setCompanies((p) => p.map((c) => c._id === id ? { ...c, isVerified: !cur } : c));
    } catch (err) { console.error('Verification failed:', err); }
  };

  const handleDelete = async (id) => {
    try {
      const res = await api.delete(`/tpo/companies/${id}`);
      if (res.data?.success) setCompanies((p) => p.filter((c) => c._id !== id));
    } catch (err) { console.error('Delete failed:', err); }
  };

  if (loading) return <TPOLayout pageTitle="Companies"><div className="dashboard-loading-state"><Loader size="lg" text="Loading corporate directory..." /></div></TPOLayout>;
  if (error) return <TPOLayout pageTitle="Companies"><div className="dashboard-error-state"><AlertCircle size={36} className="text-amber" /><h3>Unable to load</h3><p>{error}</p></div></TPOLayout>;

  return (
    <TPOLayout pageTitle="Corporate Recruitment Partners" pageSubtitle="Register campus recruiting organizations, manage compensation tiers, and verify identities.">
      <CompanyManagement companies={companies} onCreateCompany={handleCreate} onUpdateCompany={handleUpdate} onVerifyCompany={handleVerify} onDeleteCompany={handleDelete} />
    </TPOLayout>
  );
};

export default Companies;
