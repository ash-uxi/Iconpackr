import React from 'react';

/**
 * PiDownloadDownSolid icon from the solid style in general category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiDownloadDownSolid({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'download-down icon',
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
      <path d="M13 4C13 3.44772 12.5523 3 12 3C11.4477 3 11 3.44772 11 4V11.3216C10.3658 11.2997 9.73211 11.257 9.10001 11.1935C8.70512 11.1538 8.32413 11.3514 8.12909 11.697C7.93404 12.0427 7.96187 12.471 8.2 12.7885C8.98959 13.8413 9.90559 14.792 10.9269 15.6196C11.2392 15.8726 11.6199 16 12 16C12.3801 16 12.7608 15.8726 13.0731 15.6195C14.0944 14.792 15.0104 13.8413 15.8 12.7885C16.0381 12.471 16.066 12.0427 15.8709 11.697C15.6759 11.3514 15.2949 11.1538 14.9 11.1935C14.2679 11.257 13.6342 11.2997 13 11.3216V4Z" fill="currentColor" stroke="none"/>
  <path d="M4 15C4 14.4477 3.55228 14 3 14C2.44772 14 2 14.4477 2 15C2 18.3137 4.68629 21 8 21H16C19.3137 21 22 18.3137 22 15C22 14.4477 21.5523 14 21 14C20.4477 14 20 14.4477 20 15C20 17.2091 18.2091 19 16 19H8C5.79086 19 4 17.2091 4 15Z" fill="currentColor" stroke="none"/>
    </svg>
  );
}
