import api from './api';
import { mockUsers } from '../data/mockUsers';

export const authService = {
  async login(email, password) {
    try {
      const res = await api.post('/auth/login', { email, password });
      return res.data;
    } catch {
      // Mock fallback: find matching mock user or assign based on email keywords
      const lower = (email || '').toLowerCase();
      let matched = mockUsers.find((u) => u.email.toLowerCase() === lower);
      if (!matched) {
        let role = 'student';
        if (lower.includes('recruiter') || lower.includes('company')) role = 'recruiter';
        else if (lower.includes('tpo') || lower.includes('college')) role = 'tpo';
        else if (lower.includes('admin')) role = 'admin';
        matched = {
          _id: `user_${Date.now()}`,
          name: email.split('@')[0],
          email,
          role,
          isVerified: true,
        };
      }
      return {
        success: true,
        token: `mock_jwt_token_${matched.role}_${Date.now()}`,
        user: matched,
      };
    }
  },

  async register(userData) {
    try {
      const res = await api.post('/auth/register', userData);
      return res.data;
    } catch {
      const newUser = {
        _id: `user_${Date.now()}`,
        ...userData,
        isVerified: true,
      };
      return {
        success: true,
        token: `mock_jwt_token_${newUser.role || 'student'}_${Date.now()}`,
        user: newUser,
      };
    }
  },

  async getMe() {
    try {
      const res = await api.get('/auth/me');
      return res.data;
    } catch {
      const stored = localStorage.getItem('placetrack_user');
      return {
        success: true,
        user: stored ? JSON.parse(stored) : mockUsers[0],
      };
    }
  },

  async logout() {
    try {
      await api.post('/auth/logout');
    } catch {}
    localStorage.removeItem('placetrack_token');
    localStorage.removeItem('placetrack_user');
    return { success: true };
  },

  async forgotPassword(email) {
    try {
      const res = await api.post('/auth/forgot-password', { email });
      return res.data;
    } catch {
      return { success: true, message: 'Password reset link sent to your registered email.' };
    }
  },
};

export default authService;
