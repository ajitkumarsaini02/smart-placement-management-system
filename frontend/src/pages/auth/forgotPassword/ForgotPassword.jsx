import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import authService from '../../../services/authService';
import Button from '../../../components/common/Button';
import Input from '../../../components/common/Input';
import { Briefcase, Mail, ArrowRight, ArrowLeft, AlertCircle } from 'lucide-react';
import ForgotSuccessBox from './ForgotSuccessBox';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (!email) {
      setError('Please provide your registered email address.');
      return;
    }
    setIsSubmitting(true);
    try {
      await authService.forgotPassword(email);
      setIsSubmitted(true);
    } catch (err) {
      setError(err.message || 'Failed to dispatch reset instructions.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="auth-page-container">
      <div className="auth-glow-top" />
      <div className="auth-glow-bottom" />
      <div className="auth-card">
        <div className="auth-card-header">
          <Link to="/" className="auth-brand-logo">
            <div className="logo-icon-wrapper"><Briefcase size={20} className="logo-icon" /></div>
            <span className="logo-brand">Place<span className="logo-highlight">Track</span></span>
          </Link>
          <h2 className="auth-title">Reset your password</h2>
          <p className="auth-subtitle">Enter your institutional email address to recover your account</p>
        </div>

        {error && (
          <div className="auth-error-alert">
            <AlertCircle size={18} className="error-alert-icon" />
            <span>{error}</span>
          </div>
        )}

        {isSubmitted ? (
          <ForgotSuccessBox email={email} />
        ) : (
          <form onSubmit={handleSubmit} className="auth-form" noValidate>
            <Input
              label="Registered Email Address"
              type="email"
              id="reset-email"
              placeholder="you@placetrack.edu"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              icon={<Mail size={16} />}
              required
              autoComplete="email"
            />
            <Button
              type="submit"
              variant="primary"
              size="lg"
              fullWidth
              disabled={isSubmitting}
              icon={isSubmitting ? undefined : <ArrowRight size={16} />}
            >
              {isSubmitting ? 'Sending instructions...' : 'Send Reset Instructions'}
            </Button>
          </form>
        )}

        <div className="auth-card-footer">
          <Link to="/login" className="back-to-home-link">
            <ArrowLeft size={14} /> Back to Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
