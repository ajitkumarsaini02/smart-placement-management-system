import api from './api';
import mockStore from '../data/mockStore';
import safeCall from './serviceHelper';

export const jobService = {
  getStudentOpportunities: (params) =>
    safeCall(() => api.get('/student/opportunities', { params }), () => ({
      success: true,
      count: mockStore.getJobs().length,
      data: mockStore.getJobs(),
    })),

  getRecruiterJobs: (params) =>
    safeCall(() => api.get('/recruiter/jobs', { params }), () => ({
      success: true,
      data: mockStore.getJobs(),
    })),

  getJobById: (id) =>
    safeCall(() => api.get(`/recruiter/jobs/${id}`), () => ({
      success: true,
      data: mockStore.getJobs().find((j) => j._id === id),
    })),

  createJob: (jobData) =>
    safeCall(() => api.post('/recruiter/jobs', jobData), () => ({
      success: true,
      data: mockStore.addJob(jobData),
    })),

  updateJob: (id, jobData) =>
    safeCall(() => api.put(`/recruiter/jobs/${id}`, jobData), () => ({
      success: true,
      data: mockStore.updateJob(id, jobData),
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

  getPlacementDrives: (params) =>
    safeCall(() => api.get('/tpo/drives', { params }), () => ({
      success: true,
      data: mockStore.getDrives(),
    })),

  createPlacementDrive: (driveData) =>
    safeCall(() => api.post('/tpo/drives', driveData), () => ({
      success: true,
      data: mockStore.addDrive(driveData),
    })),

  updatePlacementDrive: (id, driveData) =>
    safeCall(() => api.put(`/tpo/drives/${id}`, driveData), () => ({
      success: true,
      message: 'Updated',
    })),

  cancelPlacementDrive: (id) =>
    safeCall(() => api.delete(`/tpo/drives/${id}`), () => ({
      success: true,
      message: 'Cancelled',
    })),
};

export default jobService;
