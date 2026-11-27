import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, ChevronRight } from 'lucide-react';

export default function StudentRecommendedJobs({ eligibleJobs = [] }) {
  return (
    <div className="dashboard-panel">
      <div className="panel-header">
        <div className="panel-title-group">
          <Briefcase size={20} className="text-emerald" />
          <h3 className="panel-title">Recommended Eligible Opportunities</h3>
        </div>
        <Link to="/student/opportunities" className="panel-link">
          View All Jobs <ChevronRight size={14} />
        </Link>
      </div>

      <div className="panel-body">
        {eligibleJobs && eligibleJobs.length > 0 ? (
          <div className="dashboard-jobs-mini-list">
            {eligibleJobs.slice(0, 3).map((job) => (
              <div key={job._id} className="mini-job-item">
                <div className="mini-company-avatar">
                  {job.company?.name ? job.company.name.charAt(0).toUpperCase() : 'C'}
                </div>
                <div className="mini-job-details">
                  <h4 className="mini-job-title">{job.title}</h4>
                  <div className="mini-job-meta">
                    <span>{job.company?.name}</span>
                    <span className="dot-sep">•</span>
                    <span>{job.jobType}</span>
                    <span className="dot-sep">•</span>
                    <span className="mini-salary">
                      {job.salary?.ctc ? `₹ ${job.salary.ctc}` : job.salary?.min ? `₹ ${job.salary.min}-${job.salary.max} LPA` : 'Competitive'}
                    </span>
                  </div>
                </div>
                <Link to="/student/opportunities" className="btn btn-outline btn-sm mini-apply-btn">
                  Details
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <div className="empty-panel-state">
            <p>No new eligible jobs right now. Check back soon for new drives.</p>
            <Link to="/student/opportunities" className="btn btn-outline btn-sm">Browse All Opportunities</Link>
          </div>
        )}
      </div>
    </div>
  );
}
