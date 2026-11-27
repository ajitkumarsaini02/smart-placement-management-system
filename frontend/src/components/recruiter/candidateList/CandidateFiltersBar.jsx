import React from 'react';
import Button from '../../common/Button';
import { Search, Filter, Briefcase } from 'lucide-react';

export default function CandidateFiltersBar({ search, setSearch, selectedJob, setSelectedJob, jobs = [], statusFilter, setStatusFilter, departmentFilter, setDepartmentFilter, minCgpa, setMinCgpa, onSubmit }) {
  const safeJobs = Array.isArray(jobs) ? jobs : [];

  return (
    <div className="recruiter-controls-card">
      <form onSubmit={onSubmit} className="search-filter-grid">
        <div className="search-input-box">
          <Search size={16} className="search-icon" />
          <input type="text" className="search-field" placeholder="Search candidate..." value={search} onChange={(e) => setSearch(e.target.value)} />
        </div>

        <div className="filter-select-box">
          <Briefcase size={16} className="filter-icon" />
          <select className="filter-select" value={selectedJob} onChange={(e) => setSelectedJob(e.target.value)}>
            <option value="all">All Job Openings</option>
            {safeJobs.map((j) => <option key={j._id} value={j._id}>{j.title}</option>)}
          </select>
        </div>

        <div className="filter-select-box">
          <Filter size={16} className="filter-icon" />
          <select className="filter-select" value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
            <option value="all">All Stages</option>
            <option value="applied">Applied</option>
            <option value="under_review">Under Review</option>
            <option value="shortlisted">Shortlisted</option>
            <option value="interview_scheduled">Interview Scheduled</option>
            <option value="selected">Selected / Offered</option>
            <option value="rejected">Rejected</option>
          </select>
        </div>

        <div className="filter-select-box">
          <select className="filter-select" value={departmentFilter} onChange={(e) => setDepartmentFilter(e.target.value)}>
            <option value="all">All Branches</option>
            <option value="Computer Science & Engineering">CSE</option>
            <option value="Information Technology">IT</option>
            <option value="Electronics & Communication Engineering">ECE</option>
          </select>
        </div>

        <div className="filter-select-box">
          <input type="number" step="0.5" min="0" max="10" className="filter-select" placeholder="Min CGPA" value={minCgpa} onChange={(e) => setMinCgpa(e.target.value)} style={{ width: '85px' }} />
        </div>

        <Button type="submit" variant="primary" size="md">Filter</Button>
      </form>
    </div>
  );
}
