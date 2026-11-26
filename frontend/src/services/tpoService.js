import api from './api';

/**
 * TPO Administration Service
 * Provides access to institutional placement metrics, student registry,
 * company verifications, placement drives, live analytics, and CSV reports.
 */
export const tpoService = {
  /**
   * Fetch real database-backed TPO dashboard statistics
   */
  async getDashboard() {
    const response = await api.get('/tpo/dashboard');
    return response.data;
  },

  /**
   * Fetch students with search and filtering
   */
  async getStudents(params = {}) {
    const response = await api.get('/tpo/students', { params });
    return response.data;
  },

  /**
   * Toggle student verification status
   */
  async verifyStudent(studentId, isVerified) {
    const response = await api.put(`/tpo/students/${studentId}/verify`, { isVerified });
    return response.data;
  },

  /**
   * Fetch TPO analytics & branch-wise placement breakdown
   */
  async getAnalytics() {
    const response = await api.get('/tpo/analytics');
    return response.data;
  },

  /**
   * Download CSV reports from backend
   */
  async exportReport(type) {
    const response = await api.get(`/tpo/reports/${type}`, {
      responseType: 'blob',
    });
    return response.data;
  },
};

export default tpoService;
