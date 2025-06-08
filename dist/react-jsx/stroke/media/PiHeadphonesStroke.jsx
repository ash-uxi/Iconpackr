import React from 'react';

/**
 * PiHeadphonesStroke icon from the stroke style in media category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiHeadphonesStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'headphones icon',
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
      <path d="M20.9934 15.618C21.3545 14.356 20.6246 13.0399 19.3626 12.678C18.1001 12.316 16.7832 13.046 16.4212 14.3084L15.3724 17.9659C15.0104 19.2284 15.7404 20.5453 17.0029 20.9073C18.2654 21.2693 19.5823 20.5393 19.9443 19.2768L20.9934 15.618ZM20.9934 15.618C21.3295 14.6447 21.512 13.5997 21.512 12.5121C21.512 7.25872 17.2533 3 11.9999 3C6.74651 3 2.48779 7.25872 2.48779 12.5121C2.48779 13.5995 2.67024 14.6442 3.0062 15.6174M20.9934 15.618C20.9909 15.6254 20.9883 15.6327 20.9858 15.6401M3.0062 15.6174C2.64547 14.3555 3.37534 13.0398 4.63718 12.6779C5.89965 12.3159 7.21656 13.0459 7.57856 14.3084L8.62732 17.9658C8.98933 19.2283 8.25936 20.5452 6.99689 20.9072C5.73441 21.2692 4.41751 20.5392 4.0555 19.2768L3.0062 15.6174ZM3.0062 15.6174C3.01213 15.6346 3.01811 15.6518 3.02414 15.6689" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
