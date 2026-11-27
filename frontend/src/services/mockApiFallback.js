import { mockStore } from '../data/mockStore';
import { mockUsers } from '../data/mockUsers';

export const handleMockFallback = (config) => {
  const url = config.url || '';
  const wrap = (payload, extra = {}) => {
    let body;
    if (Array.isArray(payload)) {
      body = { success: true, count: payload.length, data: payload, ...extra };
    } else {
      body = { success: true, ...payload, data: payload?.data || payload, ...extra };
    }
    return { data: body, status: 200, statusText: 'OK', headers: {}, config };
  };

  if (url.includes('/auth/login')) {
    let body = {};
    try { body = typeof config.data === 'string' ? JSON.parse(config.data) : (config.data || {}); } catch {}
    const email = (body.email || '').toLowerCase().trim();
    let user = mockUsers.find((u) => u.email.toLowerCase() === email);
    if (!user) {
      let role = email.includes('recruiter') ? 'recruiter' : email.includes('tpo') ? 'tpo' : email.includes('admin') ? 'admin' : 'student';
      user = { _id: `user_${Date.now()}`, name: email ? email.split('@')[0] : 'Demo User', email: email || `${role}@placetrack.com`, role, isVerified: true };
    }
    return wrap({ success: true, token: `mock_jwt_token_${user.role}_${Date.now()}`, user });
  }

  if (url.includes('/auth/me')) {
    const stored = localStorage.getItem('placetrack_user');
    return wrap({ success: !!stored, user: stored ? JSON.parse(stored) : null });
  }

  if (url.includes('/student/dashboard')) {
    const std = mockStore.getStudent(), apps = mockStore.getApplications(), jobs = mockStore.getJobs();
    const statsData = { profileCompletion: 85, appliedCount: apps.length, shortlistedCount: 1, interviewsCount: 1, offersCount: 1 };
    return wrap({
      student: std, profile: std, metrics: statsData, stats: statsData,
      eligibleJobs: jobs.slice(0, 4), recommendedJobs: jobs.slice(0, 4),
      upcomingDrives: mockStore.getDrives().slice(0, 3), recentApplications: apps.slice(0, 5), recentNotifications: mockStore.getNotifications().slice(0, 5)
    });
  }

  if (url.includes('/tpo/analytics')) {
    const analytics = {
      overview: { totalStudents: 450, placedStudents: 382, unplacedStudents: 68, placementRate: 84.8, highestPackage: '44.0', avgPackage: '7.8', totalCompanies: 65, totalJobs: 28, totalApplications: 1240 },
      branchWiseStats: [
        { department: 'Computer Science & Engineering', total: 180, placed: 165, unplaced: 15, avgCgpa: '8.4', percentage: 91.6 },
        { department: 'Information Technology', total: 120, placed: 104, unplaced: 16, avgCgpa: '8.1', percentage: 86.7 },
        { department: 'Electronics & Communication', total: 90, placed: 72, unplaced: 18, avgCgpa: '7.7', percentage: 80.0 },
        { department: 'Mechanical Engineering', total: 60, placed: 41, unplaced: 19, avgCgpa: '7.3', percentage: 68.3 }
      ],
      statusDistribution: [
        { status: 'applied', count: 420 }, { status: 'shortlisted', count: 280 }, { status: 'interview_scheduled', count: 160 }, { status: 'selected', count: 382 }
      ],
      topCompanies: [
        { name: 'Google Cloud India', applicants: 180, offers: 14 }, { name: 'Microsoft IDC', applicants: 210, offers: 18 }, { name: 'Amazon AWS', applicants: 195, offers: 12 }, { name: 'TCS Digital', applicants: 260, offers: 45 }
      ]
    };
    return wrap(analytics, { analytics });
  }

  if (url.includes('/tpo/dashboard')) {
    const statsObj = { totalStudents: 450, totalCompanies: 65, activeJobs: 28, campusDrives: 14, totalApplications: 1240, placedStudents: 382, placementRate: 84.8, avgPackage: '7.8 LPA', highestPackage: '44.0 LPA' };
    return wrap({ statistics: statsObj, stats: statsObj, recentDrives: mockStore.getDrives(), recentApplications: mockStore.getApplications().slice(0, 5), recentStudents: mockStore.getStudents().slice(0, 5) });
  }

  if (url.includes('/recruiter/dashboard')) {
    const jobs = mockStore.getJobs(), apps = mockStore.getApplications();
    const statsObj = { totalJobs: jobs.length, activeJobs: jobs.filter(j => j.status === 'published').length, totalApplicants: apps.length, shortlisted: 3, interviewsScheduled: 2, selected: 1 };
    return wrap({ company: mockStore.getCompanies()[0] || { name: 'Google Cloud India', isVerified: true }, stats: statsObj, jobs: jobs.slice(0, 3), recentCandidates: mockStore.getStudents().slice(0, 5), recentApplicants: apps.slice(0, 5) });
  }

  if (url.includes('/recruiter/company') || url.includes('/company')) {
    const comp = mockStore.getCompanies()[0] || { name: 'Google Cloud India', isVerified: true };
    return wrap(comp, { company: comp });
  }

  if (url.includes('/candidates')) {
    const apps = mockStore.getApplications();
    return wrap(apps, { candidates: apps, applications: apps });
  }

  if (url.includes('/applications')) return wrap(mockStore.getApplications(), { applications: mockStore.getApplications() });
  if (url.includes('/profile') || url.includes('/students/me')) return wrap(mockStore.getStudent(), { student: mockStore.getStudent() });
  if (url.includes('/jobs') || url.includes('/opportunities')) return wrap(mockStore.getJobs(), { jobs: mockStore.getJobs() });
  if (url.includes('/notifications')) return wrap(mockStore.getNotifications(), { notifications: mockStore.getNotifications() });
  if (url.includes('/students')) return wrap(mockStore.getStudents(), { students: mockStore.getStudents() });
  if (url.includes('/companies')) return wrap(mockStore.getCompanies(), { companies: mockStore.getCompanies() });
  if (url.includes('/drives')) return wrap(mockStore.getDrives(), { drives: mockStore.getDrives() });

  return wrap({});
};

export default handleMockFallback;
