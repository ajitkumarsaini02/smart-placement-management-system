import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import Button from '../../../components/common/Button';

export const ForgotSuccessBox = ({ email }) => (
  <div className="auth-success-box">
    <CheckCircle2 size={42} className="success-icon" />
    <h3 className="success-title">Check your inbox</h3>
    <p className="success-desc">
      If an account is associated with <strong>{email}</strong>, we have sent instructions to reset your password.
    </p>
    <Button href="/login" variant="primary" size="md" fullWidth>
      Return to Login
    </Button>
  </div>
);

export default ForgotSuccessBox;
