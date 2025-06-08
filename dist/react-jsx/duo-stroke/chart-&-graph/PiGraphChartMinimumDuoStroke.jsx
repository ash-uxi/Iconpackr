import React from 'react';

/**
 * PiGraphChartMinimumDuoStroke icon from the duo-stroke style in chart-&-graph category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiGraphChartMinimumDuoStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'graph-chart-minimum icon',
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
      <path d="M21 21H7C4.79086 21 3 19.2091 3 17V3" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
  <path d="M8 17H8.01M11 17H11.01M17 17H17.01M20 17H20.01M13.99 17H14M7 5C7.82746 10.1832 10.6479 14 14 14C17.3521 14 20.1725 10.1832 21 5" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
    </svg>
  );
}
