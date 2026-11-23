import React from "react";
import { Check } from "lucide-react";

/**
 * Reusable UserCard component for Students, Placement Officers, and Recruiters
 */
const UserCard = (props) => {
  const data = props.props || props;
  const {
    title,
    description,
    features = [],
    accentClass = "mint-accent-1",
    icon,
  } = data;

  return (
    <div className={`user-card ${accentClass}`}>
      <div className="user-card-header">
        {icon && <div className="user-card-icon-box">{icon}</div>}
        <h3 className="user-card-title">{title}</h3>
      </div>
      <p className="user-card-description">{description}</p>

      <div className="user-card-divider" />

      <ul className="user-card-features-list">
        {features.map((feature, index) => (
          <li key={index} className="user-feature-item">
            <span className="user-feature-bullet">
              <Check size={14} />
            </span>
            <span className="user-feature-text">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserCard;
