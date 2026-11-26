import api from './api';
import mockStore from '../data/mockStore';
import safeCall from './serviceHelper';

export const recruiterService = {
  getDashboard: () =>
    safeCall(() => api.get('/recruiter/dashboard'), () => {
      const jobs = mockStore.getJobs();
      const apps = mockStore.getApplications();
      return {
        success: true,
        data: {
          metrics: {
            activeJobs: jobs.filter((j) => j.status === 'published').length,
            totalApplicants: apps.length,
            shortlistedCandidates: apps.filter((a) => a.status === 'shortlisted').length,
            interviewsScheduled: apps.filter((a) => a.status === 'interview_scheduled').length,
          },
          recentApplicants: apps.slice(0, 5),
          activeDrives: jobs.slice(0, 3),
        },
      };
    }),

  getCompanyProfile: () =>
    safeCall(() => api.get('/recruiter/company'), () => ({
      success: true,
      data: mockStore.getCompanies()[0],
    })),

  updateCompanyProfile: (data) =>
    safeCall(() => api.put('/recruiter/company', data), () => ({
      success: true,
      data: mockStore.updateCompany('comp_1', data),
    })),

  getJobs: (params) =>
    safeCall(() => api.get('/recruiter/jobs', { params }), () => ({
      success: true,
      data: mockStore.getJobs(),
    })),

  createJob: (jobData) =>
    safeCall(() => api.post('/recruiter/jobs', jobData), () => ({
      success: true,
      data: mockStore.addJob(jobData),
    })),

  publishJob: (id) =>
    safeCall(() => api.put(`/recruiter/jobs/${id}/publish`), () => ({
      success: true,
      data: mockStore.updateJob(id, { status: 'published' }),
    })),

  closeJob: (id) =>
    safeCall(() => api.put(`/recruiter/jobs/${id}/close`), () => ({
      success: true,
      data: mockStore.updateJob(id, { status: 'closed' }),
    })),

  deleteJob: (id) =>
    safeCall(() => api.delete(`/recruiter/jobs/${id}`), () => ({
      success: true,
      message: 'Deleted',
    })),

  getCandidates: (params) =>
    safeCall(() => api.get('/recruiter/candidates', { params }), () => ({
      success: true,
      data: mockStore.getApplications(),
    })),

  getCandidateProfile: (id) =>
    safeCall(() => api.get(`/recruiter/candidates/${id}`), () => ({
      success: true,
      data: mockStore.getStudents().find((s) => s._id === id) || mockStore.getStudents()[0],
    })),

  updateCandidateStatus: (id, status, notes = '') =>
    safeCall(() => api.put(`/recruiter/candidates/${id}/status`, { status, notes }), () => ({
      success: true,
      data: mockStore.updateApplication(id, { status, notes }),
    })),

  scheduleInterview: (id, interviewData) =>
    safeCall(() => api.post(`/recruiter/candidates/${id}/schedule-interview`, interviewData), () => ({
      success: true,
      data: mockStore.updateApplication(id, {
        status: 'interview_scheduled',
        interviewDate: interviewData.scheduledDate,
        interviewLink: interviewData.meetingLink || 'https://meet.google.com/abc-demo',
      }),
    })),
};

export default recruiterService;
