import React from 'react';
import Button from '../../../components/common/Button';
import { Search, Filter, CheckCheck } from 'lucide-react';

export default function NotificationsToolbar({
  filterUnreadOnly,
  setFilterUnreadOnly,
  totalCount,
  unreadCount,
  searchQuery,
  setSearchQuery,
  typeFilter,
  setTypeFilter,
  onMarkAllRead,
  markingAll,
}) {
  return (
    <div className="notifications-header-toolbar">
      <div className="notif-filter-tabs">
        <button
          type="button"
          className={`notif-tab ${!filterUnreadOnly ? 'notif-tab-active' : ''}`}
          onClick={() => setFilterUnreadOnly(false)}
        >
          All Notifications <span className="tab-count">{totalCount}</span>
        </button>
        <button
          type="button"
          className={`notif-tab ${filterUnreadOnly ? 'notif-tab-active' : ''}`}
          onClick={() => setFilterUnreadOnly(true)}
        >
          Unread Only {unreadCount > 0 && <span className="tab-count tab-count-emerald">{unreadCount}</span>}
        </button>
      </div>

      <div className="notif-search-filter-row">
        <div className="notif-search-input">
          <Search size={14} />
          <input
            type="text"
            placeholder="Search notices..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="notif-type-select">
          <Filter size={14} />
          <select value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)}>
            <option value="all">All Types</option>
            <option value="drive_announcement">Drives</option>
            <option value="application_status">Applications</option>
            <option value="interview_scheduled">Interviews</option>
            <option value="system_notice">System</option>
          </select>
        </div>

        {unreadCount > 0 && (
          <Button variant="outline" size="sm" onClick={onMarkAllRead} disabled={markingAll} icon={<CheckCheck size={16} />}>
            {markingAll ? 'Updating...' : 'Mark All Read'}
          </Button>
        )}
      </div>
    </div>
  );
}
