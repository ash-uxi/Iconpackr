import React from 'react';

/**
 * PiCheckTickDoubleDuoStroke icon from the duo-stroke style in general category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiCheckTickDoubleDuoStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'check-tick-double icon',
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
      <path d="M2.60547 11.7812L7.1292 17.0048L7.50331 16.3507C9.50918 12.8432 12.2851 9.83693 15.6219 7.55842L16.4468 6.99512" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M21.5529 7.60889L20.6831 8.09997C17.1646 10.0863 14.1429 12.8456 11.8459 16.1696L11.4175 16.7896L11.1201 16.4371" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
    </svg>
  );
}
