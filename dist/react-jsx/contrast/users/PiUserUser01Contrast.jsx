import React from 'react';

/**
 * PiUserUser01Contrast icon from the contrast style in users category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiUserUser01Contrast({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'user-user-01 icon',
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
      <g fill="currentColor" opacity=".28">
    <path d="M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0M17 15H7a3 3 0 1 0 0 6h10a3 3 0 1 0 0-6"/>
  </g>
  <path d="M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0M17 15H7a3 3 0 1 0 0 6h10a3 3 0 1 0 0-6"/>
    </svg>
  );
}
