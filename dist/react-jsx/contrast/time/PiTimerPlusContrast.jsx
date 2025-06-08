import React from 'react';

/**
 * PiTimerPlusContrast icon from the contrast style in time category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiTimerPlusContrast({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'timer-plus icon',
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
      <path d="M12 17v-3m0 0v-3m0 3H9m3 0h3M12 2v4m0 0a8 8 0 1 0 0 16 8 8 0 0 0 0-16m-2-4h4m5.366 3.322 1.06 1.06"/>
  <path fill="currentColor" d="M20 14a8 8 0 1 1-16 0 8 8 0 0 1 16 0" opacity=".28"/>
    </svg>
  );
}
