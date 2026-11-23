import React from "react";

/**
 * Reusable Badge component for labels, pill tags, and highlights.
 * Variants: 'default', 'mint', 'emerald', 'dark', 'outline'.
 */
const Badge = ({
  children,
  variant = "mint",
  size = "md",
  icon,
  className = "",
  ...rest
}) => {
  const badgeClasses =
    `badge badge-${variant} badge-${size} ${className}`.trim();

  return (
    <span className={badgeClasses} {...rest}>
      {icon && <span className="badge-icon">{icon}</span>}
      <span className="badge-text">{children}</span>
    </span>
  );
};

export default Badge;
