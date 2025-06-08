import React from 'react';

/**
 * PiMagneticCompassStroke icon from the stroke style in navigation category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiMagneticCompassStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'magnetic-compass icon',
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
      <path d="M21.1496 12C21.1496 17.0534 17.053 21.15 11.9996 21.15C6.9462 21.15 2.84961 17.0534 2.84961 12C2.84961 6.94657 6.9462 2.84998 11.9996 2.84998C17.053 2.84998 21.1496 6.94657 21.1496 12Z" stroke="currentColor" strokeWidth="2" fill="none"/>
  <path d="M9.58677 15.4978C12.7623 15.2928 15.2924 12.7627 15.4975 9.58714C15.5372 8.97223 15.0274 8.46247 14.4125 8.50217C11.2369 8.70724 8.70687 11.2373 8.50181 14.4129C8.4621 15.0278 8.97186 15.5375 9.58677 15.4978Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
