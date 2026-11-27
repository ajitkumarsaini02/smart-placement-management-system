import React from 'react';
import { Link } from 'react-router-dom';
import { Bell } from 'lucide-react';

export default function StudentRecentNotifications({ recentNotifications = [], onMarkRead }) {
  return (
    <div className="dashboard-panel">
      <div className="panel-header">
        <div className="panel-title-group">
          <Bell size={20} className="text-emerald" />
          <h3 className="panel-title">Recent Notifications</h3>
        </div>
        <Link to="/student/notifications" className="panel-link">View All</Link>
      </div>

      <div className="panel-body">
        {recentNotifications && recentNotifications.length > 0 ? (
          <div className="notifications-mini-list">
            {recentNotifications.map((notif) => (
              <div key={notif._id} className={`notif-mini-item ${!notif.isRead ? 'notif-unread' : ''}`}>
                <div className="notif-indicator-dot" />
                <div className="notif-mini-content">
                  <h5 className="notif-mini-title">{notif.title}</h5>
                  <p className="notif-mini-msg">{notif.message}</p>
                  <div className="notif-mini-footer">
                    <span className="notif-time">{new Date(notif.createdAt).toLocaleDateString()}</span>
                    {!notif.isRead && (
                      <button type="button" className="btn-mark-read" onClick={() => onMarkRead(notif._id)}>
                        Mark read
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="empty-panel-state"><p>You have no new notifications.</p></div>
        )}
      </div>
    </div>
  );
}
