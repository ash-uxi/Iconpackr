import React from 'react';

/**
 * PiTvOldStroke icon from the stroke style in appliances category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiTvOldStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'tv-old icon',
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
      <path d="M15.0001 18H15.0101M18.0001 18H18.0101M6.12012 2L12.0001 5L18.0001 2" stroke="currentColor" strokeWidth="2" fill="none"/>
  <path d="M17 8H7C6.44772 8 6 8.44772 6 9V14C6 14.5523 6.44772 15 7 15H17C17.5523 15 18 14.5523 18 14V9C18 8.44772 17.5523 8 17 8Z" stroke="currentColor" strokeWidth="2" fill="none"/>
  <path d="M18 5H6C4.34315 5 3 6.34315 3 8V18C3 19.6569 4.34315 21 6 21H18C19.6569 21 21 19.6569 21 18V8C21 6.34315 19.6569 5 18 5Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
