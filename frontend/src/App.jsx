import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserLayout from './pages/UserLayout';
import LandingPage from './pages/LandingPage';
import DrivesPage from './pages/DrivesPage';
import ApplicationsPage from './pages/ApplicationsPage';
import ProfilePage from './pages/ProfilePage';
import SettingsPage from './pages/SettingsPage';
import NotFoundPage from './pages/NotFoundPage';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route index element={<LandingPage />} />
          <Route path="/drives" element={<DrivesPage />} />
          <Route path="/myapplications" element={<ApplicationsPage />} />
          <Route path="/myprofile" element={<ProfilePage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
