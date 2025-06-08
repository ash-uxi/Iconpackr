import React from 'react';

/**
 * PiDivertLeftDuoStroke icon from the duo-stroke style in arrows-&-chevrons category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiDivertLeftDuoStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'divert-left icon',
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
      <path d="M22 9L15.1213 15.8787C13.9497 17.0503 12.0503 17.0503 10.8787 15.8787L3.29492 8.29492" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
  <path d="M9 8.28858C7.22143 7.99076 5.42407 7.92321 3.65281 8.08707C3.50086 8.10113 3.36646 8.16659 3.26652 8.26652C3.16659 8.36646 3.10113 8.50086 3.08707 8.65281C2.92321 10.4241 2.99076 12.2214 3.28858 14" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
    </svg>
  );
}
