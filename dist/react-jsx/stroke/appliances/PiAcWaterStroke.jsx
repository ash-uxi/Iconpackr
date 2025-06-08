import React from 'react';

/**
 * PiAcWaterStroke icon from the stroke style in appliances category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiAcWaterStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'ac-water icon',
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
      <path d="M18 8H16M22 12V6C22 4.89543 21.1046 4 20 4H4C2.89543 4 2 4.89543 2 6V12H22ZM19.8 19.2C19.8 20.7464 18.5464 22 17 22C15.4536 22 14.2 20.7464 14.2 19.2C14.2 17.6536 16.3 15 17 15C17.7 15 19.8 17.6536 19.8 19.2Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
