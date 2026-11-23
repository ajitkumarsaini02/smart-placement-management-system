import React from "react";
import coreModulesData from "./coreFeaturesData";

const CoreFeaturesGrid = () => (
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
);

export default CoreFeaturesGrid;
