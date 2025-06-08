import React from 'react';

/**
 * PiListTextWrapStroke icon from the stroke style in general category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiListTextWrapStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'list-text-wrap icon',
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
      <path d="M4 12H17C18.6569 12 20 13.3431 20 15C20 16.6569 18.6569 18 17 18H11M4 18H6.5M4 6H20M13.8115 21C12.8245 20.2598 11.9332 19.401 11.1574 18.4436C11.0525 18.3141 11 18.157 11 18M13.8115 15C12.8245 15.7402 11.9332 16.599 11.1574 17.5564C11.0525 17.6859 11 17.843 11 18" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
