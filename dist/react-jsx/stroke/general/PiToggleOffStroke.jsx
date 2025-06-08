import React from 'react';

/**
 * PiToggleOffStroke icon from the stroke style in general category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiToggleOffStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'toggle-off icon',
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
      <path d="M13 12C13 9.79086 11.2091 8 9 8C6.79086 8 5 9.79086 5 12C5 14.2091 6.79086 16 9 16C11.2091 16 13 14.2091 13 12Z" stroke="currentColor" strokeWidth="2" fill="none"/>
  <path d="M15 5H9C5.13401 5 2 8.13401 2 12C2 15.866 5.13401 19 9 19H15C18.866 19 22 15.866 22 12C22 8.13401 18.866 5 15 5Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
