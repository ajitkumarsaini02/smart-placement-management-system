import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

/**
 * Route guard: Restricts access to users with authorized roles.
 * Redirects unauthorized users to their designated dashboard.
 */
const RoleBasedRoute = ({ children, allowedRoles = [] }) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // If user role is not authorized, redirect to their own role dashboard
  if (allowedRoles.length > 0 && !allowedRoles.includes(user.role)) {
    const roleRedirects = {
      student: '/student/dashboard',
      tpo: '/tpo/dashboard',
      recruiter: '/recruiter/dashboard',
      admin: '/tpo/dashboard',
    };

    const target = roleRedirects[user.role] || '/';
    return <Navigate to={target} replace />;
  }

  return children;
};

export default RoleBasedRoute;
