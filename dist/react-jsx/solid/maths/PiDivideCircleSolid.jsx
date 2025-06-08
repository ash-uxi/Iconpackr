import React from 'react';

/**
 * PiDivideCircleSolid icon from the solid style in maths category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiDivideCircleSolid({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'divide-circle icon',
  ...props 
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      
       style={{color: color || "currentColor"}}
      
      role="img"
      aria-label={ariaLabel}
      {...props}
    >
      <path d="M12.0001 1.8501C6.39441 1.8501 1.8501 6.39441 1.8501 12.0001C1.8501 17.6058 6.39441 22.1501 12.0001 22.1501C17.6058 22.1501 22.1501 17.6058 22.1501 12.0001C22.1501 6.39441 17.6058 1.8501 12.0001 1.8501ZM10.95 8C10.95 7.4201 11.4201 6.95 12 6.95H12.001C12.5809 6.95 13.051 7.4201 13.051 8C13.051 8.5799 12.5809 9.05 12.001 9.05H12C11.4201 9.05 10.95 8.5799 10.95 8ZM10.95 16C10.95 15.4201 11.4201 14.95 12 14.95H12.001C12.5809 14.95 13.051 15.4201 13.051 16C13.051 16.5799 12.5809 17.05 12.001 17.05H12C11.4201 17.05 10.95 16.5799 10.95 16ZM7.8999 11C7.34762 11 6.8999 11.4477 6.8999 12C6.8999 12.5523 7.34762 13 7.8999 13H16.0999C16.6522 13 17.0999 12.5523 17.0999 12C17.0999 11.4477 16.6522 11 16.0999 11H7.8999Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" stroke="none"/>
    </svg>
  );
}
