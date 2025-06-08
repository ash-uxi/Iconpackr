import React from 'react';

/**
 * PiGraphChartSankeyDuoStroke icon from the duo-stroke style in chart-&-graph category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiGraphChartSankeyDuoStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'graph-chart-sankey icon',
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
      <path d="M2.5 3V5M2.5 10V8V6M20.5 3V10M2.5 5V6M2.5 5H20.5M2.5 6H20.5" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M20.5 17V19M20.5 21V19M2.5 8H4.11484C7.36729 8 10.2921 10.9802 11.5 14C12.7079 17.0198 15.6327 19 18.8852 19H20.5" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
    </svg>
  );
}
