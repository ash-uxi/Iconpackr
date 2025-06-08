import React from 'react';

/**
 * PiRiveDuoStroke icon from the duo-stroke style in apps-&-social category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiRiveDuoStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'rive icon',
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
      <path d="M14.9473 12.9104L20.0001 21" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
  <path d="M4 3H14C16.7614 3 19 5.23858 19 8C19 10.4376 17.2557 12.4678 14.9472 12.9104C14.6405 12.9692 14.3238 13 14 13H9" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
    </svg>
  );
}
