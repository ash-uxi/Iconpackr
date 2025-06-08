import React from 'react';

/**
 * PiFilterVerticalContrast icon from the contrast style in general category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiFilterVerticalContrast({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'filter-vertical icon',
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
    <path d="M17 10a3 3 0 0 1 3 3v1a3 3 0 1 1-6 0v-1a3 3 0 0 1 3-3M7 6a3 3 0 0 1 3 3v1a3 3 0 1 1-6 0V9a3 3 0 0 1 3-3"/>
  </g>
  <path d="M17 3v7m0 0a3 3 0 0 0-3 3v1a3 3 0 1 0 6 0v-1a3 3 0 0 0-3-3M7 16v5m10-1v1M7 3v3m0 0a3 3 0 0 0-3 3v1a3 3 0 1 0 6 0V9a3 3 0 0 0-3-3"/>
    </svg>
  );
}
