import React from 'react';

/**
 * PiPriorityLowStroke icon from the stroke style in development category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiPriorityLowStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'priority-low icon',
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
      <path d="M5.19971 9.75C5.32615 10.0107 5.51125 10.2482 5.75084 10.4452C7.39132 11.7937 9.25488 13.0164 11.3068 14.0903C11.5102 14.1968 11.7552 14.25 12.0001 14.25C12.2451 14.25 12.4901 14.1968 12.6935 14.0903C14.7454 13.0164 16.609 11.7937 18.2495 10.4452C18.4891 10.2482 18.6741 10.0107 18.8006 9.75" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
