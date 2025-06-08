import React from 'react';

/**
 * PiTimerRemoveContrast icon from the contrast style in time category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiTimerRemoveContrast({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'timer-remove icon',
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
      <path fill="currentColor" d="M20 14a8 8 0 1 1-16 0 8 8 0 0 1 16 0" opacity=".28"/>
  <path d="M9 14h6M12 2v4m0 0a8 8 0 1 0 0 16 8 8 0 0 0 0-16m-2-4h4m5.366 3.322 1.06 1.06"/>
    </svg>
  );
}
