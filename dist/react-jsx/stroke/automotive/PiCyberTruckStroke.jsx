import React from 'react';

/**
 * PiCyberTruckStroke icon from the stroke style in automotive category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiCyberTruckStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'cyber-truck icon',
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
      <path d="M8 15C8 16.1046 7.10457 17 6 17C4.89543 17 4 16.1046 4 15M8 15C8 13.8954 7.10457 13 6 13C4.89543 13 4 13.8954 4 15M8 15H16M4 15H1V12L10 7L22.5 10L22 15H20M20 15C20 16.1046 19.1046 17 18 17C16.8954 17 16 16.1046 16 15M20 15C20 13.8954 19.1046 13 18 13C16.8954 13 16 13.8954 16 15" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
