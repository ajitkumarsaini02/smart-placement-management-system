import React, { useState, useEffect } from 'react';
import notificationService from '../../../services/notificationService';
import StudentLayout from '../../../components/student/layout/StudentLayout';
import Loader from '../../../components/common/Loader';
import NotificationsToolbar from './NotificationsToolbar';
import NotificationListItem from './NotificationListItem';
import { Bell, CheckCircle2, AlertCircle } from 'lucide-react';

const Notifications = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [notifications, setNotifications] = useState([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const [filterUnreadOnly, setFilterUnreadOnly] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [typeFilter, setTypeFilter] = useState('all');
  const [markingAll, setMarkingAll] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');

  const fetchNotifications = async () => {
    try {
      setLoading(true);
      const res = await notificationService.getNotifications();
      if (res.data) {
        setNotifications(res.data.notifications || []);
        setUnreadCount(res.data.unreadCount || 0);
      }
    } catch (err) {
      setError(err.message || 'Failed to load notifications.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchNotifications(); }, []);

  const handleMarkAsRead = async (notifId) => {
    try {
      await notificationService.markAsRead(notifId);
      setNotifications((prev) => prev.map((n) => (n._id === notifId ? { ...n, isRead: true } : n)));
      setUnreadCount((prev) => Math.max(0, prev - 1));
    } catch (err) { console.error('Failed to mark read:', err); }
  };

  const handleMarkAllAsRead = async () => {
    try {
      setMarkingAll(true);
      await notificationService.markAllAsRead();
      setNotifications((prev) => prev.map((n) => ({ ...n, isRead: true })));
      setUnreadCount(0);
      setSuccessMsg('All notifications marked as read');
      setTimeout(() => setSuccessMsg(''), 3000);
    } catch (err) { console.error('Failed to mark all read:', err); } finally { setMarkingAll(false); }
  };

  const filtered = notifications.filter((n) => {
    if (filterUnreadOnly && n.isRead) return false;
    if (typeFilter !== 'all' && n.type !== typeFilter) return false;
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return n.title?.toLowerCase().includes(q) || n.message?.toLowerCase().includes(q);
  });

  if (loading) {
    return (
      <StudentLayout pageTitle="Placement Notifications">
        <div className="dashboard-loading-state"><Loader size="lg" text="Loading notifications..." /></div>
      </StudentLayout>
    );
  }

  return (
    <StudentLayout pageTitle="Placement Notifications & Updates" pageSubtitle="Stay informed on recruitment drives and interviews.">
      <div className="notifications-page-card">
        {successMsg && <div className="alert-success" style={{ marginBottom: '1rem' }}><CheckCircle2 size={16} /> <span>{successMsg}</span></div>}
        {error && <div className="alert-danger" style={{ marginBottom: '1rem' }}><AlertCircle size={16} /> <span>{error}</span></div>}
        <NotificationsToolbar
          filterUnreadOnly={filterUnreadOnly} setFilterUnreadOnly={setFilterUnreadOnly} totalCount={notifications.length}
          unreadCount={unreadCount} searchQuery={searchQuery} setSearchQuery={setSearchQuery} typeFilter={typeFilter}
          setTypeFilter={setTypeFilter} onMarkAllRead={handleMarkAllAsRead} markingAll={markingAll}
        />
        <div className="notifications-full-list">
          {filtered.length > 0 ? (
            filtered.map((item) => <NotificationListItem key={item._id} item={item} onMarkAsRead={handleMarkAsRead} />)
          ) : (
            <div className="empty-notifications-box">
              <div className="empty-notif-icon"><Bell size={36} /></div>
              <h4>No notifications found</h4>
            </div>
          )}
        </div>
      </div>
    </StudentLayout>
  );
};

export default Notifications;
