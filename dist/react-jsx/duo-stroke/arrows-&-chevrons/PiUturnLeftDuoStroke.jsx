import React from 'react';

/**
 * PiUturnLeftDuoStroke icon from the duo-stroke style in arrows-&-chevrons category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiUturnLeftDuoStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'uturn-left icon',
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
      <path d="M4 8H15C17.7614 8 20 10.2386 20 13C20 15.7614 17.7614 18 15 18H12" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
  <path d="M8.03089 3.91602C6.57669 4.97466 5.2706 6.21138 4.14485 7.59488C4.04828 7.71356 4 7.85646 4 7.99935C4 8.14224 4.04828 8.28513 4.14485 8.40382C5.2706 9.78732 6.57669 11.024 8.03089 12.0827" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
    </svg>
  );
}
