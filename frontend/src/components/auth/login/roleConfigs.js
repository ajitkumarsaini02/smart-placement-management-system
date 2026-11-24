export const ROLE_CONFIGS = {
  student: {
    title: 'Student Sign In',
    subtitle: 'Access placement drives, jobs, and verified credentials',
    badge: 'Student Portal',
    placeholder: 'student@college.edu',
    registerPath: '/register?role=student',
    registerPrompt: 'Need a student account? Register here',
  },
  tpo: {
    title: 'College / TPO Sign In',
    subtitle: 'Manage institutional placement drives, students, and companies',
    badge: 'College / TPO Portal',
    placeholder: 'tpo@college.edu',
    registerPath: null,
    registerPrompt: 'TPO accounts are provisioned by institution administrator',
  },
  recruiter: {
    title: 'Recruiter Sign In',
    subtitle: 'Post openings, review verified candidates, and schedule interviews',
    badge: 'Recruiter Portal',
    placeholder: 'recruiter@company.com',
    registerPath: '/register?role=recruiter',
    registerPrompt: 'New hiring partner? Register your company',
  },
  admin: {
    title: 'Super Admin Sign In',
    subtitle: 'System governance, institutional records, and master controls',
    badge: 'Super Admin Access',
    placeholder: 'admin@college.edu',
    registerPath: null,
    registerPrompt: null,
  },
};
export default ROLE_CONFIGS;
