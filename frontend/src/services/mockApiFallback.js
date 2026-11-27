import { mockStore } from '../data/mockStore';
import { mockUsers } from '../data/mockUsers';

export const handleMockFallback = (config) => {
  const url = config.url || '';
  const wrap = (data) => ({
    data: { success: true, ...data, data },
    status: 200,
    statusText: 'OK',
    headers: {},
    config,
  });

  if (url.includes('/auth/login')) {
    let body = {};
    try { body = typeof config.data === 'string' ? JSON.parse(config.data) : (config.data || {}); } catch {}
    const email = (body.email || '').toLowerCase().trim();
    let user = mockUsers.find((u) => u.email.toLowerCase() === email);
    if (!user) {
      let role = 'student';
      if (email.includes('recruiter') || email.includes('company')) role = 'recruiter';
      else if (email.includes('tpo') || email.includes('college')) role = 'tpo';
      else if (email.includes('admin')) role = 'admin';
      user = { _id: `user_${Date.now()}`, name: email ? email.split('@')[0] : 'Demo User', email: email || `${role}@placetrack.com`, role, isVerified: true };
    }
    return wrap({ success: true, token: `mock_jwt_token_${user.role}_${Date.now()}`, user });
  }

  if (url.includes('/auth/me')) {
    const stored = localStorage.getItem('placetrack_user');
    return wrap({ success: true, user: stored ? JSON.parse(stored) : mockUsers[0] });
  }

  if (url.includes('/student/dashboard')) {
    const apps = mockStore.getApplications();
    return wrap({
      profile: mockStore.getStudent(),
      stats: { appliedCount: apps.length, shortlistedCount: apps.filter(a => a.status === 'shortlisted').length, interviewsCount: apps.filter(a => a.status === 'interview_scheduled').length, offersCount: apps.filter(a => a.status === 'selected').length },
      recentApplications: apps.slice(0, 5),
      recommendedJobs: mockStore.getJobs().slice(0, 3),
    });
  }

  if (url.includes('/tpo/dashboard') || url.includes('/tpo/analytics')) {
    return wrap({
      stats: { totalStudents: 450, totalCompanies: 65, activeJobs: 28, campusDrives: 14, totalApplications: 1240, placedStudents: 382, placementRate: 84.8, avgPackage: '7.8 LPA', highestPackage: '44.0 LPA' },
      recentDrives: mockStore.getDrives(),
      recentApplications: mockStore.getApplications().slice(0, 5),
    });
  }

  if (url.includes('/recruiter/dashboard')) {
    return wrap({
      stats: { totalJobs: 4, activeCandidates: 28, shortlisted: 12, scheduledInterviews: 6 },
      jobs: mockStore.getJobs().slice(0, 3),
      recentCandidates: mockStore.getStudents().slice(0, 5),
    });
  }

  if (url.includes('/applications')) return wrap({ applications: mockStore.getApplications() });
  if (url.includes('/profile') || url.includes('/students/me')) return wrap({ student: mockStore.getStudent() });
  if (url.includes('/jobs')) return wrap({ jobs: mockStore.getJobs() });
  if (url.includes('/notifications')) return wrap({ notifications: mockStore.getNotifications() });
  if (url.includes('/students')) return wrap({ students: mockStore.getStudents() });
  if (url.includes('/companies')) return wrap({ companies: mockStore.getCompanies() });
  if (url.includes('/drives')) return wrap({ drives: mockStore.getDrives() });
  if (url.includes('/candidates')) return wrap({ candidates: mockStore.getStudents() });

  return wrap({});
};

export default handleMockFallback;
