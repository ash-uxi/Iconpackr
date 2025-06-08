import React from 'react';

/**
 * PiListCancelDuoStroke icon from the duo-stroke style in general category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiListCancelDuoStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'list-cancel icon',
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
      <path d="M14.5 17.4971L17 14.9971M17 14.9971L19.5 12.4971M17 14.9971L14.5 12.4971M17 14.9971L19.5 17.4971" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M4 12H10M4 18H10M4 6H20" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
    </svg>
  );
}
