import React from "react";

/**
 * Reusable StatCard component accepting props for number, label, and description
 */
const StatCard = ({ number, label, description }) => {
  return (
    <div className="stat-card">
      <div className="stat-number">{number}</div>
      <div className="stat-label">{label}</div>
      {description && <div className="stat-description">{description}</div>}
    </div>
  );
};

export default StatCard;
