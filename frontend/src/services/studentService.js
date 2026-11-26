import api from './api';
import mockStore from '../data/mockStore';
import safeCall from './serviceHelper';

export const studentService = {
  getDashboard: () =>
    safeCall(() => api.get('/student/dashboard'), () => {
      const std = mockStore.getStudent('std_1');
      const apps = mockStore.getApplications();
      const jobs = mockStore.getJobs();
      return {
        success: true,
        data: {
          profile: std,
          stats: {
            appliedCount: apps.length,
            shortlistedCount: apps.filter((a) => a.status === 'shortlisted').length,
            interviewsCount: apps.filter((a) => a.status === 'interview_scheduled').length,
            offersCount: apps.filter((a) => a.status === 'selected').length,
          },
          recentApplications: apps.slice(0, 5),
          recommendedJobs: jobs.slice(0, 3),
        },
      };
    }),

  getProfile: () =>
    safeCall(() => api.get('/student/profile'), () => ({ success: true, data: mockStore.getStudent('std_1') })),

  updateProfile: (profileData) =>
    safeCall(() => api.put('/student/profile', profileData), () => ({
      success: true,
      data: mockStore.updateStudent('std_1', profileData),
    })),

  uploadResume: (file) => {
    const formData = new FormData();
    formData.append('resume', file);
    return safeCall(
      () => api.post('/student/resume', formData, { headers: { 'Content-Type': 'multipart/form-data' } }),
      () => {
        const resume = {
          fileName: file.name || 'resume.pdf',
          fileUrl: '#preview',
          fileSize: `${(file.size / (1024 * 1024)).toFixed(1)} MB`,
          updatedAt: new Date().toISOString().split('T')[0],
        };
        mockStore.updateStudent('std_1', { resume });
        return { success: true, data: { resume } };
      }
    );
  },

  deleteResume: () =>
    safeCall(() => api.delete('/student/resume'), () => {
      mockStore.updateStudent('std_1', { resume: null });
      return { success: true, message: 'Deleted' };
    }),

  getOpportunities: (params) =>
    safeCall(() => api.get('/student/opportunities', { params }), () => ({ success: true, data: mockStore.getJobs() })),

  applyToJob: (jobId, payload = {}) =>
    safeCall(() => api.post(`/student/apply/${jobId}`, payload), () => {
      const job = mockStore.getJobs().find((j) => j._id === jobId) || {};
      const newApp = mockStore.addApplication({
        student: 'std_1',
        studentName: 'Ajit Kumar Saini',
        job: jobId,
        jobTitle: job.title || 'Software Engineer',
        companyName: job.companyName || 'Corporate Partner',
        packageLPA: job.packageLPA || 12.0,
        status: 'applied',
      });
      return { success: true, data: newApp, message: 'Application submitted!' };
    }),

  getApplications: () =>
    safeCall(() => api.get('/student/applications'), () => ({ success: true, data: mockStore.getApplications() })),

  getNotifications: () =>
    safeCall(() => api.get('/student/notifications'), () => ({ success: true, data: mockStore.getNotifications() })),

  markNotificationAsRead: (id) =>
    safeCall(() => api.put(`/student/notifications/${id}/read`), () => ({
      success: true,
      data: mockStore.markNotificationRead(id),
    })),

  markAllNotificationsAsRead: () =>
    safeCall(() => api.put('/student/notifications/read-all'), () => ({ success: true, message: 'All read' })),
};

export default studentService;
