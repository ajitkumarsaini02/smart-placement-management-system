import React, { useState } from 'react';
import StudentTable from './StudentTable';
import StudentFilterToolbar from './StudentFilterToolbar';
import StudentDetailModal from './StudentDetailModal';

const departmentsList = [
  'Computer Science & Engineering', 'Information Technology', 'Electronics & Communication Engineering',
  'Electrical Engineering', 'Mechanical Engineering', 'Civil Engineering', 'Artificial Intelligence & Data Science',
];

const StudentManagement = ({ students = [], onToggleVerification, onUpdateStudentInfo, verifyingId }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDept, setSelectedDept] = useState('');
  const [selectedBatch, setSelectedBatch] = useState('');
  const [selectedMinCgpa, setSelectedMinCgpa] = useState('');
  const [selectedVerified, setSelectedVerified] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');

  const [activeStudent, setActiveStudent] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editFormData, setEditFormData] = useState({});
  const [modalSuccessMsg, setModalSuccessMsg] = useState('');

  const filteredStudents = students.filter((s) => {
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const match = s.user?.name?.toLowerCase().includes(q) || s.user?.email?.toLowerCase().includes(q) || s.rollNumber?.toLowerCase().includes(q) || s.department?.toLowerCase().includes(q);
      if (!match) return false;
    }
    if (selectedDept && s.department !== selectedDept) return false;
    if (selectedBatch && String(s.batchYear) !== selectedBatch) return false;
    if (selectedMinCgpa && Number(s.cgpa) < Number(selectedMinCgpa)) return false;
    if (selectedVerified !== '' && s.isVerified !== (selectedVerified === 'true')) return false;
    if (selectedStatus && s.placementStatus !== selectedStatus) return false;
    return true;
  });

  const handleResetFilters = () => {
    setSearchQuery(''); setSelectedDept(''); setSelectedBatch(''); setSelectedMinCgpa(''); setSelectedVerified(''); setSelectedStatus('');
  };

  const handleOpenStudentModal = (student) => {
    setActiveStudent(student);
    setIsEditing(false);
    setModalSuccessMsg('');
    setEditFormData({
      name: student.user?.name || '', rollNumber: student.rollNumber || '', department: student.department || '',
      cgpa: student.cgpa || 0, activeBacklogs: student.activeBacklogs || 0, placementStatus: student.placementStatus || 'unplaced',
      batchYear: student.batchYear || 2026,
    });
  };

  const handleSaveStudentEdit = async (e) => {
    e.preventDefault();
    if (!activeStudent || !onUpdateStudentInfo) return;
    try {
      const updated = await onUpdateStudentInfo(activeStudent._id, editFormData);
      if (updated) {
        setActiveStudent(updated);
        setIsEditing(false);
        setModalSuccessMsg('Student details updated successfully!');
        setTimeout(() => setModalSuccessMsg(''), 4000);
      }
    } catch (err) { console.error('Failed to update student:', err); }
  };

  const hasActiveFilters = !!(searchQuery || selectedDept || selectedBatch || selectedMinCgpa || selectedVerified || selectedStatus);

  return (
    <div className="tpo-student-management-wrapper">
      <StudentFilterToolbar
        searchQuery={searchQuery} setSearchQuery={setSearchQuery} filteredCount={filteredStudents.length} totalCount={students.length}
        onResetFilters={handleResetFilters} selectedDept={selectedDept} setSelectedDept={setSelectedDept} departmentsList={departmentsList}
        selectedBatch={selectedBatch} setSelectedBatch={setSelectedBatch} selectedMinCgpa={selectedMinCgpa} setSelectedMinCgpa={setSelectedMinCgpa}
        selectedVerified={selectedVerified} setSelectedVerified={setSelectedVerified} selectedStatus={selectedStatus} setSelectedStatus={setSelectedStatus}
        hasActiveFilters={hasActiveFilters}
      />
      <div className="tpo-table-card">
        <StudentTable students={filteredStudents} onSelectStudent={handleOpenStudentModal} onToggleVerification={onToggleVerification} verifyingId={verifyingId} />
      </div>
      <StudentDetailModal
        activeStudent={activeStudent} onClose={() => setActiveStudent(null)} isEditing={isEditing} setIsEditing={setIsEditing}
        editFormData={editFormData} setEditFormData={setEditFormData} onSave={handleSaveStudentEdit} onToggleVerification={onToggleVerification}
        modalSuccessMsg={modalSuccessMsg}
      />
    </div>
  );
};

export default StudentManagement;
