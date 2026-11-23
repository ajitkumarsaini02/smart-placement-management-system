import React from "react";

/**
 * Reusable FeatureCard component with light mint icon box and emerald styling
 */
const FeatureCard = (props) => {
  const data = props.props || props;
  const { icon, title, description, badge } = data;

  return (
    <div className="feature-card">
      <div className="feature-card-header">
        <div className="feature-icon-box">{icon}</div>
        {badge && <span className="feature-badge">{badge}</span>}
      </div>
      <h3 className="feature-card-title">{title}</h3>
      <p className="feature-card-description">{description}</p>
    </div>
  );
};

export default FeatureCard;
