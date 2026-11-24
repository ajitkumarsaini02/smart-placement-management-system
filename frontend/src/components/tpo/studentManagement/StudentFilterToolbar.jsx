import React from 'react';
import { Search } from 'lucide-react';

export default function StudentFilterToolbar({
  searchQuery, setSearchQuery, filteredCount, totalCount, onResetFilters,
  selectedDept, setSelectedDept, departmentsList, selectedBatch, setSelectedBatch,
  selectedMinCgpa, setSelectedMinCgpa, selectedVerified, setSelectedVerified,
  selectedStatus, setSelectedStatus, hasActiveFilters,
}) {
  return (
    <div className="tpo-filter-card">
      <div className="tpo-filter-top-row">
        <div className="tpo-search-input-box">
          <Search size={18} className="search-icon" />
          <input
            type="text"
            placeholder="Search by student name, roll number, or email..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="tpo-search-field"
          />
        </div>
        <div className="tpo-filter-summary">
          <span>Showing <strong>{filteredCount}</strong> of {totalCount} Students</span>
          {hasActiveFilters && (
            <button type="button" className="btn-clear-filters" onClick={onResetFilters}>
              Clear Filters
            </button>
          )}
        </div>
      </div>

      <div className="tpo-filter-dropdowns-grid">
        <div className="filter-select-group">
          <label className="filter-label">Department</label>
          <select value={selectedDept} onChange={(e) => setSelectedDept(e.target.value)} className="tpo-select">
            <option value="">All Departments</option>
            {departmentsList.map((d) => <option key={d} value={d}>{d}</option>)}
          </select>
        </div>
        <div className="filter-select-group">
          <label className="filter-label">Graduation Batch</label>
          <select value={selectedBatch} onChange={(e) => setSelectedBatch(e.target.value)} className="tpo-select">
            <option value="">All Batches</option>
            <option value="2026">2026 (Final Year)</option>
            <option value="2025">2025</option>
            <option value="2027">2027</option>
          </select>
        </div>
        <div className="filter-select-group">
          <label className="filter-label">Minimum CGPA</label>
          <select value={selectedMinCgpa} onChange={(e) => setSelectedMinCgpa(e.target.value)} className="tpo-select">
            <option value="">Any CGPA</option>
            <option value="8.5">8.5 & Above</option>
            <option value="7.5">7.5 & Above</option>
            <option value="6.0">6.0 & Above</option>
          </select>
        </div>
        <div className="filter-select-group">
          <label className="filter-label">Verification</label>
          <select value={selectedVerified} onChange={(e) => setSelectedVerified(e.target.value)} className="tpo-select">
            <option value="">All Verification</option>
            <option value="true">Verified Only</option>
            <option value="false">Pending</option>
          </select>
        </div>
        <div className="filter-select-group">
          <label className="filter-label">Placement Status</label>
          <select value={selectedStatus} onChange={(e) => setSelectedStatus(e.target.value)} className="tpo-select">
            <option value="">All Statuses</option>
            <option value="placed">Placed Only</option>
            <option value="unplaced">Unplaced Only</option>
            <option value="opted_out">Opted Out</option>
          </select>
        </div>
      </div>
    </div>
  );
}
