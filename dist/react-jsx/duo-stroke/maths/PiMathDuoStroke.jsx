import React from 'react';

/**
 * PiMathDuoStroke icon from the duo-stroke style in maths category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiMathDuoStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'math icon',
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
      <path d="M17 11V7M17 7V3M17 7L13 7M17 7H21M3 21L6 18M6 18L9 15M6 18L3 15M6 18L9 21" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
  <path d="M3 7H9M14 16H21M14 20H21" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
    </svg>
  );
}
