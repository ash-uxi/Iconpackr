import React from 'react';

/**
 * PiLogInLeftStroke icon from the stroke style in general category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiLogInLeftStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'log-in-left icon',
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
      <path d="M13.1885 9C14.1755 9.74024 15.0668 10.599 15.8426 11.5564C15.9475 11.6859 16 11.843 16 12M13.1885 15C14.1755 14.2598 15.0668 13.401 15.8426 12.4436C15.9475 12.3141 16 12.157 16 12M16 12H3M11 4.52779C12.0615 3.57771 13.4633 3 15 3C18.3137 3 21 5.68629 21 9V15C21 18.3137 18.3137 21 15 21C13.4633 21 12.0615 20.4223 11 19.4722" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
