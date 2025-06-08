import React from 'react';

/**
 * PiDangerSkullDuoStroke icon from the duo-stroke style in general category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiDangerSkullDuoStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'danger-skull icon',
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
      <path d="M10.2998 11C10.2998 11.5523 9.85209 12 9.2998 12C8.74752 12 8.2998 11.5523 8.2998 11C8.2998 10.4477 8.74752 10 9.2998 10C9.85209 10 10.2998 10.4477 10.2998 11Z" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M15.6998 11C15.6998 11.5523 15.2521 12 14.6998 12C14.1475 12 13.6998 11.5523 13.6998 11C13.6998 10.4477 14.1475 10 14.6998 10C15.2521 10 15.6998 10.4477 15.6998 11Z" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M19 14.4188V10C19 6.13401 15.866 3 12 3C8.13401 3 5 6.13401 5 10V14.4188C5 15.3631 5.60421 16.2014 6.5 16.5C7.39579 16.7986 8 17.6369 8 18.5811V18.6754C8 19.9593 9.04074 21 10.3246 21H13.6754C14.9593 21 16 19.9593 16 18.6754V18.5811C16 17.6369 16.6042 16.7986 17.5 16.5C18.3958 16.2014 19 15.3631 19 14.4188Z" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
    </svg>
  );
}
