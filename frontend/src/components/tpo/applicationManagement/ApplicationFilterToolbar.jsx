import React from 'react';
import { Search } from 'lucide-react';

export default function ApplicationFilterToolbar({ searchQuery, setSearchQuery, selectedCompanyId, setSelectedCompanyId, companies, activeTab, setActiveTab, applications }) {
  return (
    <div className="tpo-filter-card">
      <div className="tpo-filter-top-row">
        <div className="tpo-search-input-box">
          <Search size={18} className="search-icon" />
          <input
            type="text"
            placeholder="Search student, roll number, role, or company..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="tpo-search-field"
          />
        </div>

        <div className="company-select-filter">
          <select value={selectedCompanyId} onChange={(e) => setSelectedCompanyId(e.target.value)} className="tpo-select">
            <option value="">All Companies</option>
            {companies.map((c) => <option key={c._id} value={c._id}>{c.name}</option>)}
          </select>
        </div>
      </div>

      <div className="filter-tabs-group" style={{ marginTop: '0.85rem' }}>
        <button type="button" className={`filter-tab-btn ${activeTab === 'all' ? 'filter-tab-active' : ''}`} onClick={() => setActiveTab('all')}>
          All <span className="tab-count">{applications.length}</span>
        </button>
        <button type="button" className={`filter-tab-btn ${activeTab === 'applied' ? 'filter-tab-active' : ''}`} onClick={() => setActiveTab('applied')}>
          Applied <span className="tab-count">{applications.filter((a) => a.status === 'applied').length}</span>
        </button>
        <button type="button" className={`filter-tab-btn ${activeTab === 'shortlisted' ? 'filter-tab-active' : ''}`} onClick={() => setActiveTab('shortlisted')}>
          Shortlisted <span className="tab-count tab-count-emerald">{applications.filter((a) => a.status === 'shortlisted').length}</span>
        </button>
        <button type="button" className={`filter-tab-btn ${activeTab === 'interview' ? 'filter-tab-active' : ''}`} onClick={() => setActiveTab('interview')}>
          Interviews <span className="tab-count">{applications.filter((a) => a.status === 'interview_scheduled').length}</span>
        </button>
        <button type="button" className={`filter-tab-btn ${activeTab === 'offered' ? 'filter-tab-active' : ''}`} onClick={() => setActiveTab('offered')}>
          Offered <span className="tab-count tab-count-emerald">{applications.filter((a) => a.status === 'offered' || a.status === 'offer_accepted').length}</span>
        </button>
        <button type="button" className={`filter-tab-btn ${activeTab === 'rejected' ? 'filter-tab-active' : ''}`} onClick={() => setActiveTab('rejected')}>
          Rejected <span className="tab-count">{applications.filter((a) => a.status === 'rejected').length}</span>
        </button>
      </div>
    </div>
  );
}
