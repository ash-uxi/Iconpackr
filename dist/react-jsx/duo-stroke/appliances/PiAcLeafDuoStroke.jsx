import React from 'react';

/**
 * PiAcLeafDuoStroke icon from the duo-stroke style in appliances category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiAcLeafDuoStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'ac-leaf icon',
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
      <path d="M18.0001 8H16.0001M14.8022 22L14.8425 21.8903C15.2848 20.6838 16.0953 19.647 17.1593 18.9265M16.6768 16.0715C15.2046 16.9215 14.6524 18.7213 15.2937 19.832C15.9349 20.9427 17.7697 21.3643 19.2419 20.5144C20.7141 19.6644 22.2785 16.5397 21.9579 15.9844C21.6373 15.429 18.1491 15.2215 16.6768 16.0715Z" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M20 4H4C2.89543 4 2 4.89543 2 6V12H22V6C22 4.89543 21.1046 4 20 4Z" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
    </svg>
  );
}
