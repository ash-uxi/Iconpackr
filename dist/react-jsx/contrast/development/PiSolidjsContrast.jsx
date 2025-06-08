import React from 'react';

/**
 * PiSolidjsContrast icon from the contrast style in development category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiSolidjsContrast({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'solidjs icon',
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
    <path d="m4 15.963 11.659-3.124c6.262-1.678 6.831 6.443.553 8.13C11.245 22.162 7.364 18.953 4 15.964M20.74 8.261 9.083 11.385c-6.262 1.678-6.832-6.443-.553-8.13 4.967-1.192 8.847 2.017 12.212 5.006"/>
  </g>
  <path d="M20.74 8.261 9.083 11.385c-6.262 1.678-6.832-6.443-.553-8.13 4.967-1.192 8.847 2.017 12.212 5.006M4 15.963l11.659-3.124c6.262-1.678 6.831 6.443.553 8.13C11.245 22.162 7.364 18.953 4 15.964"/>
    </svg>
  );
}
