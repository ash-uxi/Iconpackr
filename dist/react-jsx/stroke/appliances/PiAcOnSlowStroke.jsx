import React from 'react';

/**
 * PiAcOnSlowStroke icon from the stroke style in appliances category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiAcOnSlowStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'ac-on-slow icon',
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
      <path d="M18 8H16M12 16V20M17 16V18.8M7 16V18.8M22 12V6C22 4.89543 21.1046 4 20 4H4C2.89543 4 2 4.89543 2 6V12H22Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
