import React from 'react';

/**
 * Reusable Form Input component with label, icon, and error state.
 */
const Input = ({
  label,
  id,
  name,
  type = 'text',
  placeholder,
  value,
  onChange,
  error,
  icon,
  className = '',
  disabled = false,
  required = false,
  ...rest
}) => {
  const inputId = id || name || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

  return (
    <div className={`input-group ${error ? 'input-has-error' : ''} ${className}`}>
      {label && (
        <label htmlFor={inputId} className="input-label">
          {label} {required && <span className="input-required">*</span>}
        </label>
      )}

      <div className="input-wrapper">
        {icon && <span className="input-icon-left">{icon}</span>}
        <input
          id={inputId}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
          required={required}
          className={`input-field ${icon ? 'input-field-with-icon' : ''}`}
          {...rest}
        />
      </div>

      {error && <span className="input-error-text">{error}</span>}
    </div>
  );
};

export default Input;
