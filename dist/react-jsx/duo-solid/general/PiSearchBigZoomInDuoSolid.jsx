import React from 'react';

/**
 * PiSearchBigZoomInDuoSolid icon from the duo-solid style in general category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiSearchBigZoomInDuoSolid({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'search-big-zoom-in icon',
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
      <path d="M11.5 14.5v-3m0 0v-3m0 3h-3m3 0h3" /> <path fill={color || "currentColor"} d="M11.5 2a9.5 9.5 0 1 0 5.973 16.888l2.82 2.82a1 1 0 0 0 1.414-1.415l-2.82-2.82A9.5 9.5 0 0 0 11.5 2" opacity=".28" />
    </svg>
  );
}
