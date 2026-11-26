import { mockStore } from '../data/mockStore';

export const handleMockFallback = (config) => {
  const url = config.url || '';
  const method = (config.method || 'get').toLowerCase();

  const wrap = (data) => ({
    data: { success: true, data },
    status: 200,
    statusText: 'OK',
    headers: {},
    config,
  });

  if (url.includes('/student/applications')) {
    return wrap({ applications: mockStore.getApplications() });
  }
  if (url.includes('/student/profile') || url.includes('/students/me')) {
    return wrap({ student: mockStore.getStudent() });
  }
  if (url.includes('/student/jobs') || url.includes('/jobs')) {
    return wrap({ jobs: mockStore.getJobs() });
  }
  if (url.includes('/student/notifications') || url.includes('/notifications')) {
    return wrap({ notifications: mockStore.getNotifications() });
  }
  if (url.includes('/tpo/students')) {
    return wrap({ students: mockStore.getStudents() });
  }
  if (url.includes('/tpo/companies') || url.includes('/companies')) {
    return wrap({ companies: mockStore.getCompanies() });
  }
  if (url.includes('/tpo/drives') || url.includes('/drives')) {
    return wrap({ drives: mockStore.getDrives() });
  }
  if (url.includes('/tpo/applications') || url.includes('/applications')) {
    return wrap({ applications: mockStore.getApplications() });
  }
  if (url.includes('/recruiter/candidates')) {
    return wrap({ candidates: mockStore.getStudents() });
  }
  if (url.includes('/recruiter/jobs')) {
    return wrap({ jobs: mockStore.getJobs() });
  }

  // Generic fallback so frontend never breaks
  return wrap({});
};

export default handleMockFallback;
