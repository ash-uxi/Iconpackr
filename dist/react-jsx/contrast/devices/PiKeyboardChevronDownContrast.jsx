import React from 'react';

/**
 * PiKeyboardChevronDownContrast icon from the contrast style in devices category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiKeyboardChevronDownContrast({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'keyboard-chevron-down icon',
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
      <path fill="currentColor" d="M15.6 3H8.4c-2.24 0-3.36 0-4.216.436a4 4 0 0 0-1.748 1.748C2 6.04 2 7.16 2 9.4v1.2c0 2.24 0 3.36.436 4.216a4 4 0 0 0 1.748 1.748C5.04 17 6.16 17 8.4 17h7.2c2.24 0 3.36 0 4.216-.436a4 4 0 0 0 1.748-1.748C22 13.96 22 12.84 22 10.6V9.4c0-2.24 0-3.36-.436-4.216a4 4 0 0 0-1.748-1.748C18.96 3 17.84 3 15.6 3" opacity=".28"/>
  <path d="M16 13H8M6 7h.01M10 7h.01M14 7h.01M18 7h.01M6 10h.01M10 10h.01M14 10h.01M18 10h.01M8.4 17h7.2c2.24 0 3.36 0 4.216-.436a4 4 0 0 0 1.748-1.748C22 13.96 22 12.84 22 10.6V9.4c0-2.24 0-3.36-.436-4.216a4 4 0 0 0-1.748-1.748C18.96 3 17.84 3 15.6 3H8.4c-2.24 0-3.36 0-4.216.436a4 4 0 0 0-1.748 1.748C2 6.04 2 7.16 2 9.4v1.2c0 2.24 0 3.36.436 4.216a4 4 0 0 0 1.748 1.748C5.04 17 6.16 17 8.4 17M7 20.166l5 2 5-2"/>
    </svg>
  );
}
