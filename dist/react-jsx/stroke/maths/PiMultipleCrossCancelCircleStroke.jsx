import React from 'react';

/**
 * PiMultipleCrossCancelCircleStroke icon from the stroke style in maths category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiMultipleCrossCancelCircleStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'multiple-cross-cancel-circle icon',
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
      <path d="M8.99976 15L11.9998 12M11.9998 12L14.9998 9M11.9998 12L8.99976 9M11.9998 12L14.9998 15M11.9996 21.1499C6.9462 21.1499 2.84961 17.0533 2.84961 11.9999C2.84961 6.94645 6.9462 2.84985 11.9996 2.84985C17.053 2.84985 21.1496 6.94645 21.1496 11.9999C21.1496 17.0533 17.053 21.1499 11.9996 21.1499Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
