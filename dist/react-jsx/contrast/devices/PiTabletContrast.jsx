import React from 'react';

/**
 * PiTabletContrast icon from the contrast style in devices category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiTabletContrast({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'tablet icon',
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
      <path d="M10 19h4m-4.6 3h5.2c2.24 0 3.36 0 4.216-.436a4 4 0 0 0 1.748-1.748C21 18.96 21 17.84 21 15.6V8.4c0-2.24 0-3.36-.436-4.216a4 4 0 0 0-1.748-1.748C17.96 2 16.84 2 14.6 2H9.4c-2.24 0-3.36 0-4.216.436a4 4 0 0 0-1.748 1.748C3 5.04 3 6.16 3 8.4v7.2c0 2.24 0 3.36.436 4.216a4 4 0 0 0 1.748 1.748C6.04 22 7.16 22 9.4 22"/>
  <path fill="currentColor" d="M14.6 2H9.4c-2.24 0-3.36 0-4.216.436a4 4 0 0 0-1.748 1.748C3 5.04 3 6.16 3 8.4v7.2c0 2.24 0 3.36.436 4.216a4 4 0 0 0 1.748 1.748C6.04 22 7.16 22 9.4 22h5.2c2.24 0 3.36 0 4.216-.436a4 4 0 0 0 1.748-1.748C21 18.96 21 17.84 21 15.6V8.4c0-2.24 0-3.36-.436-4.216a4 4 0 0 0-1.748-1.748C17.96 2 16.84 2 14.6 2" opacity=".28"/>
    </svg>
  );
}
