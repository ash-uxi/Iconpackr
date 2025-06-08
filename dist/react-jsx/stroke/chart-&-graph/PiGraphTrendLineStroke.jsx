import React from 'react';

/**
 * PiGraphTrendLineStroke icon from the stroke style in chart-&-graph category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiGraphTrendLineStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'graph-trend-line icon',
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
      <path d="M21 21H7C4.79086 21 3 19.2091 3 17V3M7 14L7.61026 12.1692C8.35529 9.93413 11.5295 9.97104 12.2224 12.2228C12.8649 14.311 15.7261 14.5478 16.7032 12.5937L19 8" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
