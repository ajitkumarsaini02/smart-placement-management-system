import React from 'react';

/**
 * Reusable Button component supporting both <button> and <a> links.
 * Supports variants: 'primary', 'secondary', 'outline', 'ghost'.
 * Supports sizes: 'sm', 'md', 'lg'.
 */
const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  type = 'button',
  disabled = false,
  loading = false,
  icon,
  iconPosition = 'right',
  fullWidth = false,
  href,
  target,
  rel,
  ...rest
}) => {
  const baseClasses = `btn btn-${variant} btn-${size} ${fullWidth ? 'btn-full' : ''} ${className}`.trim();

  const content = (
    <>
      {loading ? (
        <span className="btn-spinner" style={{ display: 'inline-block', width: 14, height: 14, border: '2px solid currentColor', borderTopColor: 'transparent', borderRadius: '50%', animation: 'rotateLoader 0.8s linear infinite', marginRight: 6 }} />
      ) : (
        icon && iconPosition === 'left' && <span className="btn-icon btn-icon-left">{icon}</span>
      )}
      <span>{children}</span>
      {!loading && icon && iconPosition === 'right' && <span className="btn-icon btn-icon-right">{icon}</span>}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={baseClasses}
        onClick={onClick}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : rel}
        {...rest}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={baseClasses}
      onClick={onClick}
      disabled={disabled || loading}
      {...rest}
    >
      {content}
    </button>
  );
};

export default Button;
