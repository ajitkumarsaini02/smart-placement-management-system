import React from 'react';
import { Search } from 'lucide-react';

export default function EligibleJobsToolbar({
  activeTab,
  setActiveTab,
  totalCount,
  eligibleCount,
  appliedCount,
  searchQuery,
  setSearchQuery,
  selectedJobType,
  setSelectedJobType,
}) {
  return (
    <div className="jobs-filter-toolbar">
      <div className="filter-tabs-group">
        <button
          type="button"
          className={`filter-tab-btn ${activeTab === 'all' ? 'filter-tab-active' : ''}`}
          onClick={() => setActiveTab('all')}
        >
          All Opportunities <span className="tab-count">{totalCount}</span>
        </button>
        <button
          type="button"
          className={`filter-tab-btn ${activeTab === 'eligible' ? 'filter-tab-active' : ''}`}
          onClick={() => setActiveTab('eligible')}
        >
          Eligible for Me <span className="tab-count tab-count-emerald">{eligibleCount}</span>
        </button>
        <button
          type="button"
          className={`filter-tab-btn ${activeTab === 'applied' ? 'filter-tab-active' : ''}`}
          onClick={() => setActiveTab('applied')}
        >
          Applied <span className="tab-count">{appliedCount}</span>
        </button>
      </div>

      <div className="jobs-search-inputs">
        <div className="search-field-box">
          <Search size={16} className="search-icon" />
          <input
            type="text"
            placeholder="Search by job title, company, or skills..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
        </div>

        <div className="type-select-box">
          <select
            value={selectedJobType}
            onChange={(e) => setSelectedJobType(e.target.value)}
            className="job-type-dropdown"
          >
            <option value="all">All Job Types</option>
            <option value="Full-time">Full-time</option>
            <option value="Internship">Internship</option>
          </select>
        </div>
      </div>
    </div>
  );
}
