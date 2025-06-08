import React from 'react';

/**
 * PiListDefaultDuoStroke icon from the duo-stroke style in general category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiListDefaultDuoStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'list-default icon',
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
      <path d="M21 6H9M21 12H9M21 18H9" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
  <path d="M3 12C3 11.4477 3.44772 11 4 11C4.55228 11 5 11.4477 5 12C5 12.5523 4.55228 13 4 13C3.44772 13 3 12.5523 3 12Z" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M3 18C3 17.4477 3.44772 17 4 17C4.55228 17 5 17.4477 5 18C5 18.5523 4.55228 19 4 19C3.44772 19 3 18.5523 3 18Z" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M3 6C3 5.44772 3.44772 5 4 5C4.55228 5 5 5.44772 5 6C5 6.55228 4.55228 7 4 7C3.44772 7 3 6.55228 3 6Z" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
    </svg>
  );
}
