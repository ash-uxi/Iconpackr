import React from 'react';

/**
 * PiArrowLeftDownStroke icon from the stroke style in arrows-&-chevrons category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiArrowLeftDownStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'arrow-left-down icon',
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
      <path d="M5.51601 9.99855C5.12863 12.5858 5.07776 15.2066 5.36385 17.7955C5.38839 18.0176 5.48747 18.2154 5.63594 18.3639M14.0013 18.4838C11.414 18.8712 8.79321 18.9221 6.20434 18.636C5.98226 18.6115 5.7844 18.5124 5.63594 18.3639M5.63594 18.3639L18.3639 5.63599" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
