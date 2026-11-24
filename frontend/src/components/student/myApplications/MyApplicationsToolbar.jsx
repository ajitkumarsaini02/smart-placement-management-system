import React from 'react';
import { Search } from 'lucide-react';

export default function MyApplicationsToolbar({ activeTab, setActiveTab, counts, searchQuery, setSearchQuery }) {
  return (
    <div className="applications-toolbar">
      <div className="filter-tabs-group">
        <button
          type="button"
          className={`filter-tab-btn ${activeTab === 'all' ? 'filter-tab-active' : ''}`}
          onClick={() => setActiveTab('all')}
        >
          All <span className="tab-count">{counts.total}</span>
        </button>
        <button
          type="button"
          className={`filter-tab-btn ${activeTab === 'in_progress' ? 'filter-tab-active' : ''}`}
          onClick={() => setActiveTab('in_progress')}
        >
          In Progress <span className="tab-count">{counts.inProgress}</span>
        </button>
        <button
          type="button"
          className={`filter-tab-btn ${activeTab === 'shortlisted' ? 'filter-tab-active' : ''}`}
          onClick={() => setActiveTab('shortlisted')}
        >
          Shortlisted & Interviews <span className="tab-count tab-count-emerald">{counts.shortlisted}</span>
        </button>
        <button
          type="button"
          className={`filter-tab-btn ${activeTab === 'selected' ? 'filter-tab-active' : ''}`}
          onClick={() => setActiveTab('selected')}
        >
          Selected <span className="tab-count tab-count-emerald">{counts.selected}</span>
        </button>
      </div>

      <div className="search-field-box">
        <Search size={16} className="search-icon" />
        <input
          type="text"
          placeholder="Search applied roles..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
      </div>
    </div>
  );
}
