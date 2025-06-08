import React from 'react';

/**
 * PiWindowGridDuoStroke icon from the duo-stroke style in devices category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiWindowGridDuoStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'window-grid icon',
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
      <path d="M10 14V16H7V14H10ZM17 14V16H14V14H17ZM10 8V10H7V8H10ZM17 8V10H14V8H17Z" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M21 17V7C21 5.34315 19.6569 4 18 4L6 4C4.34315 4 3 5.34315 3 7V17C3 18.6569 4.34315 20 6 20H18C19.6569 20 21 18.6569 21 17Z" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
    </svg>
  );
}
