import api from './api';

/**
 * Unified Notification Service
 * Connects database-backed real-time notices for Students, TPO, and Recruiters
 */
export const notificationService = {
  /**
   * Fetch paginated user notifications with optional filtering
   * @param {Object} params - { page, limit, isRead, type }
   */
  async getNotifications(params = {}) {
    const response = await api.get('/notifications', { params });
    return response.data;
  },

  /**
   * Fetch unread notification count
   */
  async getUnreadCount() {
    const response = await api.get('/notifications/unread-count');
    return response.data;
  },

  /**
   * Mark a specific notification as read
   */
  async markAsRead(id) {
    const response = await api.put(`/notifications/${id}/read`);
    return response.data;
  },

  /**
   * Mark all unread notifications as read
   */
  async markAllAsRead() {
    const response = await api.put('/notifications/read-all');
    return response.data;
  },
};

export default notificationService;
