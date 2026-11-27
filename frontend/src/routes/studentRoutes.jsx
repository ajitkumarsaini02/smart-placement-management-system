import React from 'react';
import { Route } from 'react-router-dom';
import StudentDashboard from '../pages/student/dashboard/StudentDashboard';
import MyProfile from '../pages/student/profile/MyProfile';
import Opportunities from '../pages/student/Opportunities';
import ApplicationHistory from '../pages/student/ApplicationHistory';
import Notifications from '../pages/student/notifications/Notifications';
import ProtectedRoute from './ProtectedRoute';
import RoleBasedRoute from './RoleBasedRoute';

const withStudentGuard = (Component) => (
  <ProtectedRoute>
    <RoleBasedRoute allowedRoles={['student']}>
      <Component />
    </RoleBasedRoute>
  </ProtectedRoute>
);

export const getStudentRoutes = () => [
  <Route key="std-dash" path="/student/dashboard" element={withStudentGuard(StudentDashboard)} />,
  <Route key="std-prof" path="/student/profile" element={withStudentGuard(MyProfile)} />,
  <Route key="std-opp" path="/student/opportunities" element={withStudentGuard(Opportunities)} />,
  <Route key="std-apps" path="/student/applications" element={withStudentGuard(ApplicationHistory)} />,
  <Route key="std-notif" path="/student/notifications" element={withStudentGuard(Notifications)} />,
];

export default getStudentRoutes;
