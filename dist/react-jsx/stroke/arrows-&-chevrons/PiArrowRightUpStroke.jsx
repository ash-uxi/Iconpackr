import React from 'react';

/**
 * PiArrowRightUpStroke icon from the stroke style in arrows-&-chevrons category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiArrowRightUpStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'arrow-right-up icon',
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
      <path d="M9.99855 5.51601C12.5858 5.12863 15.2066 5.07776 17.7955 5.36385C18.0176 5.38839 18.2154 5.48747 18.3639 5.63594M18.4838 14.0013C18.8712 11.414 18.9221 8.79321 18.636 6.20434C18.6115 5.98226 18.5124 5.7844 18.3639 5.63594M18.3639 5.63594L5.63599 18.3639" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
