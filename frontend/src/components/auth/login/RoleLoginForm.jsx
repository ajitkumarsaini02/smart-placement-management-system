import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Input from '../../common/Input';
import Button from '../../common/Button';
import { Mail, Lock, Eye, EyeOff, ArrowLeft, ArrowRight, AlertCircle, Zap } from 'lucide-react';
import ROLE_CONFIGS from './roleConfigs';

const defaultRoleCredentials = {
  student: { email: 'student@placetrack.com', password: 'Password@123' },
  tpo: { email: 'tpo@placetrack.com', password: 'Password@123' },
  recruiter: { email: 'recruiter@placetrack.com', password: 'Password@123' },
  admin: { email: 'admin@placetrack.com', password: 'Password@123' },
};

const RoleLoginForm = ({ role, onBack, onSubmit, isSubmitting, formError }) => {
  const config = ROLE_CONFIGS[role] || ROLE_CONFIGS.student;
  const defaults = defaultRoleCredentials[role] || defaultRoleCredentials.student;
  const [email, setEmail] = useState(defaults.email);
  const [password, setPassword] = useState(defaults.password);
  const [showPassword, setShowPassword] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(email || defaults.email, password || defaults.password);
  };

  const handleQuickDemoLogin = () => {
    setEmail(defaults.email);
    setPassword(defaults.password);
    onSubmit(defaults.email, defaults.password);
  };

  return (
    <div className="split-auth-card-wrapper">
      <div className="form-top-navigation">
        <button type="button" className="back-to-roles-btn" onClick={onBack}>
          <ArrowLeft size={16} /> Back to role selection
        </button>
      </div>
      <div className="split-auth-header">
        <div className="active-role-pill"><span>{config.badge}</span></div>
        <h2 className="split-auth-title">{config.title}</h2>
        <p className="split-auth-subtitle">{config.subtitle}</p>
      </div>
      {formError && (
        <div className="auth-error-alert" role="alert">
          <AlertCircle size={18} className="error-alert-icon" /><span>{formError}</span>
        </div>
      )}
      <form onSubmit={handleFormSubmit} className="auth-form" noValidate>
        <Input label="Email Address" type="email" id="role-login-email" placeholder={config.placeholder} value={email} onChange={(e) => setEmail(e.target.value)} icon={<Mail size={16} />} required autoComplete="email" />
        <div className="password-input-container">
          <Input label="Password" type={showPassword ? 'text' : 'password'} id="role-login-password" placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} icon={<Lock size={16} />} required autoComplete="current-password" />
          <button type="button" className="password-toggle-btn" onClick={() => setShowPassword(!showPassword)} aria-label={showPassword ? 'Hide password' : 'Show password'}>
            {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
          </button>
        </div>
        <div className="login-form-options">
          <label className="remember-me-label"><input type="checkbox" defaultChecked /><span>Remember me</span></label>
          <Link to="/forgot-password" className="auth-text-link text-sm">Forgot password?</Link>
        </div>
        <Button type="submit" variant="primary" size="lg" fullWidth disabled={isSubmitting} icon={isSubmitting ? undefined : <ArrowRight size={16} />} className="login-form-submit">
          {isSubmitting ? 'Signing in...' : 'Sign In'}
        </Button>
        <Button type="button" variant="outline" size="sm" fullWidth onClick={handleQuickDemoLogin} icon={<Zap size={14} />} style={{ marginTop: '8px' }}>
          One-Click Instant Demo Login
        </Button>
      </form>
      {config.registerPath && (
        <p className="form-register-prompt">
          <Link to={config.registerPath} className="form-register-link">{config.registerPrompt}</Link>
        </p>
      )}
    </div>
  );
};

export default RoleLoginForm;
