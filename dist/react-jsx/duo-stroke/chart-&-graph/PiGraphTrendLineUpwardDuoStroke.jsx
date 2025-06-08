import React from 'react';

/**
 * PiGraphTrendLineUpwardDuoStroke icon from the duo-stroke style in chart-&-graph category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiGraphTrendLineUpwardDuoStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'graph-trend-line-upward icon',
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
  <path d="M7 14.0001L7.61026 12.1693C8.35529 9.93425 11.5295 9.97116 12.2224 12.223C12.8649 14.3112 15.7261 14.5479 16.7032 12.5938L19.166 7.66807M19.166 7.66807C19.2863 7.72843 19.3865 7.82898 19.4454 7.95914C19.8807 8.92154 20.196 9.93449 20.3837 10.9752M19.166 7.66807C19.0457 7.6077 18.9052 7.58754 18.7657 7.61815C17.734 7.84452 16.7335 8.19731 15.787 8.66894" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
    </svg>
  );
}
