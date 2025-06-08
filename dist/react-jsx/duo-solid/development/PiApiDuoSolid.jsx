import React from 'react';

/**
 * PiApiDuoSolid icon from the duo-solid style in development category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiApiDuoSolid({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'api icon',
  ...props 
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      
       style={{color: color || "currentColor"}}
      
      role="img"
      aria-label={ariaLabel}
      {...props}
    >
      <path fill={color || "currentColor"} d="M1 10.4c0-2.24 0-3.36.436-4.216a4 4 0 0 1 1.748-1.748C4.04 4 5.16 4 7.4 4h9.2c2.24 0 3.36 0 4.216.436a4 4 0 0 1 1.748 1.748C23 7.04 23 8.16 23 10.4v3.2c0 2.24 0 3.36-.436 4.216a4 4 0 0 1-1.748 1.748C19.96 20 18.84 20 16.6 20H7.4c-2.24 0-3.36 0-4.216-.436a4 4 0 0 1-1.748-1.748C1 16.96 1 15.84 1 13.6z" opacity=".28" /> <path d="M12 13V8h2.5a2.5 2.5 0 0 1 0 5zm0 0v3m8-8v8M9 13v-1.867a3.15 3.15 0 0 0-1.98-2.925 1.4 1.4 0 0 0-1.04 0A3.15 3.15 0 0 0 4 11.133V13m5 0v3m0-3H4m0 0v3" />
    </svg>
  );
}
