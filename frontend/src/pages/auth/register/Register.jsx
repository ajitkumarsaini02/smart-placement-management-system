import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Button from '../../../components/common/Button';
import Input from '../../../components/common/Input';
import { User, Mail, Lock, ArrowRight, ArrowLeft, AlertCircle } from 'lucide-react';
import RegisterRoleSelector from './RegisterRoleSelector';
import RegisterHeader from './RegisterHeader';

const redirectRoleMap = { student: '/student/dashboard', recruiter: '/recruiter/dashboard', tpo: '/tpo/dashboard' };

const Register = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '', confirmPassword: '', role: 'student' });
  const [formError, setFormError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setFormError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError('');
    const { name, email, password, confirmPassword, role } = formData;
    if (!name || !email || !password || !confirmPassword) return setFormError('Please fill out all required fields.');
    if (password.length < 6) return setFormError('Password must be at least 6 characters long.');
    if (password !== confirmPassword) return setFormError('Passwords do not match.');

    setIsSubmitting(true);
    const result = await register({ name, email, password, confirmPassword, role });
    setIsSubmitting(false);

    if (result.success && result.user) {
      navigate(redirectRoleMap[result.user.role] || '/', { replace: true });
    } else {
      setFormError(result.message || 'Registration failed.');
    }
  };

  return (
    <div className="auth-page-container">
      <div className="auth-glow-top" /><div className="auth-glow-bottom" />
      <div className="auth-card auth-card-wide">
        <RegisterHeader />
        {formError && (
          <div className="auth-error-alert"><AlertCircle size={18} className="error-alert-icon" /><span>{formError}</span></div>
        )}
        <form onSubmit={handleSubmit} className="auth-form" noValidate>
          <Input label="Full Name" name="name" id="register-name" type="text" placeholder="Ajit Kumar" value={formData.name} onChange={handleChange} icon={<User size={16} />} required autoComplete="name" />
          <Input label="Email Address" name="email" id="register-email" type="email" placeholder="student@abes.ac.in" value={formData.email} onChange={handleChange} icon={<Mail size={16} />} required autoComplete="email" />
          <RegisterRoleSelector role={formData.role} onChange={handleChange} />
          <div className="form-row-2col">
            <Input label="Password" name="password" id="register-password" type="password" placeholder="Min 6 characters" value={formData.password} onChange={handleChange} icon={<Lock size={16} />} required autoComplete="new-password" />
            <Input label="Confirm Password" name="confirmPassword" id="register-confirm-password" type="password" placeholder="Re-enter password" value={formData.confirmPassword} onChange={handleChange} icon={<Lock size={16} />} required autoComplete="new-password" />
          </div>
          <Button type="submit" variant="primary" size="lg" fullWidth disabled={isSubmitting} icon={isSubmitting ? undefined : <ArrowRight size={16} />}>
            {isSubmitting ? 'Creating account...' : 'Create Account'}
          </Button>
        </form>
        <div className="auth-card-footer">
          <p className="auth-footer-text">Already have an account? <Link to="/login" className="auth-text-link font-semibold">Sign in</Link></p>
          <Link to="/" className="back-to-home-link"><ArrowLeft size={14} /> Back to PlaceTrack Home</Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
