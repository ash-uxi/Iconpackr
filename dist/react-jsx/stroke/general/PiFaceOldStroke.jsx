import React from 'react';

/**
 * PiFaceOldStroke icon from the stroke style in general category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiFaceOldStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'face-old icon',
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
      <path d="M8.38574 10.0044L9.61447 9.14404M14.3853 9.14404L15.614 10.0044M8.4292 14.4995C9.33666 15.4252 10.6012 15.9995 11.9999 15.9995C13.3986 15.9995 14.6632 15.4252 15.5706 14.4995M12.0001 21.1501C6.94669 21.1501 2.8501 17.0535 2.8501 12.0001C2.8501 6.94669 6.94669 2.8501 12.0001 2.8501C17.0535 2.8501 21.1501 6.94669 21.1501 12.0001C21.1501 17.0535 17.0535 21.1501 12.0001 21.1501Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
