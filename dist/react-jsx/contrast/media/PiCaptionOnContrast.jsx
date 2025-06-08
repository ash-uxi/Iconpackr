import React from 'react';

/**
 * PiCaptionOnContrast icon from the contrast style in media category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiCaptionOnContrast({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'caption-on icon',
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
      <path d="M10.25 15.5a3 3 0 0 1-3-3V12a3 3 0 0 1 3-3m6.5 6.5a3 3 0 0 1-3-3V12a3 3 0 0 1 3-3M9.4 4h5.2c2.24 0 3.36 0 4.216.436a4 4 0 0 1 1.748 1.748C21 7.04 21 8.16 21 10.4v3.2c0 2.24 0 3.36-.436 4.216a4 4 0 0 1-1.748 1.748C17.96 20 16.84 20 14.6 20H9.4c-2.24 0-3.36 0-4.216-.436a4 4 0 0 1-1.748-1.748C3 16.96 3 15.84 3 13.6v-3.2c0-2.24 0-3.36.436-4.216a4 4 0 0 1 1.748-1.748C6.04 4 7.16 4 9.4 4"/>
  <path fill="currentColor" d="M3 10.4c0-2.24 0-3.36.436-4.216a4 4 0 0 1 1.748-1.748C6.04 4 7.16 4 9.4 4h5.2c2.24 0 3.36 0 4.216.436a4 4 0 0 1 1.748 1.748C21 7.04 21 8.16 21 10.4v3.2c0 2.24 0 3.36-.436 4.216a4 4 0 0 1-1.748 1.748C17.96 20 16.84 20 14.6 20H9.4c-2.24 0-3.36 0-4.216-.436a4 4 0 0 1-1.748-1.748C3 16.96 3 15.84 3 13.6z" opacity=".28"/>
    </svg>
  );
}
