import React, { useState } from 'react';
import Button from '../../common/Button';
import Input from '../../common/Input';
import JobFormEligibility from './JobFormEligibility';
import { Briefcase, MapPin, DollarSign, Calendar, Users, Code, CheckCircle2, X } from 'lucide-react';

const ALL_BRANCHES = [
  'Computer Science & Engineering', 'Information Technology', 'Electronics & Communication Engineering',
  'Electrical Engineering', 'Mechanical Engineering', 'Civil Engineering',
];

const JobForm = ({ initialData = null, onSave, onCancel, isVerified = false }) => {
  const [formData, setFormData] = useState({
    title: initialData?.title || '', description: initialData?.description || '', jobType: initialData?.jobType || 'Full-time',
    location: initialData?.location || '', salary: initialData?.salary || '', openingsCount: initialData?.openingsCount || 1,
    deadline: initialData?.deadline ? new Date(initialData.deadline).toISOString().split('T')[0] : '',
    minCGPA: initialData?.eligibilityCriteria?.minCGPA || 7.0,
    maxBacklogs: initialData?.eligibilityCriteria?.maxBacklogs !== undefined ? initialData.eligibilityCriteria.maxBacklogs : 0,
    minTenthPercentage: initialData?.eligibilityCriteria?.minTenthPercentage || 60,
    minTwelfthPercentage: initialData?.eligibilityCriteria?.minTwelfthPercentage || 60,
    eligibleBranches: initialData?.eligibilityCriteria?.eligibleBranches?.length ? initialData.eligibilityCriteria.eligibleBranches : ['Computer Science & Engineering', 'Information Technology'],
    skillsRequired: initialData?.skillsRequired?.join(', ') || initialData?.requirements?.join(', ') || '',
    status: initialData?.status || (isVerified ? 'open' : 'draft'),
  });
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData((p) => ({ ...p, [name]: type === 'number' ? (value === '' ? '' : parseFloat(value)) : value }));
  };

  const handleBranchToggle = (branch) => {
    setFormData((p) => ({
      ...p,
      eligibleBranches: p.eligibleBranches.includes(branch) ? p.eligibleBranches.filter((b) => b !== branch) : [...p.eligibleBranches, branch],
    }));
  };

  const handleSubmit = async (e, forceStatus) => {
    e.preventDefault();
    if (!formData.title.trim() || !formData.deadline || formData.eligibleBranches.length === 0) {
      return setError('Please fill all required fields and select at least one branch.');
    }
    try {
      setSaving(true);
      const skillsArray = formData.skillsRequired ? formData.skillsRequired.split(',').map((s) => s.trim()).filter(Boolean) : [];
      await onSave({
        title: formData.title.trim(), description: formData.description.trim(), jobType: formData.jobType,
        location: formData.location.trim(), salary: formData.salary.trim(), openingsCount: parseInt(formData.openingsCount, 10) || 1,
        deadline: new Date(formData.deadline).toISOString(), skillsRequired: skillsArray, requirements: skillsArray,
        eligibilityCriteria: {
          minCGPA: parseFloat(formData.minCGPA) || 0, maxBacklogs: parseInt(formData.maxBacklogs, 10) || 0,
          minTenthPercentage: parseFloat(formData.minTenthPercentage) || 0, minTwelfthPercentage: parseFloat(formData.minTwelfthPercentage) || 0,
          eligibleBranches: formData.eligibleBranches,
        },
        status: forceStatus || formData.status,
      });
    } catch (err) { setError(err.message || 'Failed to save job opening'); } finally { setSaving(false); }
  };

  return (
    <form className="job-form-wrapper" onSubmit={(e) => handleSubmit(e)}>
      {error && <div className="alert-danger">{error}</div>}
      <div className="form-section-title"><Briefcase size={16} /> Basic Role Details</div>
      <div className="form-grid-2">
        <Input label="Job Title *" name="title" value={formData.title} onChange={handleChange} placeholder="e.g. Software Engineer 1" required />
        <div className="form-group">
          <label className="input-label" htmlFor="jobType">Employment Type</label>
          <select id="jobType" name="jobType" className="input-select" value={formData.jobType} onChange={handleChange}>
            <option value="Full-time">Full-time (Campus)</option><option value="Internship">Pre-Placement Internship</option>
          </select>
        </div>
        <Input label="Job Location *" name="location" value={formData.location} onChange={handleChange} placeholder="e.g. Bangalore" icon={<MapPin size={16} />} required />
        <Input label="Offered CTC *" name="salary" value={formData.salary} onChange={handleChange} placeholder="e.g. 18.5 LPA" icon={<DollarSign size={16} />} required />
        <Input label="Number of Openings" type="number" name="openingsCount" value={formData.openingsCount} onChange={handleChange} min={1} icon={<Users size={16} />} />
        <Input label="Deadline *" type="date" name="deadline" value={formData.deadline} onChange={handleChange} icon={<Calendar size={16} />} required />
      </div>
      <div className="form-group">
        <label className="input-label" htmlFor="description">Job Description</label>
        <textarea id="description" name="description" className="input-textarea" rows={3} value={formData.description} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <Input label="Required Skills" name="skillsRequired" value={formData.skillsRequired} onChange={handleChange} placeholder="React, Node.js, Python, SQL" icon={<Code size={16} />} />
      </div>
      <JobFormEligibility formData={formData} handleChange={handleChange} handleBranchToggle={handleBranchToggle} allBranches={ALL_BRANCHES} />
      <div className="modal-actions-bar">
        {onCancel && <Button type="button" variant="ghost" onClick={onCancel} icon={<X size={16} />}>Cancel</Button>}
        <Button type="button" variant="outline" loading={saving} onClick={(e) => handleSubmit(e, 'draft')}>Save Draft</Button>
        <Button type="button" variant="primary" loading={saving} disabled={!isVerified} onClick={(e) => handleSubmit(e, 'open')} icon={<CheckCircle2 size={16} />}>Publish Live</Button>
      </div>
    </form>
  );
};

export default JobForm;
