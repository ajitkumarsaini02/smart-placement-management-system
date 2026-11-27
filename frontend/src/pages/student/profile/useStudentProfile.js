import { useState, useEffect } from 'react';
import useAuth from '../../../hooks/useAuth';
import api from '../../../services/api';

export default function useStudentProfile() {
  const { user, updateUser } = useAuth();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [completionPercentage, setCompletionPercentage] = useState(0);
  const [studentData, setStudentData] = useState({
    name: '', email: '', phone: '', collegeName: '', department: '', branch: '',
    rollNumber: '', batch: '', bio: '', cgpa: '', activeBacklogs: 0, totalBacklogs: 0,
    tenthPercentage: '', twelfthPercentage: '', skills: [], projects: [], certifications: [], resume: null,
  });

  const loadProfile = async () => {
    try {
      setLoading(true);
      const res = await api.get('/student/profile');
      if (res.data?.success) {
        const { student, user: userData, profileCompletion } = res.data.data;
        setCompletionPercentage(profileCompletion || 0);
        setStudentData({
          name: userData?.name || '', email: userData?.email || '', phone: student?.phone || '',
          collegeName: student?.collegeName || '', department: student?.department || '', branch: student?.branch || '',
          rollNumber: student?.rollNumber || '', batch: student?.batch || student?.batchYear || '', bio: student?.bio || '',
          cgpa: student?.cgpa !== undefined && student?.cgpa !== null ? student.cgpa : '',
          activeBacklogs: student?.activeBacklogs || 0,
          totalBacklogs: student?.totalBacklogs !== undefined ? student.totalBacklogs : (student?.totalBacklogsHistory || 0),
          tenthPercentage: student?.tenthPercentage || '', twelfthPercentage: student?.twelfthPercentage || '',
          skills: student?.skills || [],
          projects: (student?.projects || []).map((p) => ({ title: p.title || '', description: p.description || '', technologies: p.technologies || p.techStack || [], link: p.link || p.githubUrl || '' })),
          certifications: (student?.certifications || []).map((c) => ({ name: c.name || c.title || '', issuer: c.issuer || '', issueDate: c.issueDate || '', credentialUrl: c.credentialUrl || '' })),
          resume: student?.resume || null,
        });
      }
    } catch (err) {
      setErrorMessage(err.response?.data?.message || 'Failed to load profile.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { loadProfile(); }, []);

  const handleFieldChange = (field, value) => {
    setStudentData((prev) => ({ ...prev, [field]: value }));
    setSaveSuccess(false);
  };

  const handleSaveProfile = async (e) => {
    if (e) e.preventDefault();
    setSaving(true);
    setSaveSuccess(false);
    try {
      const payload = {
        name: studentData.name, phone: studentData.phone, collegeName: studentData.collegeName, department: studentData.department,
        branch: studentData.branch, rollNumber: studentData.rollNumber, batch: studentData.batch ? Number(studentData.batch) : undefined,
        bio: studentData.bio, cgpa: studentData.cgpa !== '' ? Number(studentData.cgpa) : undefined,
        activeBacklogs: Number(studentData.activeBacklogs) || 0, totalBacklogs: Number(studentData.totalBacklogs) || 0,
        tenthPercentage: studentData.tenthPercentage !== '' ? Number(studentData.tenthPercentage) : undefined,
        twelfthPercentage: studentData.twelfthPercentage !== '' ? Number(studentData.twelfthPercentage) : undefined,
        skills: studentData.skills, projects: studentData.projects, certifications: studentData.certifications,
      };
      const res = await api.put('/student/profile', payload);
      if (res.data?.success) {
        setSaveSuccess(true);
        setCompletionPercentage(res.data.data.profileCompletion || 0);
        if (updateUser && res.data.data.user?.name && user?.name !== res.data.data.user.name) {
          updateUser({ name: res.data.data.user.name });
        }
        setTimeout(() => setSaveSuccess(false), 4000);
      }
    } catch (err) {
      setErrorMessage(err.response?.data?.message || 'Failed to update profile.');
    } finally {
      setSaving(false);
    }
  };

  return { studentData, setStudentData, loading, saving, saveSuccess, errorMessage, completionPercentage, setCompletionPercentage, handleFieldChange, handleSaveProfile };
}
