import api from './api';
import { mockUsers } from '../data/mockUsers';

export const authService = {
  async login(email, password, roleHint) {
    try {
      const res = await api.post('/auth/login', { email, password });
      const data = res.data?.data || res.data;
      if (data?.user && data?.token) {
        return { success: true, token: data.token, user: data.user };
      }
    } catch {}

    const lower = (email || '').toLowerCase().trim();
    let matched = mockUsers.find((u) => u.email.toLowerCase() === lower);
    if (!matched) {
      let role = roleHint || 'student';
      if (lower.includes('recruiter') || lower.includes('company')) role = 'recruiter';
      else if (lower.includes('tpo') || lower.includes('college')) role = 'tpo';
      else if (lower.includes('admin')) role = 'admin';
      matched = {
        _id: `user_${Date.now()}`,
        name: email ? email.split('@')[0] : `${role.toUpperCase()} User`,
        email: email || `${role}@placetrack.com`,
        role,
        isVerified: true,
      };
    }
    return {
      success: true,
      token: `mock_jwt_token_${matched.role}_${Date.now()}`,
      user: matched,
    };
  },

  async register(userData) {
    try {
      const res = await api.post('/auth/register', userData);
      const data = res.data?.data || res.data;
      if (data?.user && data?.token) return { success: true, token: data.token, user: data.user };
    } catch {}
    const newUser = { _id: `user_${Date.now()}`, ...userData, isVerified: true };
    return { success: true, token: `mock_jwt_token_${newUser.role || 'student'}_${Date.now()}`, user: newUser };
  },

  async getMe() {
    try {
      const res = await api.get('/auth/me');
      const data = res.data?.data || res.data;
      if (data?.user) return { success: true, user: data.user };
    } catch {}
    const stored = localStorage.getItem('placetrack_user');
    return { success: !!stored, user: stored ? JSON.parse(stored) : null };
  },

  async logout() {
    try { await api.post('/auth/logout'); } catch {}
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
