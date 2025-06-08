import React from 'react';

/**
 * PiCookieContrast icon from the contrast style in food category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiCookieContrast({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'cookie icon',
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
      <path fill="currentColor" d="M17.025 9.975a5.5 5.5 0 0 1-5.828-6.94 9 9 0 1 0 9.593 10.91 4.5 4.5 0 0 1-3.765-3.97" opacity=".28"/>
  <path d="M8.404 8.193v.01m2.386 9.48v.01M16 5v.01M20 5v.01M21 9v.01m-3.975.965a5.5 5.5 0 0 1-5.828-6.94 9 9 0 1 0 9.593 10.91 4.5 4.5 0 0 1-3.765-3.97M9 13.018a1 1 0 1 1-2 0 1 1 0 0 1 2 0m6.717 1.748a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
    </svg>
  );
}
