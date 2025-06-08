import React from 'react';

/**
 * PiChevronLeftStroke icon from the stroke style in arrows-&-chevrons category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiChevronLeftStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'chevron-left icon',
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
      <path d="M14.1252 8.13916C12.6634 9.20122 11.354 10.4462 10.231 11.8413C10.09 12.0165 10.09 12.2618 10.231 12.437C11.354 13.8321 12.6634 15.0771 14.1252 16.1392" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
