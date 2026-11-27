import axios from 'axios';
import { handleMockFallback } from './mockApiFallback';

const api = axios.create({
  baseURL:
    import.meta.env.VITE_API_URL ||
    import.meta.env.VITE_API_BASE_URL ||
    (import.meta.env.PROD ? '/api/v1' : 'http://localhost:5000/api/v1'),
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 5000,
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('placetrack_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => {
    if (
      typeof response.data === 'string' &&
      (response.data.includes('<!DOCTYPE') || response.data.includes('<html'))
    ) {
      const fallback = handleMockFallback(response.config || {});
      if (fallback) return fallback;
    }
    return response;
  },
  (error) => {
    if (
      !error.response ||
      error.response.status === 404 ||
      error.response.status >= 500 ||
      error.code === 'ERR_NETWORK' ||
      error.message?.includes('Network Error') ||
      error.message?.includes('timeout')
    ) {
      const fallbackResponse = handleMockFallback(error.config || {});
      if (fallbackResponse) {
        return Promise.resolve(fallbackResponse);
      }
    }

    const message =
      error.response?.data?.message ||
      error.response?.data?.error ||
      error.message ||
      'An unexpected network error occurred';

    return Promise.reject(new Error(message));
  }
);

export default api;
