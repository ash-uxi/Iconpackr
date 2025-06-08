import React from 'react';

/**
 * PiToggleOnContrast icon from the contrast style in general category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiToggleOnContrast({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'toggle-on icon',
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
      <path fill="currentColor" d="M15 5H9a7 7 0 0 0 0 14h6a7 7 0 1 0 0-14" opacity=".28"/>
  <path d="M15 5H9a7 7 0 0 0 0 14h6a7 7 0 1 0 0-14"/>
  <path d="M19 12a4 4 0 1 0-8 0 4 4 0 0 0 8 0"/>
    </svg>
  );
}
