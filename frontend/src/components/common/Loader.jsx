import React from "react";

/**
 * Reusable Loader/Spinner component.
 * Sizes: 'sm', 'md', 'lg'.
 */
const Loader = ({ size = "md", text, fullScreen = false, className = "" }) => {
  const sizeMap = {
    sm: 18,
    md: 28,
    lg: 44,
  };

  const spinnerSize = sizeMap[size] || 28;

  const content = (
    <div className={`loader-container loader-${size} ${className}`}>
      <svg
        className="loader-spinner"
        width={spinnerSize}
        height={spinnerSize}
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Loading..."
      >
        <circle
          className="loader-track"
          cx="25"
          cy="25"
          r="20"
          stroke="currentColor"
          strokeWidth="4"
        />
        <circle
          className="loader-bar"
          cx="25"
          cy="25"
          r="20"
          stroke="currentColor"
          strokeWidth="4"
          strokeDasharray="90,150"
          strokeDashoffset="0"
          strokeLinecap="round"
        />
      </svg>
      {text && <span className="loader-text">{text}</span>}
    </div>
  );

  if (fullScreen) {
    return <div className="loader-fullscreen-overlay">{content}</div>;
  }

  return content;
};

export default Loader;
