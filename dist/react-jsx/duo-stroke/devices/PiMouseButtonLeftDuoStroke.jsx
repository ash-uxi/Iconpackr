import React from 'react';

/**
 * PiMouseButtonLeftDuoStroke icon from the duo-stroke style in devices category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiMouseButtonLeftDuoStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'mouse-button-left icon',
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
      <path d="M19 14V10C19 6.13401 15.866 3 12 3V7.8C12 8.92011 12 9.48016 11.782 9.90798C11.5903 10.2843 11.2843 10.5903 10.908 10.782C10.4802 11 9.9201 11 8.8 11H5V14C5 17.866 8.13401 21 12 21C15.866 21 19 17.866 19 14Z" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
  <path d="M5 10C5 6.13401 8.13401 3 12 3V7.8C12 8.92011 12 9.48016 11.782 9.90798C11.5903 10.2843 11.2843 10.5903 10.908 10.782C10.4802 11 9.9201 11 8.8 11H5V10Z" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
    </svg>
  );
}
