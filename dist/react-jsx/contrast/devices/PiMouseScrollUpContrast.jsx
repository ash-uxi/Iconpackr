import React from 'react';

/**
 * PiMouseScrollUpContrast icon from the contrast style in devices category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiMouseScrollUpContrast({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'mouse-scroll-up icon',
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
      <path d="M14 10.5a10 10 0 0 0-1.704-1.77.47.47 0 0 0-.592 0A10 10 0 0 0 10 10.5m9-.5v4a7 7 0 1 1-14 0v-4a7 7 0 0 1 14 0"/>
  <path fill="currentColor" d="M19 14v-4a7 7 0 1 0-14 0v4a7 7 0 1 0 14 0" opacity=".28"/>
    </svg>
  );
}
