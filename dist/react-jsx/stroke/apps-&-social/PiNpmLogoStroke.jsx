import React from 'react';

/**
 * PiNpmLogoStroke icon from the stroke style in apps-&-social category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiNpmLogoStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'npm-logo icon',
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
      <path d="M7 8H2C1.44772 8 1 8.44772 1 9V14C1 14.5523 1.44772 15 2 15H4M7 8H14M7 8V15M14 8H22C22.5523 8 23 8.44772 23 9V14C23 14.5523 22.5523 15 22 15H20M14 8V15M20 15H17M20 15V12M17 15H14M17 15V12M14 15H11V17H7V15M7 15H4M4 15V12M11 11V12" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
