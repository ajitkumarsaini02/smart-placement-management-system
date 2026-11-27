import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase } from 'lucide-react';

export const RegisterHeader = () => (
  <div className="auth-card-header">
    <Link to="/" className="auth-brand-logo">
      <div className="logo-icon-wrapper"><Briefcase size={20} className="logo-icon" /></div>
      <span className="logo-brand">Place<span className="logo-highlight">Track</span></span>
    </Link>
    <h2 className="auth-title">Create your PlaceTrack account</h2>
    <p className="auth-subtitle">Join the smart placement platform to discover drives or recruit campus talent</p>
  </div>
);

export default RegisterHeader;
