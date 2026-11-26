import api from './api';

/**
 * Company Service
 * Handles company profiles, verification, listings, and updates
 * for both TPO officers and Recruiter corporate managers.
 */
export const companyService = {
  /**
   * Fetch company directory (for TPO management)
   */
  async getCompanies(params = {}) {
    const response = await api.get('/tpo/companies', { params });
    return response.data;
  },

  /**
   * Get specific company profile details by ID
   */
  async getCompanyById(id) {
    const response = await api.get(`/tpo/companies/${id}`);
    return response.data;
  },

  /**
   * Register a new partner company (TPO)
   */
  async createCompany(companyData) {
    const response = await api.post('/tpo/companies', companyData);
    return response.data;
  },

  /**
   * Update existing company details (TPO)
   */
  async updateCompany(id, companyData) {
    const response = await api.put(`/tpo/companies/${id}`, companyData);
    return response.data;
  },

  /**
   * Toggle or update company verification status (TPO)
   */
  async verifyCompany(id, isVerified) {
    const response = await api.put(`/tpo/companies/${id}/verify`, { isVerified });
    return response.data;
  },

  /**
   * Get logged-in recruiter's linked corporate company profile
   */
  async getRecruiterCompanyProfile() {
    const response = await api.get('/recruiter/company');
    return response.data;
  },

  /**
   * Update logged-in recruiter's linked corporate company profile
   */
  async updateRecruiterCompanyProfile(profileData) {
    const response = await api.put('/recruiter/company', profileData);
    return response.data;
  },
};

export default companyService;
