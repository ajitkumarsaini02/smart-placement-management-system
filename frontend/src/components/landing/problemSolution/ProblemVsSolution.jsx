import React from "react";
import { XCircle, CheckCircle2 } from "lucide-react";
import { painPoints, solutions } from "./problemSolutionData";

const ProblemVsSolution = () => (
  <section className="section problem-solution-section" id="problem-solution">
    <div className="section-container">
      <div className="section-header-centered">
        <span className="section-badge badge-warning">The Paradigm Shift</span>
        <h2 className="section-title">
          Your Placement Team Deserves <br />
          <span className="text-primary">Better Than Excel Sheets</span>
        </h2>
        <p className="section-description">
          Manual placement workflows are costing you recruiter relationships,
          student opportunities, and your team's time.
        </p>
      </div>

      <div className="comparison-grid">
        <div className="comparison-card old-way-card">
          <div className="comparison-card-header old-way-header">
            <div className="comparison-badge badge-old">
              <XCircle size={15} />
              <span>The Old Way</span>
            </div>
            <h3 className="comparison-title">Manual &amp; Fragmented</h3>
          </div>
          <div className="comparison-list">
            {painPoints.map((item, index) => (
              <div key={index} className="comparison-item">
                <div className="comparison-item-icon old-icon-box">
                  <XCircle size={16} />
                </div>
                <div className="comparison-item-content">
                  <h4 className="item-title">{item.title}</h4>
                  <p className="item-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="comparison-card new-way-card">
          <div className="comparison-card-header new-way-header">
            <div className="comparison-badge badge-new">
              <CheckCircle2 size={15} />
              <span>The PlaceTrack Way</span>
            </div>
            <h3 className="comparison-title">Automated &amp; Unified</h3>
          </div>
          <div className="comparison-list">
            {solutions.map((item, index) => (
              <div key={index} className="comparison-item">
                <div className="comparison-item-icon new-icon-box">
                  <CheckCircle2 size={16} />
                </div>
                <div className="comparison-item-content">
                  <h4 className="item-title">{item.title}</h4>
                  <p className="item-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ProblemVsSolution;
