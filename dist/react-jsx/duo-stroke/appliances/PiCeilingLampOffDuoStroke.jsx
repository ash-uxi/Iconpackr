import React from 'react';

/**
 * PiCeilingLampOffDuoStroke icon from the duo-stroke style in appliances category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiCeilingLampOffDuoStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'ceiling-lamp-off icon',
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
      <path  d="M13 4a1 1 0 0 0-2 0v2.05a10 10 0 0 1 2 0z" fill="none"/>
  <path d="M15 16H9m-6 0a9 9 0 1 1 18 0z" opacity=".28" fill="none"/>
  <path  d="M8.126 17a4.002 4.002 0 0 0 7.748 0h-2.142a2 2 0 0 1-3.464 0z" fill="none"/>
    </svg>
  );
}
