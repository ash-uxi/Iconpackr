import React from 'react';

/**
 * PiGraphChartCombinationChartStroke icon from the stroke style in chart-&-graph category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiGraphChartCombinationChartStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'graph-chart-combination-chart icon',
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
      <path d="M3.50004 20V15M8.83337 20V11M14.1667 20V15M19.5 20V11M3.5 10L8.83337 4.5L14.1667 10L19.5 4.5" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
