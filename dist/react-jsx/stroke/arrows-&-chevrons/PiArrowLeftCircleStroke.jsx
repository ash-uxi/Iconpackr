import React from 'react';

/**
 * PiArrowLeftCircleStroke icon from the stroke style in arrows-&-chevrons category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiArrowLeftCircleStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'arrow-left-circle icon',
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
      <path d="M11.9488 16C10.5242 14.963 9.24481 13.7515 8.14204 12.3962C8.04744 12.28 8.00014 12.14 8.00014 12M11.9488 8C10.5242 9.03704 9.24481 10.2485 8.14204 11.6038C8.04744 11.72 8.00014 11.86 8.00014 12M8.00014 12L16.0001 12M21.1501 12.0001C21.1501 17.0535 17.0535 21.1501 12.0001 21.1501C6.94669 21.1501 2.8501 17.0535 2.8501 12.0001C2.8501 6.94669 6.94669 2.8501 12.0001 2.8501C17.0535 2.8501 21.1501 6.94669 21.1501 12.0001Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
