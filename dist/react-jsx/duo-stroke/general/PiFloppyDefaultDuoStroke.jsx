import React from 'react';

/**
 * PiFloppyDefaultDuoStroke icon from the duo-stroke style in general category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiFloppyDefaultDuoStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'floppy-default icon',
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
      <path d="M11 7H7M17 21V17.8C17 16.12 17 15.28 16.673 14.638C16.3854 14.0735 15.9265 13.6146 15.362 13.327C14.72 13 13.88 13 12.2 13H11.8C10.12 13 9.28 13 8.638 13.327C8.07354 13.6146 7.61462 14.0735 7.327 14.638C7 15.28 7 16.12 7 17.8V21" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M17.21 3.937C16.488 3.217 15.964 3 14.946 3H9.4C7.16 3 6.04 3 5.184 3.436C4.43139 3.81949 3.81949 4.43139 3.436 5.184C3 6.04 3 7.16 3 9.4V17C3 18.0609 3.42143 19.0783 4.17157 19.8284C4.92172 20.5786 5.93913 21 7 21H17C18.0609 21 19.0783 20.5786 19.8284 19.8284C20.5786 19.0783 21 18.0609 21 17V9.053C21 8.035 20.783 7.511 20.063 6.791L17.21 3.937Z" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
    </svg>
  );
}
