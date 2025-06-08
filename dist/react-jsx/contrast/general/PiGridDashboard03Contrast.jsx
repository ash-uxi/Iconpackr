import React from 'react';

/**
 * PiGridDashboard03Contrast icon from the contrast style in general category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiGridDashboard03Contrast({ 
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
      <g fill="currentColor" opacity=".28">
    <path d="M3 6.5a3.5 3.5 0 1 1 7 0V10H6.5A3.5 3.5 0 0 1 3 6.5M3 17.5A3.5 3.5 0 0 1 6.5 14H10v3.5a3.5 3.5 0 1 1-7 0M14 6.5a3.5 3.5 0 1 1 3.5 3.5H14zM14 14h3.5a3.5 3.5 0 1 1-3.5 3.5z"/>
  </g>
  <path d="M14 14h3.5a3.5 3.5 0 1 1-3.5 3.5zM14 6.5a3.5 3.5 0 1 1 3.5 3.5H14zM3 17.5A3.5 3.5 0 0 1 6.5 14H10v3.5a3.5 3.5 0 1 1-7 0M3 6.5a3.5 3.5 0 1 1 7 0V10H6.5A3.5 3.5 0 0 1 3 6.5"/>
    </svg>
  );
}
