import React from 'react';
import Badge from '../../common/Badge';
import { PieChart } from 'lucide-react';

export default function TPOBranchTable({ branchWiseStats = [] }) {
  return (
    <div className="tpo-panel-card">
      <div className="panel-header">
        <div className="panel-title-group">
          <PieChart size={20} className="text-emerald" />
          <div>
            <h3 className="panel-title">Department-Wise Placement Statistics</h3>
            <p className="card-section-desc">Real-time conversion breakdown across academic engineering branches.</p>
          </div>
        </div>
      </div>

      <div className="tpo-table-responsive">
        <table className="tpo-data-table">
          <thead>
            <tr><th>Department</th><th>Enrolled</th><th>Placed</th><th>In Pipeline</th><th>Avg CGPA</th><th>Placement %</th></tr>
          </thead>
          <tbody>
            {branchWiseStats?.length > 0 ? (
              branchWiseStats.map((branch, idx) => (
                <tr key={idx}>
                  <td><span className="tpo-student-name font-bold">{branch.department}</span></td>
                  <td>{branch.total}</td>
                  <td><span className="text-emerald font-bold">{branch.placed}</span></td>
                  <td>{branch.unplaced}</td>
                  <td><Badge variant="mint" size="sm">{branch.avgCgpa}</Badge></td>
                  <td>
                    <div className="branch-rate-cell">
                      <div className="branch-progress-track"><div className="branch-progress-fill" style={{ width: `${Math.min(branch.percentage, 100)}%` }} /></div>
                      <span className="branch-rate-val">{branch.percentage}%</span>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr><td colSpan="6" className="text-center" style={{ padding: '2rem' }}>No branch data recorded yet.</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
