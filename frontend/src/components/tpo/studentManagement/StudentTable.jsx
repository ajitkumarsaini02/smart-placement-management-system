import React from 'react';
import StudentTableRow from './StudentTableRow';
import { GraduationCap } from 'lucide-react';

const StudentTable = ({ students = [], onSelectStudent, onToggleVerification, verifyingId }) => {
  if (!students || students.length === 0) {
    return (
      <div className="tpo-empty-table-state">
        <GraduationCap size={40} className="empty-icon" />
        <h4>No student records found</h4>
        <p>No students match the current search filters or criteria.</p>
      </div>
    );
  }

  return (
    <div className="tpo-table-responsive">
      <table className="tpo-data-table">
        <thead>
          <tr>
            <th>Student</th><th>Roll Number</th><th>Department / Branch</th><th>Batch</th>
            <th>CGPA</th><th>Backlogs</th><th>Verification</th><th>Placement Status</th>
            <th className="text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <StudentTableRow
              key={student._id}
              student={student}
              onSelectStudent={onSelectStudent}
              onToggleVerification={onToggleVerification}
              isCurrentlyVerifying={verifyingId === student._id}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentTable;
