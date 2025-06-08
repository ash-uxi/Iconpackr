import React from 'react';

/**
 * PiVerificationCheckStroke icon from the stroke style in general category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiVerificationCheckStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'verification-check icon',
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
      <path d="M9.00003 12.1403L11.0068 14.1449C11.9719 12.4572 13.3076 11.0107 14.9132 9.91434L15 9.85505M21.25 12C21.25 10.7095 20.4559 9.59049 19.2737 8.98585C19.6888 7.73146 19.4541 6.36878 18.5427 5.45732C17.6312 4.54585 16.2685 4.31122 15.0141 4.72634C14.4185 3.54415 13.2905 2.75 12 2.75C10.7095 2.75 9.59049 3.54415 8.99488 4.72634C7.73146 4.31122 6.36878 4.54585 5.45732 5.45732C4.54585 6.36878 4.32024 7.73146 4.73537 8.98585C3.55317 9.59049 2.75 10.7095 2.75 12C2.75 13.2905 3.55317 14.4095 4.73537 15.0141C4.32024 16.2685 4.54585 17.6312 5.45732 18.5427C6.36878 19.4541 7.73146 19.6798 8.98585 19.2737C9.59049 20.4559 10.7095 21.25 12 21.25C13.2905 21.25 14.4185 20.4559 15.0141 19.2737C16.2685 19.6798 17.6312 19.4541 18.5427 18.5427C19.4541 17.6312 19.6888 16.2685 19.2737 15.0141C20.4559 14.4095 21.25 13.2905 21.25 12Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
