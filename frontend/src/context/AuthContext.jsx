import React, { useState, useEffect } from 'react';
import api from '../services/api';
import authService from '../services/authService';
import AuthContext from './authContextDef';

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    try {
      const u = localStorage.getItem('placetrack_user');
      return u ? JSON.parse(u) : null;
    } catch { return null; }
  });
  const [token, setToken] = useState(() => localStorage.getItem('placetrack_token') || null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (token) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      localStorage.setItem('placetrack_token', token);
    } else {
      delete api.defaults.headers.common['Authorization'];
      localStorage.removeItem('placetrack_token');
    }
  }, [token]);

  useEffect(() => {
    const init = async () => {
      try {
        const res = await authService.getMe();
        if (res?.user) setUser(res.user);
      } catch { setUser(null); } finally { setLoading(false); }
    };
    init();
  }, []);

  const login = async (email, password, roleHint) => {
    setLoading(true);
    setError(null);
    try {
      const res = await authService.login(email, password, roleHint);
      if (res?.user) {
        setUser(res.user);
        setToken(res.token);
        localStorage.setItem('placetrack_user', JSON.stringify(res.user));
        return { success: true, user: res.user };
      }
      return { success: false, message: 'Invalid credentials.' };
    } catch (err) {
      const msg = err.message || 'Login failed';
      setError(msg);
      return { success: false, message: msg };
    } finally { setLoading(false); }
  };

  const register = async (userData) => {
    setLoading(true);
    setError(null);
    try {
      const res = await authService.register(userData);
      if (res?.user) {
        setUser(res.user);
        setToken(res.token);
        localStorage.setItem('placetrack_user', JSON.stringify(res.user));
        return { success: true, user: res.user };
      }
      return { success: false, message: 'Registration failed' };
    } catch (err) {
      const msg = err.message || 'Registration failed';
      setError(msg);
      return { success: false, message: msg };
    } finally { setLoading(false); }
  };

  const logout = async () => {
    await authService.logout();
    setUser(null);
    setToken(null);
    window.location.href = '/';
  };

  const value = { user, token, isAuthenticated: !!user, loading, error, login, register, logout, clearError: () => setError(null) };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContext;
