import React, { useState, useEffect } from 'react';
import companyService from '../../../services/companyService';
import Button from '../../common/Button';
import Badge from '../../common/Badge';
import Loader from '../../common/Loader';
import CompanyProfileInputs from './CompanyProfileInputs';
import { CheckCircle2, AlertCircle, ShieldCheck, Clock } from 'lucide-react';

const CompanyProfile = () => {
  const [profile, setProfile] = useState({ name: '', industry: '', website: '', headquarters: '', location: '', contactPerson: '', description: '', logoUrl: '', isVerified: false });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const fetchProfile = async () => {
    try {
      setLoading(true);
      const res = await companyService.getRecruiterCompanyProfile();
      if (res.data) {
        setProfile({
          name: res.data.name || '', industry: res.data.industry || '', website: res.data.website || '',
          headquarters: res.data.headquarters || res.data.location || '', location: res.data.location || '',
          contactPerson: res.data.contactPerson || '', description: res.data.description || '',
          logoUrl: res.data.logoUrl || '', isVerified: !!res.data.isVerified,
        });
      }
    } catch (err) { setErrorMsg(err.message || 'Failed to load company profile'); }
    finally { setLoading(false); }
  };

  useEffect(() => { fetchProfile(); }, []);

  const handleChange = (e) => setProfile((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!profile.name.trim()) return setErrorMsg('Company Name is required');
    try {
      setSaving(true);
      setErrorMsg('');
      await companyService.updateRecruiterCompanyProfile({ ...profile, location: profile.headquarters || profile.location });
      setSuccessMsg('Company profile updated successfully!');
      setTimeout(() => setSuccessMsg(''), 4000);
    } catch (err) { setErrorMsg(err.message || 'Failed to update company profile'); }
    finally { setSaving(false); }
  };

  if (loading) return <Loader text="Loading company profile..." />;

  return (
    <div className="recruiter-card">
      <div className="recruiter-card-header">
        <div className="header-titles">
          <h2 className="card-title">Corporate Organization Profile</h2>
          <p className="card-subtitle">Configure company details visible to students and TPO.</p>
        </div>
        <div className="status-badge-slot">
          {profile.isVerified ? (
            <Badge variant="mint" size="md"><ShieldCheck size={14} className="inline-icon" /> Verified Partner</Badge>
          ) : (
            <Badge variant="warning" size="md"><Clock size={14} className="inline-icon" /> Pending TPO Verification</Badge>
          )}
        </div>
      </div>
      {successMsg && <div className="alert-success"><CheckCircle2 size={16} /> <span>{successMsg}</span></div>}
      {errorMsg && <div className="alert-danger"><AlertCircle size={16} /> <span>{errorMsg}</span></div>}
      <form onSubmit={handleSubmit} className="recruiter-form">
        <CompanyProfileInputs profile={profile} onChange={handleChange} />
        <div className="form-group">
          <label className="input-label" htmlFor="company-description">Company Description & Overview</label>
          <textarea id="company-description" name="description" className="input-textarea" rows={4} value={profile.description} onChange={handleChange} placeholder="Provide a brief summary of your company..." />
        </div>
        <div className="form-actions">
          <Button type="submit" variant="primary" size="md" loading={saving} icon={<CheckCircle2 size={16} />}>
            Save Profile Changes
          </Button>
        </div>
      </form>
    </div>
  );
};
export default CompanyProfile;
