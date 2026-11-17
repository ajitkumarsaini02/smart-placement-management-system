import React, { useState } from 'react';
import { Bell, Check } from 'lucide-react';

const SettingsPage = () => {
  const [emailAlerts, setEmailAlerts] = useState(true);
  const [smsAlerts, setSmsAlerts] = useState(true);
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-8 py-10 space-y-6">
      <div className="pb-6 border-b border-slate-200">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
          Account & Placement Settings
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          Configure interview notifications, corporate drive alerts, and security settings
        </p>
      </div>

      <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-premium space-y-6">
        <div className="space-y-4">
          <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
            <Bell className="w-4 h-4 text-blue-600" />
            Notification Preferences
          </h3>

          <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 border border-slate-200">
            <div>
              <div className="text-sm font-bold text-slate-800">Email Alerts for Eligible Drives</div>
              <div className="text-xs text-slate-500">Receive instant updates when a company matches your branch and CGPA</div>
            </div>
            <input
              type="checkbox"
              checked={emailAlerts}
              onChange={(e) => setEmailAlerts(e.target.checked)}
              className="w-4 h-4 text-blue-600 rounded cursor-pointer"
            />
          </div>

          <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 border border-slate-200">
            <div>
              <div className="text-sm font-bold text-slate-800">Interview Slot SMS Reminders</div>
              <div className="text-xs text-slate-500">Receive SMS 1 hour prior to scheduled technical or HR interview rounds</div>
            </div>
            <input
              type="checkbox"
              checked={smsAlerts}
              onChange={(e) => setSmsAlerts(e.target.checked)}
              className="w-4 h-4 text-blue-600 rounded cursor-pointer"
            />
          </div>
        </div>

        <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
          {saved && (
            <span className="text-xs font-semibold text-emerald-600 flex items-center gap-1">
              <Check className="w-3.5 h-3.5" />
              Settings saved successfully!
            </span>
          )}
          <button
            onClick={handleSave}
            className="ml-auto px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-2xs cursor-pointer"
          >
            Save Preferences
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
