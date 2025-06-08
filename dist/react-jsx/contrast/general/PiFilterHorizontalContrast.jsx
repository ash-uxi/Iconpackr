import React from 'react';

/**
 * PiFilterHorizontalContrast icon from the contrast style in general category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiFilterHorizontalContrast({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'filter-horizontal icon',
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
      <g fill="currentColor" opacity=".28">
    <path d="M10 7a3 3 0 0 1 3-3h1a3 3 0 1 1 0 6h-1a3 3 0 0 1-3-3M6 17a3 3 0 0 1 3-3h1a3 3 0 1 1 0 6H9a3 3 0 0 1-3-3"/>
  </g>
  <path d="M3 7h7m0 0a3 3 0 0 0 3 3h1a3 3 0 1 0 0-6h-1a3 3 0 0 0-3 3m6 10h5M20 7h1M3 17h3m0 0a3 3 0 0 0 3 3h1a3 3 0 1 0 0-6H9a3 3 0 0 0-3 3"/>
    </svg>
  );
}
