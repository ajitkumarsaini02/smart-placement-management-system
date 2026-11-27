import React from 'react';
import Badge from '../../../components/common/Badge';
import { Calendar, Briefcase, CheckCircle2, Bell, Clock } from 'lucide-react';

const getNotifIcon = (type) => {
  switch (type) {
    case 'interview_scheduled':
    case 'interview':
      return <Calendar size={18} className="text-emerald" />;
    case 'drive_announcement':
    case 'drive':
      return <Briefcase size={18} className="text-emerald" />;
    case 'application_status':
      return <CheckCircle2 size={18} className="text-emerald" />;
    default:
      return <Bell size={18} className="text-emerald" />;
  }
};

export default function NotificationListItem({ item, onMarkAsRead }) {
  return (
    <div className={`notification-list-item ${!item.isRead ? 'item-unread' : ''}`}>
      <div className="notif-icon-circle">{getNotifIcon(item.type)}</div>
      <div className="notif-content-area">
        <div className="notif-title-row">
          <h4 className="notif-heading">{item.title}</h4>
          <span className="notif-timestamp">
            <Clock size={13} />
            {new Date(item.createdAt).toLocaleString('en-US', {
              month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit',
            })}
          </span>
        </div>
        <p className="notif-message-text">{item.message}</p>
        <div className="notif-actions-row">
          <Badge variant={item.isRead ? 'outline' : 'mint'} size="sm">
            {item.type ? item.type.replace('_', ' ').toUpperCase() : 'NOTIFICATION'}
          </Badge>
          {!item.isRead && (
            <button type="button" className="btn-mark-single-read" onClick={() => onMarkAsRead(item._id)}>
              Mark as read
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
