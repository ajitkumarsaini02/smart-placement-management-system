import { mockStudents } from './mockStudents';
import { mockCompanies } from './mockCompanies';
import { mockJobs } from './mockJobs';
import { mockApplications } from './mockApplications';
import { mockDrives } from './mockDrives';
import { mockNotifications } from './mockNotifications';

const get = (key, fallback) => {
  try {
    const item = localStorage.getItem(`pt_${key}`);
    return item ? JSON.parse(item) : fallback;
  } catch {
    return fallback;
  }
};

const set = (key, val) => {
  try {
    localStorage.setItem(`pt_${key}`, JSON.stringify(val));
  } catch {}
};

export const mockStore = {
  getStudents: () => get('students', mockStudents),
  saveStudents: (data) => set('students', data),
  getStudent: (id) => {
    const list = get('students', mockStudents);
    return list.find((s) => s._id === id || s.user === id) || list[0];
  },
  updateStudent: (id, updates) => {
    const list = get('students', mockStudents).map((s) =>
      s._id === id || s.user === id ? { ...s, ...updates } : s
    );
    set('students', list);
    return list.find((s) => s._id === id || s.user === id);
  },

  getCompanies: () => get('companies', mockCompanies),
  updateCompany: (id, updates) => {
    const list = get('companies', mockCompanies).map((c) =>
      c._id === id ? { ...c, ...updates } : c
    );
    set('companies', list);
    return list.find((c) => c._id === id);
  },

  getJobs: () => get('jobs', mockJobs),
  addJob: (job) => {
    const list = get('jobs', mockJobs);
    const newJob = { ...job, _id: `job_${Date.now()}`, createdAt: new Date().toISOString() };
    set('jobs', [newJob, ...list]);
    return newJob;
  },
  updateJob: (id, updates) => {
    const list = get('jobs', mockJobs).map((j) => (j._id === id ? { ...j, ...updates } : j));
    set('jobs', list);
    return list.find((j) => j._id === id);
  },

  getApplications: () => get('applications', mockApplications),
  addApplication: (app) => {
    const list = get('applications', mockApplications);
    const newApp = { ...app, _id: `app_${Date.now()}`, appliedDate: new Date().toISOString().split('T')[0] };
    set('applications', [newApp, ...list]);
    return newApp;
  },
  updateApplication: (id, updates) => {
    const list = get('applications', mockApplications).map((a) =>
      a._id === id ? { ...a, ...updates } : a
    );
    set('applications', list);
    return list.find((a) => a._id === id);
  },

  getDrives: () => get('drives', mockDrives),
  addDrive: (drive) => {
    const list = get('drives', mockDrives);
    const newDrive = { ...drive, _id: `drive_${Date.now()}` };
    set('drives', [newDrive, ...list]);
    return newDrive;
  },

  getNotifications: () => get('notifications', mockNotifications),
  markNotificationRead: (id) => {
    const list = get('notifications', mockNotifications).map((n) =>
      n._id === id ? { ...n, isRead: true } : n
    );
    set('notifications', list);
    return list;
  },
};
export default mockStore;
