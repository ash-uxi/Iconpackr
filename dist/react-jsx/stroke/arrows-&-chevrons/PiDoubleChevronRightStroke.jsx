import React from 'react';

/**
 * PiDoubleChevronRightStroke icon from the stroke style in arrows-&-chevrons category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiDoubleChevronRightStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'double-chevron-right icon',
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
      <path d="M13 8C14.4619 9.06206 15.7713 10.3071 16.8942 11.7021C17.0353 11.8774 17.0353 12.1226 16.8942 12.2979C15.7713 13.6929 14.4619 14.9379 13 16M7 8C8.46188 9.06206 9.77128 10.3071 10.8942 11.7021C11.0353 11.8774 11.0353 12.1226 10.8942 12.2979C9.77128 13.6929 8.46188 14.9379 7 16" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
