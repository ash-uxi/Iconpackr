import React from 'react';

/**
 * PiGridDashboard03Stroke icon from the stroke style in general category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiGridDashboard03Stroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'grid-dashboard-03 icon',
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
      <path d="M14 14H17.5C19.433 14 21 15.567 21 17.5C21 19.433 19.433 21 17.5 21C15.567 21 14 19.433 14 17.5V14Z" stroke="currentColor" strokeWidth="2" fill="none"/>
  <path d="M14 6.5C14 4.567 15.567 3 17.5 3C19.433 3 21 4.567 21 6.5C21 8.433 19.433 10 17.5 10H14V6.5Z" stroke="currentColor" strokeWidth="2" fill="none"/>
  <path d="M3 17.5C3 15.567 4.567 14 6.5 14H10V17.5C10 19.433 8.433 21 6.5 21C4.567 21 3 19.433 3 17.5Z" stroke="currentColor" strokeWidth="2" fill="none"/>
  <path d="M3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5V10H6.5C4.567 10 3 8.433 3 6.5Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
