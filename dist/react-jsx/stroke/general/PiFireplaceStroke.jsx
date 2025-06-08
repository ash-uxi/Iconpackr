import React from 'react';

/**
 * PiFireplaceStroke icon from the stroke style in general category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiFireplaceStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'fireplace icon',
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
      <path d="M3 21H5M5 21V7M5 21H19M5 7H4.5C3.67157 7 3 6.32843 3 5.5V4.5C3 3.67157 3.67157 3 4.5 3H19.5C20.3284 3 21 3.67157 21 4.5V5.5C21 6.32843 20.3284 7 19.5 7H19M5 7H19M19 21H21M19 21V7M10.9999 13.8078C11.8209 13.8078 12.3399 12.2942 12.6161 11C13.5567 11.5696 14.9999 13.0902 14.9999 14.8401C14.9999 16.3235 13.9999 17.8069 12 17.8069C9.99999 17.8069 9 16.3235 9 14.8401C9 13.9554 9.36888 13.1293 9.85521 12.4551C10.3238 13.1213 10.9398 13.7477 10.9999 13.8078Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
