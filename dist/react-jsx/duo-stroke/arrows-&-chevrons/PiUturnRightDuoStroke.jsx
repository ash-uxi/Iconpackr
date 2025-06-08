import React from 'react';

/**
 * PiUturnRightDuoStroke icon from the duo-stroke style in arrows-&-chevrons category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiUturnRightDuoStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'uturn-right icon',
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
      <path d="M15.969 3.91602C17.4232 4.97466 18.7293 6.21138 19.855 7.59488C19.9516 7.71356 19.9999 7.85646 19.9999 7.99935C19.9999 8.14224 19.9516 8.28513 19.855 8.40382C18.7293 9.78732 17.4232 11.024 15.969 12.0827" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M20 8H9C6.23858 8 4 10.2386 4 13C4 15.7614 6.23858 18 9 18H12" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
    </svg>
  );
}
