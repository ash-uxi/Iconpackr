import React from 'react';

/**
 * PiLeafDuoStroke icon from the duo-stroke style in weather category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiLeafDuoStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'leaf icon',
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
      <path d="M13 10.5C13 10.5 5 14 5 20.5" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M5.33932 18.2119C0.33921 2.71194 15.5002 7 19.0002 3C22.0816 14.5 17.8393 22.7119 5.33932 18.2119Z" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
    </svg>
  );
}
