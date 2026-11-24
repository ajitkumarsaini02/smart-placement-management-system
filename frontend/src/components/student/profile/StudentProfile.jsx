import React from 'react';
import Input from '../../common/Input';
import StudentProfileFields from './StudentProfileFields';
import { User, Mail, Phone, School, Hash } from 'lucide-react';

const StudentProfile = ({ profileData, onChange }) => {
  const { name = '', email = '', phone = '', collegeName = '', department = '', branch = '', rollNumber = '', batch = '', bio = '' } = profileData || {};

  return (
    <div className="profile-section-card">
      <div className="card-header-bar">
        <div className="card-title-group">
          <User className="title-icon" size={20} />
          <div>
            <h3 className="card-section-title">Personal & Academic Identification</h3>
            <p className="card-section-desc">Your registered college details and primary communication information.</p>
          </div>
        </div>
      </div>

      <div className="profile-form-grid">
        <div className="form-field-wrapper">
          <Input label="Full Name" name="name" type="text" placeholder="e.g. Rahul Sharma" value={name} onChange={(e) => onChange('name', e.target.value)} required icon={<User size={16} />} />
        </div>

        <div className="form-field-wrapper">
          <Input label="College Email Address" name="email" type="email" value={email} disabled icon={<Mail size={16} />} />
          <span className="field-hint">Linked to your institutional account.</span>
        </div>

        <div className="form-field-wrapper">
          <Input label="Phone Number" name="phone" type="tel" placeholder="e.g. +91 98765 43210" value={phone} onChange={(e) => onChange('phone', e.target.value)} required icon={<Phone size={16} />} />
        </div>

        <div className="form-field-wrapper">
          <Input label="College / Institute Name" name="collegeName" type="text" placeholder="e.g. National Institute of Technology" value={collegeName} onChange={(e) => onChange('collegeName', e.target.value)} icon={<School size={16} />} />
        </div>

        <div className="form-field-wrapper">
          <Input label="University Enrollment / Roll No." name="rollNumber" type="text" placeholder="e.g. 21BCSE042" value={rollNumber} onChange={(e) => onChange('rollNumber', e.target.value)} required icon={<Hash size={16} />} />
        </div>

        <StudentProfileFields department={department} branch={branch} batch={batch} bio={bio} onChange={onChange} />
      </div>
    </div>
  );
};

export default StudentProfile;
