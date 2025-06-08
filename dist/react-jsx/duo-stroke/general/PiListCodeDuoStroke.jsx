import React from 'react';

/**
 * PiListCodeDuoStroke icon from the duo-stroke style in general category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiListCodeDuoStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'list-code icon',
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
      <path d="M18.7143 17.2716C19.5496 16.6647 20.2979 15.9533 20.9395 15.1561C21.0202 15.056 21.0202 14.9158 20.9395 14.8157C20.2979 14.0185 19.5496 13.3071 18.7143 12.7002M15.2857 12.7002C14.4504 13.3071 13.7021 14.0185 13.0605 14.8157C12.9798 14.9158 12.9798 15.056 13.0605 15.1561C13.7021 15.9533 14.4504 16.6647 15.2857 17.2716" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M4 12H10M4 18H10M4 6H20" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
    </svg>
  );
}
