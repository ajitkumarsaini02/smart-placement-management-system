import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import mockStore from '../../data/mockStore';
import TPOLayout from '../../components/tpo/layout/TPOLayout';
import StudentManagement from '../../components/tpo/studentManagement/StudentManagement';
import Loader from '../../components/common/Loader';

const Students = () => {
  const [loading, setLoading] = useState(true);
  const [students, setStudents] = useState([]);
  const [verifyingId, setVerifyingId] = useState(null);

  const fetchStudents = async () => {
    try {
      setLoading(true);
      const res = await api.get('/tpo/students?limit=100');
      const raw = Array.isArray(res.data?.data) ? res.data.data : Array.isArray(res.data?.data?.students) ? res.data.data.students : Array.isArray(res.data?.students) ? res.data.students : mockStore.getStudents();
      setStudents(raw);
    } catch {
      setStudents(mockStore.getStudents());
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchStudents(); }, []);

  const handleToggleVerification = async (id, currentVerified) => {
    try {
      setVerifyingId(id);
      await api.put(`/tpo/students/${id}/verify`, { isVerified: !currentVerified });
      setStudents((p) => p.map((s) => s._id === id ? { ...s, isVerified: !currentVerified } : s));
    } catch {
      setStudents((p) => p.map((s) => s._id === id ? { ...s, isVerified: !currentVerified } : s));
    } finally { setVerifyingId(null); }
  };

  const handleUpdateStatus = async (id, newStatus) => {
    try {
      await api.put(`/tpo/students/${id}/status`, { placementStatus: newStatus });
      setStudents((p) => p.map((s) => s._id === id ? { ...s, placementStatus: newStatus } : s));
    } catch {
      setStudents((p) => p.map((s) => s._id === id ? { ...s, placementStatus: newStatus } : s));
    }
  };

  const handleUpdateStudentInfo = async (id, payload) => {
    try {
      const res = await api.put(`/tpo/students/${id}`, payload);
      const updated = res.data?.data || payload;
      setStudents((p) => p.map((s) => s._id === id ? { ...s, ...updated } : s));
      return updated;
    } catch {
      setStudents((p) => p.map((s) => s._id === id ? { ...s, ...payload } : s));
      return payload;
    }
  };

  if (loading) return <TPOLayout pageTitle="Student Candidates"><div className="dashboard-loading-state"><Loader size="lg" text="Loading student candidates..." /></div></TPOLayout>;

  return (
    <TPOLayout pageTitle="Student Candidate Registry & Verification" pageSubtitle="Screen candidate academic standing and verify enrollment credentials.">
      <StudentManagement students={students} onToggleVerification={handleToggleVerification} onUpdateStatus={handleUpdateStatus} onUpdateStudentInfo={handleUpdateStudentInfo} verifyingId={verifyingId} />
    </TPOLayout>
  );
};

export default Students;
