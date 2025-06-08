import React from 'react';

/**
 * PiFilterHorizontalDuoSolid icon from the duo-solid style in general category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiFilterHorizontalDuoSolid({ 
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
      
       style={{color: color || "currentColor"}}
      
      role="img"
      aria-label={ariaLabel}
      {...props}
    >
      <path fill={color || "currentColor"} d="M13 3a4 4 0 0 0 0 8h1a4 4 0 0 0 0-8z" /> <path d="M3 7h7m6 10h5M20 7h1M3 17h3" opacity=".28" /> <path fill={color || "currentColor"} d="M9 13a4 4 0 0 0 0 8h1a4 4 0 0 0 0-8z" />
    </svg>
  );
}
