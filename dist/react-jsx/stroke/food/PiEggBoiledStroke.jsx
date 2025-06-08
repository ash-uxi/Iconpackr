import React from 'react';

/**
 * PiEggBoiledStroke icon from the stroke style in food category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiEggBoiledStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'egg-boiled icon',
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
      <path d="M15.5002 14C15.5002 15.933 13.9332 17.5 12.0002 17.5C10.0672 17.5 8.50021 15.933 8.50021 14C8.50021 12.067 10.0672 10.5 12.0002 10.5C13.9332 10.5 15.5002 12.067 15.5002 14Z" stroke="currentColor" strokeWidth="2" fill="none"/>
  <path d="M19.3891 14.1111C19.3891 18.1919 16.081 21.5 12.0002 21.5C7.91945 21.5 4.61133 18.1919 4.61133 14.1111C4.61133 10.0303 7.91945 2.5 12.0002 2.5C16.081 2.5 19.3891 10.0303 19.3891 14.1111Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
