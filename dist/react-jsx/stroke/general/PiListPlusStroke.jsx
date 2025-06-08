import React from 'react';

/**
 * PiListPlusStroke icon from the stroke style in general category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiListPlusStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'list-plus icon',
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
      <path d="M4 12H10M4 18H10M4 6H20M17 18V15M17 15V12M17 15H14M17 15H20" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
