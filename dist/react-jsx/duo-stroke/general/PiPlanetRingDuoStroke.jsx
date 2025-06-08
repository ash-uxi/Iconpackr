import React from 'react';

/**
 * PiPlanetRingDuoStroke icon from the duo-stroke style in general category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiPlanetRingDuoStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'planet-ring icon',
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
      <path d="M19.8586 6.66057C21.4552 6.23894 22.5103 6.19012 22.7206 6.60823C23.2169 7.59502 18.8195 10.809 12.8988 13.7868C6.97801 16.7646 1.77596 18.3787 1.27966 17.3919C1.06943 16.9739 1.73725 16.1563 3.02697 15.1263" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12Z" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
    </svg>
  );
}
