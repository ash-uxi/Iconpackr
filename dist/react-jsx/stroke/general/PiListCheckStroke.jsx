import React from 'react';

/**
 * PiListCheckStroke icon from the stroke style in general category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiListCheckStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'list-check icon',
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
      <path d="M4 12H10M4 18H10M4 6H20M13.5 14.9783L15.8412 17.317C16.9672 15.3481 18.5256 13.6604 20.3987 12.3813" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
