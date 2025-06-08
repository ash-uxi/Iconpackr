import React from 'react';

/**
 * PiToggleOffDuoStroke icon from the duo-stroke style in general category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiToggleOffDuoStroke({ 
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
      <path d="M5 12C5 9.79086 6.79086 8 9 8C11.2091 8 13 9.79086 13 12C13 14.2091 11.2091 16 9 16C6.79086 16 5 14.2091 5 12Z" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M9 5H15C18.866 5 22 8.13401 22 12C22 15.866 18.866 19 15 19H9C5.13401 19 2 15.866 2 12C2 8.13401 5.13401 5 9 5Z" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
    </svg>
  );
}
