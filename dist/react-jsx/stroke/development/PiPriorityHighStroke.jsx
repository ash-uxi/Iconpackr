import React from 'react';

/**
 * PiPriorityHighStroke icon from the stroke style in development category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiPriorityHighStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'priority-high icon',
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
      <path d="M5.19971 14.25C5.32615 13.9893 5.51125 13.7518 5.75084 13.5548C7.39132 12.2063 9.25488 10.9836 11.3068 9.90972C11.5102 9.80324 11.7552 9.75 12.0001 9.75C12.2451 9.75 12.4901 9.80324 12.6935 9.90972C14.7454 10.9836 16.609 12.2063 18.2495 13.5548C18.4891 13.7518 18.6741 13.9893 18.8006 14.25" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
