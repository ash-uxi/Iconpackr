import React from 'react';

/**
 * PiUnderlineStroke icon from the stroke style in editing category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiUnderlineStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'underline icon',
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
      <path d="M17 20H7M17 4V10.6667C17 13.4281 14.7614 15.6667 12 15.6667C9.23858 15.6667 7 13.4281 7 10.6667V4" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
