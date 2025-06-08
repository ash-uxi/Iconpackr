import React from 'react';

/**
 * PiEyeOffStroke icon from the stroke style in security category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiEyeOffStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'eye-off icon',
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
      <path d="M20.0778 9.57842C20.6787 10.5127 21 11.394 21 12C21 14 17.5 19 12 19C11.569 19 11.1502 18.9693 10.7445 18.9117M17.2929 6.70713C15.8674 5.71248 14.0762 5 12 5C6.5 5 3 10 3 12C3 13.245 4.35633 15.6526 6.70713 17.2929M17.2929 6.70713L22 2M17.2929 6.70713L14.1213 9.87868M6.70713 17.2929L2 22M6.70713 17.2929L9.87868 14.1213M9.87868 14.1213C9.33579 13.5784 9 12.8284 9 12C9 10.3431 10.3431 9 12 9C12.8284 9 13.5784 9.33579 14.1213 9.87868M9.87868 14.1213L14.1213 9.87868" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
