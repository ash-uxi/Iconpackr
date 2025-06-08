import React from 'react';

/**
 * PiDoubleChevronLeftDuoStroke icon from the duo-stroke style in arrows-&-chevrons category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiDoubleChevronLeftDuoStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'double-chevron-left icon',
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
      <path d="M11 8C9.53812 9.06206 8.22872 10.3071 7.1058 11.7021C6.96473 11.8774 6.96473 12.1226 7.1058 12.2979C8.22872 13.6929 9.53812 14.9379 11 16" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M17 8C15.5381 9.06206 14.2287 10.3071 13.1058 11.7021C12.9647 11.8774 12.9647 12.1226 13.1058 12.2979C14.2287 13.6929 15.5381 14.9379 17 16" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
    </svg>
  );
}
