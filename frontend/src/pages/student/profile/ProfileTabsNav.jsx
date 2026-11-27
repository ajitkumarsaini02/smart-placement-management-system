import React from 'react';
import { User, BookOpen, Code, FileText } from 'lucide-react';

export default function ProfileTabsNav({ activeTab, setActiveTab }) {
  return (
    <div className="profile-tabs-nav">
      <button
        type="button"
        className={`profile-tab-btn ${activeTab === 'personal' ? 'profile-tab-active' : ''}`}
        onClick={() => setActiveTab('personal')}
      >
        <User size={16} /> Personal & College
      </button>
      <button
        type="button"
        className={`profile-tab-btn ${activeTab === 'academic' ? 'profile-tab-active' : ''}`}
        onClick={() => setActiveTab('academic')}
      >
        <BookOpen size={16} /> Academic Scores
      </button>
      <button
        type="button"
        className={`profile-tab-btn ${activeTab === 'skills' ? 'profile-tab-active' : ''}`}
        onClick={() => setActiveTab('skills')}
      >
        <Code size={16} /> Skills & Projects
      </button>
      <button
        type="button"
        className={`profile-tab-btn ${activeTab === 'resume' ? 'profile-tab-active' : ''}`}
        onClick={() => setActiveTab('resume')}
      >
        <FileText size={16} /> Resume (PDF)
      </button>
    </div>
  );
}
