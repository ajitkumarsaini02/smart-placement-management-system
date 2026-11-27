import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/auth/login/Login';
import Register from '../pages/auth/register/Register';
import ForgotPassword from '../pages/auth/forgotPassword/ForgotPassword';
import getStudentRoutes from './studentRoutes';
import getTpoRoutes from './tpoRoutes';
import getRecruiterRoutes from './recruiterRoutes';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/forgot-password" element={<ForgotPassword />} />
    {getStudentRoutes()}
    {getTpoRoutes()}
    {getRecruiterRoutes()}
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes>
);

export default AppRoutes;
