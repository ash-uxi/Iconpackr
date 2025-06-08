import React from 'react';

/**
 * PiSpotlightDuoStroke icon from the duo-stroke style in general category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiSpotlightDuoStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'spotlight icon',
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
      <path d="M16 22.5c3.866 0 7-1.172 7-2 0-.258-.304-.549-.838-.828C20.979 19.057 18.663 18.5 16 18.5c-3.866 0-7 1.171-7 2 0 .828 3.134 2 7 2" fill="none"/>
  <path d="M4.718 10 9 20.5M9.328 7l12.834 12.673" opacity=".28" fill="none"/>
  <path d="M6.614 4.32 5.467 2.68A2 2 0 0 0 2.19 4.975l1.147 1.639z" fill="none"/>
  <rect width="24" height="24"  fill="none"/>
    </svg>
  );
}
