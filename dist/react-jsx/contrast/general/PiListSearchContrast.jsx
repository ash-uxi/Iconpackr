import React from 'react';

/**
 * PiListSearchContrast icon from the contrast style in general category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiListSearchContrast({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'list-search icon',
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
      <path fill="currentColor" d="M20.5 15c0-1.659-1.341-3-3-3s-3 1.341-3 3 1.341 3 3 3c1.654 0 3-1.346 3-3" opacity=".28"/>
  <path d="M4 12h6m-6 6h6M4 6h16m1 12.5-1.379-1.379m0 0A2.998 2.998 0 0 0 17.5 12c-1.659 0-3 1.341-3 3a2.998 2.998 0 0 0 5.121 2.121"/>
    </svg>
  );
}
