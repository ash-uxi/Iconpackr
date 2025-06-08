import React from 'react';

/**
 * PiListArrowUpStroke icon from the stroke style in general category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiListArrowUpStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'list-arrow-up icon',
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
      <path d="M4 12H12M4 18H12M4 6H20M16 14.3115C16.7402 13.3245 17.599 12.4332 18.5564 11.6574C18.6859 11.5525 18.843 11.5 19 11.5M22 14.3115C21.2598 13.3245 20.401 12.4332 19.4436 11.6574C19.3141 11.5525 19.157 11.5 19 11.5M19 11.5V18.9973" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
