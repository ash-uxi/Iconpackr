import React from 'react';

/**
 * PiMouseButtonRightStroke icon from the stroke style in devices category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiMouseButtonRightStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'mouse-button-right icon',
  ...props 
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{color: color || "currentColor"}}
      
      role="img"
      aria-label={ariaLabel}
      {...props}
    >
      <path d="M12 3C8.13401 3 5 6.13401 5 10V14C5 17.866 8.13401 21 12 21C15.866 21 19 17.866 19 14V10C19 6.13401 15.866 3 12 3ZM12 3V7.8C12 8.92011 12 9.48016 12.218 9.90798C12.4097 10.2843 12.7157 10.5903 13.092 10.782C13.5198 11 14.0799 11 15.2 11H19" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
