import React from 'react';
import { Route } from 'react-router-dom';
import TPODashboard from '../pages/tpo/dashboard/TPODashboard';
import Students from '../pages/tpo/Students';
import Companies from '../pages/tpo/Companies';
import PlacementDrives from '../pages/tpo/PlacementDrives';
import Applications from '../pages/tpo/Applications';
import Reports from '../pages/tpo/Reports';
import ProtectedRoute from './ProtectedRoute';
import RoleBasedRoute from './RoleBasedRoute';

const withTpoGuard = (Component) => (
  <ProtectedRoute>
    <RoleBasedRoute allowedRoles={['tpo', 'admin']}>
      <Component />
    </RoleBasedRoute>
  </ProtectedRoute>
);

export const getTpoRoutes = () => [
  <Route key="tpo-dash" path="/tpo/dashboard" element={withTpoGuard(TPODashboard)} />,
  <Route key="tpo-std" path="/tpo/students" element={withTpoGuard(Students)} />,
  <Route key="tpo-comp" path="/tpo/companies" element={withTpoGuard(Companies)} />,
  <Route key="tpo-drives" path="/tpo/drives" element={withTpoGuard(PlacementDrives)} />,
  <Route key="tpo-apps" path="/tpo/applications" element={withTpoGuard(Applications)} />,
  <Route key="tpo-rep" path="/tpo/reports" element={withTpoGuard(Reports)} />,
];

export default getTpoRoutes;
