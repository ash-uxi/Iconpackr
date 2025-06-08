import React from 'react';

/**
 * PiMoonDuoStroke icon from the duo-stroke style in weather category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiMoonDuoStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'moon icon',
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
      <path d="M16 14.0001C18.0722 14.0001 19.899 12.9497 20.977 11.3522C20.9923 11.5661 21 11.7822 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C12.2179 3 12.434 3.00775 12.6481 3.02298C11.0505 4.10098 10 5.92787 10 8.00012C10 11.3138 12.6863 14.0001 16 14.0001Z" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
  <path d="M20.977 11.3522C19.899 12.9496 18.0722 14.0001 16 14.0001C12.6863 14.0001 10 11.3138 10 8.0001C10 5.92784 11.0505 4.10095 12.6481 3.02295" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
    </svg>
  );
}
