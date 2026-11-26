import api from './api';

/**
 * Application & Candidate Pipeline Service
 * Connects application submissions, pipeline reviews, status transitions,
 * and interview scheduling across Students, TPO, and Recruiters.
 */
export const applicationService = {
  // ==========================================
  // Student Actions
  // ==========================================

  /**
   * Submit application for an eligible job opening
   */
  async submitApplication(jobId, payload = {}) {
    const response = await api.post(`/student/apply/${jobId}`, payload);
    return response.data;
  },

  /**
   * Fetch current student's application history
   */
  async getStudentApplications() {
    const response = await api.get('/student/applications');
    return response.data;
  },

  // ==========================================
  // TPO Application Management
  // ==========================================

  /**
   * Fetch all student applications across college drives (with filtering & search)
   */
  async getTpoApplications(params = {}) {
    const response = await api.get('/tpo/applications', { params });
    return response.data;
  },

  /**
   * Update student application status by TPO
   */
  async updateTpoApplicationStatus(id, status, notes = '') {
    const response = await api.put(`/tpo/applications/${id}/status`, { status, notes });
    return response.data;
  },

  // ==========================================
  // Recruiter Candidate Management
  // ==========================================

  /**
   * Fetch candidates who applied to recruiter's job openings
   */
  async getRecruiterCandidates(params = {}) {
    const response = await api.get('/recruiter/candidates', { params });
    return response.data;
  },

  /**
   * Get detailed candidate profile, academics, skills, and resume preview
   */
  async getCandidateProfile(id) {
    const response = await api.get(`/recruiter/candidates/${id}`);
    return response.data;
  },

  /**
   * Transition candidate recruitment stage (applied -> under_review -> shortlisted -> selected/rejected)
   */
  async updateCandidateStatus(id, status, notes = '') {
    const response = await api.put(`/recruiter/candidates/${id}/status`, { status, notes });
    return response.data;
  },

  /**
   * Schedule candidate interview with date, round, and meeting link
   */
  async scheduleInterview(candidateId, interviewData) {
    const response = await api.post(`/recruiter/candidates/${candidateId}/schedule-interview`, interviewData);
    return response.data;
  },
};

export default applicationService;
