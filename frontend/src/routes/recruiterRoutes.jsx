import React from 'react';
import { Route } from 'react-router-dom';
import RecruiterDashboard from '../pages/recruiter/dashboard/RecruiterDashboard';
import CompanyProfilePage from '../pages/recruiter/CompanyProfilePage';
import ManageJobs from '../pages/recruiter/ManageJobs';
import Candidates from '../pages/recruiter/Candidates';
import Recruitment from '../pages/recruiter/Recruitment';
import ProtectedRoute from './ProtectedRoute';
import RoleBasedRoute from './RoleBasedRoute';

const withRecruiterGuard = (Component) => (
  <ProtectedRoute>
    <RoleBasedRoute allowedRoles={['recruiter', 'admin']}>
      <Component />
    </RoleBasedRoute>
  </ProtectedRoute>
);

export const getRecruiterRoutes = () => [
  <Route key="rec-dash" path="/recruiter/dashboard" element={withRecruiterGuard(RecruiterDashboard)} />,
  <Route key="rec-comp" path="/recruiter/company" element={withRecruiterGuard(CompanyProfilePage)} />,
  <Route key="rec-jobs" path="/recruiter/jobs" element={withRecruiterGuard(ManageJobs)} />,
  <Route key="rec-cand" path="/recruiter/candidates" element={withRecruiterGuard(Candidates)} />,
  <Route key="rec-rec" path="/recruiter/recruitment" element={withRecruiterGuard(Recruitment)} />,
];

export default getRecruiterRoutes;
