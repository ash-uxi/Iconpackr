import React from 'react';

/**
 * PiActivityStroke icon from the stroke style in general category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiActivityStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'activity icon',
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
      <path d="M2 12H5.27924C5.70967 12 6.09181 11.7246 6.22792 11.3162L9 3L15 21L17.7721 12.6838C17.9082 12.2754 18.2903 12 18.7208 12H22" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
