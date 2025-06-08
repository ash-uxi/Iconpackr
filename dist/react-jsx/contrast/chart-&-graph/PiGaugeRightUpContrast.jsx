import React from 'react';

/**
 * PiGaugeRightUpContrast icon from the contrast style in chart-&-graph category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiGaugeRightUpContrast({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'gauge-right-up icon',
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
      <path fill="currentColor" d="M12 2.85a9.15 9.15 0 1 1 0 18.3 9.15 9.15 0 0 1 0-18.3" opacity=".28"/>
  <path d="M12 2.85a9.15 9.15 0 1 1 0 18.3 9.15 9.15 0 0 1 0-18.3"/>
  <path d="m15.535 8.464-4.108 2.803a.939.939 0 1 0 1.305 1.305z"/>
    </svg>
  );
}
