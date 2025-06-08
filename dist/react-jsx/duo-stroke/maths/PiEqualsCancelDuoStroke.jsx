import React from 'react';

/**
 * PiEqualsCancelDuoStroke icon from the duo-stroke style in maths category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiEqualsCancelDuoStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'equals-cancel icon',
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
      <path d="M5 21L19 3" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M5 9H14.3333M15 15L19 15M18.9805 9H19M5 15H9.66667" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
    </svg>
  );
}
