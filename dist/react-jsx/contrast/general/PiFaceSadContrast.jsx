import React from 'react';

/**
 * PiFaceSadContrast icon from the contrast style in general category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiFaceSadContrast({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'face-sad icon',
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
      <path d="M15.57 16A4.99 4.99 0 0 0 12 14.5 4.99 4.99 0 0 0 8.43 16M9 9.685v1m6-1v1M12 21.15a9.15 9.15 0 1 1 0-18.3 9.15 9.15 0 0 1 0 18.3"/>
  <path fill="currentColor" d="M2.85 12a9.15 9.15 0 1 1 18.3 0 9.15 9.15 0 0 1-18.3 0" opacity=".28"/>
    </svg>
  );
}
