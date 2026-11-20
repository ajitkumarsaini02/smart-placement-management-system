import React from "react";
import coreModulesData from "./coreFeaturesData";

const CoreFeatures = () => (
  <section className="section twelve-modules-section" id="modules">
    <div className="section-container">
      <div className="section-header-centered">
        <span className="section-badge badge-mint">Core Placement Suite</span>
        <h2 className="section-title">
          Complete Placement Suite, <br />
          <span className="text-primary">In One Unified Platform</span>
        </h2>
        <p className="section-description">
          Comprehensive recruitment and automation tools built for modern
          placement cells — from recruiter onboarding to final accreditation
          reports.
        </p>
      </div>

      <div className="modules-grid-3col">
        {coreModulesData.map((item, idx) => (
          <div key={idx} className="module-grid-card">
            <div className="module-card-top">
              <div className="module-icon-box">{item.icon}</div>
              <div className="module-meta">
                <span className="module-number">{item.num}</span>
                <span className="module-tag">{item.tag}</span>
              </div>
            </div>
            <h3 className="module-title">{item.title}</h3>
            <p className="module-desc">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CoreFeatures;
