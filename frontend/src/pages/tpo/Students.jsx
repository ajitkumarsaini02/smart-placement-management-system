import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import TPOLayout from '../../components/tpo/layout/TPOLayout';
import StudentManagement from '../../components/tpo/studentManagement/StudentManagement';
import Loader from '../../components/common/Loader';
import { AlertCircle } from 'lucide-react';

const Students = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [students, setStudents] = useState([]);
  const [verifyingId, setVerifyingId] = useState(null);

  const fetchStudents = async () => {
    try {
      setLoading(true);
      const res = await api.get('/tpo/students?limit=100');
      if (res.data?.success) setStudents(res.data.data.students || []);
    } catch (err) { setError(err.response?.data?.message || 'Failed to load students.'); }
    finally { setLoading(false); }
  };

  useEffect(() => { fetchStudents(); }, []);

  const handleToggleVerification = async (id, currentVerified) => {
    try {
      setVerifyingId(id);
      const res = await api.put(`/tpo/students/${id}/verify`, { isVerified: !currentVerified });
      if (res.data?.success) setStudents((p) => p.map((s) => s._id === id ? { ...s, isVerified: !currentVerified } : s));
    } catch (err) { console.error('Verification toggle failed:', err); }
    finally { setVerifyingId(null); }
  };

  const handleUpdateStatus = async (id, newStatus) => {
    try {
      const res = await api.put(`/tpo/students/${id}/status`, { placementStatus: newStatus });
      if (res.data?.success) setStudents((p) => p.map((s) => s._id === id ? { ...s, placementStatus: newStatus } : s));
    } catch (err) { console.error('Status update failed:', err); }
  };

  const handleUpdateStudentInfo = async (id, payload) => {
    const res = await api.put(`/tpo/students/${id}`, payload);
    if (res.data?.success) {
      setStudents((p) => p.map((s) => s._id === id ? { ...s, ...res.data.data } : s));
      return res.data.data;
    }
    return null;
  };

  if (loading) return <TPOLayout pageTitle="Student Candidates"><div className="dashboard-loading-state"><Loader size="lg" text="Loading student candidates..." /></div></TPOLayout>;
  if (error) return <TPOLayout pageTitle="Student Candidates"><div className="dashboard-error-state"><AlertCircle size={36} className="text-amber" /><h3>Unable to load students</h3><p>{error}</p></div></TPOLayout>;

  return (
    <TPOLayout pageTitle="Student Candidate Registry & Verification" pageSubtitle="Screen candidate academic standing and verify enrollment credentials.">
      <StudentManagement students={students} onToggleVerification={handleToggleVerification} onUpdateStatus={handleUpdateStatus} onUpdateStudentInfo={handleUpdateStudentInfo} verifyingId={verifyingId} />
    </TPOLayout>
  );
};

export default Students;
