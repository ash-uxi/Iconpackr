import React from 'react';

/**
 * PiSignalDuoStroke icon from the duo-stroke style in navigation category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiSignalDuoStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'signal icon',
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
      <path d="M13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12Z" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M15.8414 8.15845C17.963 10.28 17.963 13.7198 15.8414 15.8413M8.15856 15.8413C6.03699 13.7198 6.03699 10.28 8.15856 8.15845" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
  <path d="M19.0711 4.92896C22.9763 8.8342 22.9763 15.1658 19.0711 19.0711M4.92893 19.0711C1.02369 15.1658 1.02369 8.8342 4.92893 4.92896" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
    </svg>
  );
}
