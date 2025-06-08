import React from 'react';

/**
 * PiClockDefaultStroke icon from the stroke style in time category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiClockDefaultStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'clock-default icon',
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
      <path d="M11.9995 8V12.8164C11.9995 12.9874 12.0869 13.1465 12.2311 13.2383L14.9995 15M21.1496 12.0001C21.1496 17.0535 17.053 21.1501 11.9996 21.1501C6.9462 21.1501 2.84961 17.0535 2.84961 12.0001C2.84961 6.94669 6.9462 2.8501 11.9996 2.8501C17.053 2.8501 21.1496 6.94669 21.1496 12.0001Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
