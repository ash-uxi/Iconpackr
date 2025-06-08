import React from 'react';

/**
 * PiLogOutLeftDuoStroke icon from the duo-stroke style in general category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiLogOutLeftDuoStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'log-out-left icon',
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
      <path d="M11 4.52779C12.0615 3.57771 13.4633 3 15 3C18.3137 3 21 5.68629 21 9V15C21 18.3137 18.3137 21 15 21C13.4633 21 12.0615 20.4223 11 19.4722" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
  <path d="M5.81153 9C4.82454 9.74024 3.93322 10.599 3.15739 11.5564C3.05246 11.6859 3 11.843 3 12M5.81153 15C4.82454 14.2598 3.93322 13.401 3.15739 12.4436C3.05246 12.3141 3 12.157 3 12M3 12H16" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
    </svg>
  );
}
