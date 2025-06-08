import React from 'react';

/**
 * PiGamingPadStroke icon from the stroke style in devices category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiGamingPadStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'gaming-pad icon',
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
      <path d="M8 13V11M8 11V9M8 11H6M8 11H10M15.01 9L15 9.00098M18.01 12L18 12.001M22 11.6667V16.9098C22 18.6165 20.6165 20 18.9098 20C17.7394 20 16.6693 19.3387 16.1459 18.2918L16 18C15.3871 16.7743 14.1343 16 12.7639 16H11.2361C9.86566 16 8.61287 16.7743 8 18L7.8541 18.2918C7.33065 19.3387 6.26064 20 5.09017 20C3.38352 20 2 18.6165 2 16.9098V11.6667C2 7.98477 4.98477 5 8.66667 5H15.3333C19.0152 5 22 7.98477 22 11.6667Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
