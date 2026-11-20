import React from 'react';

/**
 * Reusable StepCard component with circular number badge and step description
 */
const StepCard = (props) => {
  const data = props.props || props;
  const { stepNumber, title, description } = data;

  return (
    <div className="step-card">
      <div className="step-number-badge">{stepNumber}</div>
      <h3 className="step-card-title">{title}</h3>
      <p className="step-card-description">{description}</p>
    </div>
  );
};

export default StepCard;
