import React from 'react';

/**
 * PiBoldStroke icon from the stroke style in editing category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiBoldStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'bold icon',
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
      <path d="M7 12V5.77273C7 5.5184 7 5.39123 7.04518 5.29229C7.09515 5.18288 7.18288 5.09515 7.29229 5.04518C7.39123 5 7.5184 5 7.77273 5H12C13.933 5 15.5 6.567 15.5 8.5C15.5 10.4353 13.8854 12 11.9648 12M7 12V18.2C7 18.48 7 18.62 7.0545 18.727C7.10243 18.8211 7.17892 18.8976 7.273 18.9455C7.37996 19 7.51997 19 7.8 19H13.5C15.433 19 17 17.433 17 15.5C17 13.567 15.433 12 13.5 12H11.9648M7 12H11.9648" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
