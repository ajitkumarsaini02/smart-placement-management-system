import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import useAuth from '../../../hooks/useAuth';
import LoginShowcase from '../../../components/auth/login/LoginShowcase';
import RoleSelector from '../../../components/auth/login/RoleSelector';
import RoleLoginForm from '../../../components/auth/login/RoleLoginForm';
import SplitAuthFooter from '../../../components/auth/login/SplitAuthFooter';
import '../../../styles/split-auth.css';

const redirectRoleMap = {
  student: '/student/dashboard',
  tpo: '/tpo/dashboard',
  recruiter: '/recruiter/dashboard',
  admin: '/tpo/dashboard',
};

const Login = () => {
  const [selectedRole, setSelectedRole] = useState(null);
  const [formError, setFormError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (email, password) => {
    setFormError('');
    setIsSubmitting(true);
    const result = await login(email, password, selectedRole);
    setIsSubmitting(false);

    if (result.success && result.user) {
      const from = location.state?.from?.pathname;
      navigate(from || redirectRoleMap[result.user.role] || '/', { replace: true });
    } else {
      setFormError(result.message || 'Invalid credentials.');
    }
  };

  return (
    <div className="split-auth-page">
      <LoginShowcase />
      <div className="split-auth-right">
        <div className="split-auth-top-bar">
          <Link to="/" className="auth-back-home-link" title="Return to PlaceTrack Landing Page">
            <ArrowLeft size={15} /> Back to Home
          </Link>
        </div>

        {!selectedRole ? (
          <RoleSelector onSelectRole={(role) => { setSelectedRole(role); setFormError(''); }} />
        ) : (
          <RoleLoginForm
            role={selectedRole}
            onBack={() => { setSelectedRole(null); setFormError(''); }}
            onSubmit={handleSubmit}
            isSubmitting={isSubmitting}
            formError={formError}
          />
        )}

        <SplitAuthFooter />
      </div>
    </div>
  );
};

export default Login;
