import React from 'react';

/**
 * PiArrowRightCircleStroke icon from the stroke style in arrows-&-chevrons category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiArrowRightCircleStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'arrow-right-circle icon',
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
      <path d="M12.0515 16C13.476 14.963 14.7555 13.7515 15.8582 12.3962C15.9528 12.28 16.0001 12.14 16.0001 12M12.0515 8C13.476 9.03704 14.7555 10.2485 15.8582 11.6038C15.9528 11.72 16.0001 11.86 16.0001 12M16.0001 12L8.00014 12M21.1501 12.0001C21.1501 17.0535 17.0535 21.1501 12.0001 21.1501C6.94669 21.1501 2.8501 17.0535 2.8501 12.0001C2.8501 6.94669 6.94669 2.8501 12.0001 2.8501C17.0535 2.8501 21.1501 6.94669 21.1501 12.0001Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
