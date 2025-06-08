import React from 'react';

/**
 * PiToggleOffContrast icon from the contrast style in general category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiToggleOffContrast({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'toggle-off icon',
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
      <path d="M5 12a4 4 0 1 1 8 0 4 4 0 0 1-8 0"/>
  <path fill="currentColor" d="M9 5h6a7 7 0 1 1 0 14H9A7 7 0 1 1 9 5" opacity=".28"/>
  <path d="M9 5h6a7 7 0 1 1 0 14H9A7 7 0 1 1 9 5"/>
    </svg>
  );
}
