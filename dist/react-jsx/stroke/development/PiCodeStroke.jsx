import React from 'react';

/**
 * PiCodeStroke icon from the stroke style in development category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiCodeStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'code icon',
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
      <path d="M17.0004 18C18.8177 16.423 20.4474 14.5771 21.848 12.5102C22.0511 12.2104 22.0511 11.7897 21.848 11.4899C20.4474 9.42298 18.8177 7.57705 17.0004 6.00004M7.00391 18C5.18658 16.423 3.5569 14.5771 2.15627 12.5101C1.95312 12.2103 1.95312 11.7897 2.15627 11.4899C3.5569 9.42294 5.18658 7.57701 7.00391 6M14.0039 4.00098L10.0039 20.001" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
