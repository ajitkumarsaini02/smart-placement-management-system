import React from 'react';
import Input from '../../common/Input';
import { Building, Globe, MapPin, User } from 'lucide-react';

export default function CompanyProfileInputs({ profile, onChange }) {
  return (
    <div className="form-grid-2">
      <Input
        label="Company Name *"
        name="name"
        value={profile.name}
        onChange={onChange}
        placeholder="e.g. Google Cloud, Microsoft"
        icon={<Building size={16} />}
        required
      />
      <Input
        label="Industry Sector"
        name="industry"
        value={profile.industry}
        onChange={onChange}
        placeholder="e.g. Information Technology, Cloud Computing"
        icon={<Building size={16} />}
      />
      <Input
        label="Corporate Website URL"
        name="website"
        value={profile.website}
        onChange={onChange}
        placeholder="https://company.com"
        icon={<Globe size={16} />}
      />
      <Input
        label="Headquarters / Office Location"
        name="headquarters"
        value={profile.headquarters}
        onChange={onChange}
        placeholder="e.g. Bangalore, Hyderabad, Remote"
        icon={<MapPin size={16} />}
      />
      <Input
        label="Primary Contact Person"
        name="contactPerson"
        value={profile.contactPerson}
        onChange={onChange}
        placeholder="Lead University Recruiter Name"
        icon={<User size={16} />}
      />
      <Input
        label="Logo URL (Optional)"
        name="logoUrl"
        value={profile.logoUrl}
        onChange={onChange}
        placeholder="https://example.com/logo.png"
        icon={<Building size={16} />}
      />
    </div>
  );
}
