import React, { useState } from 'react';
import Button from '../../common/Button';
import Input from '../../common/Input';
import { FolderGit2, Plus, ExternalLink, Trash2 } from 'lucide-react';

export const SkillsProjectsSub = ({ projects = [], onProjectsChange }) => {
  const [showAdd, setShowAdd] = useState(false);
  const [form, setForm] = useState({ title: '', description: '', technologies: '', link: '' });

  const handleAdd = (e) => {
    e.preventDefault();
    if (!form.title.trim()) return;
    const newProj = {
      title: form.title.trim(),
      description: form.description.trim(),
      technologies: form.technologies ? form.technologies.split(',').map((t) => t.trim()).filter(Boolean) : [],
      link: form.link.trim(),
    };
    onProjectsChange([...projects, newProj]);
    setForm({ title: '', description: '', technologies: '', link: '' });
    setShowAdd(false);
  };

  const handleRemove = (idx) => onProjectsChange(projects.filter((_, i) => i !== idx));

  return (
    <div className="profile-section-card">
      <div className="card-header-bar">
        <div className="card-title-group">
          <FolderGit2 className="title-icon" size={20} />
          <div>
            <h3 className="card-section-title">Projects &amp; Portfolio</h3>
            <p className="card-section-desc">Showcase software systems or research you built.</p>
          </div>
        </div>
        {!showAdd && (
          <Button variant="outline" size="sm" onClick={() => setShowAdd(true)} icon={<Plus size={15} />}>Add Project</Button>
        )}
      </div>

      {showAdd && (
        <form className="item-create-form" onSubmit={handleAdd}>
          <h4 className="form-subheading">New Project Information</h4>
          <div className="profile-form-grid">
            <Input label="Project Title" placeholder="e.g. Real-Time Chat Engine" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} required />
            <Input label="Technologies Used" placeholder="e.g. React, Node.js, Redis" value={form.technologies} onChange={(e) => setForm({ ...form, technologies: e.target.value })} />
            <div className="form-field-full">
              <label className="input-label">Project Description</label>
              <textarea className="input-textarea" rows="2" placeholder="Briefly state problem statement..." value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} />
            </div>
            <div className="form-field-full">
              <Input label="Demo / GitHub URL" type="url" placeholder="https://github.com/..." value={form.link} onChange={(e) => setForm({ ...form, link: e.target.value })} />
            </div>
          </div>
          <div className="form-actions-row">
            <Button type="submit" variant="primary" size="sm">Save Project</Button>
            <Button type="button" variant="ghost" size="sm" onClick={() => setShowAdd(false)}>Cancel</Button>
          </div>
        </form>
      )}

      <div className="items-list">
        {projects?.length > 0 ? (
          projects.map((proj, idx) => (
            <div key={idx} className="project-card-item">
              <div className="item-header">
                <div>
                  <h4 className="item-title">{proj.title}</h4>
                  {proj.description && <p className="item-desc">{proj.description}</p>}
                </div>
                <div className="item-actions">
                  {proj.link && <a href={proj.link} target="_blank" rel="noreferrer" className="btn-icon-link"><ExternalLink size={16} /></a>}
                  <button type="button" className="btn-icon-danger" onClick={() => handleRemove(idx)}><Trash2 size={16} /></button>
                </div>
              </div>
              {proj.technologies?.length > 0 && (
                <div className="item-tech-tags">
                  {proj.technologies.map((t, ti) => <span key={ti} className="mini-tag">{t}</span>)}
                </div>
              )}
            </div>
          ))
        ) : (
          <p className="empty-hint">No projects added yet.</p>
        )}
      </div>
    </div>
  );
};

export default SkillsProjectsSub;
