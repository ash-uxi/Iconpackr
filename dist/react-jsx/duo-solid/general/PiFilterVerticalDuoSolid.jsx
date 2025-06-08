import React from 'react';

/**
 * PiFilterVerticalDuoSolid icon from the duo-solid style in general category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiFilterVerticalDuoSolid({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'filter-vertical icon',
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
      <path d="M17 3v7m0 10v1M7 3v3m0 10v5" opacity=".28" /> <path fill={color || "currentColor"} d="M17 9a4 4 0 0 0-4 4v1a4 4 0 0 0 8 0v-1a4 4 0 0 0-4-4M7 5a4 4 0 0 0-4 4v1a4 4 0 0 0 8 0V9a4 4 0 0 0-4-4" />
    </svg>
  );
}
