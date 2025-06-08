import React from 'react';

/**
 * PiEqualsCircleSolid icon from the solid style in maths category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiEqualsCircleSolid({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'equals-circle icon',
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
      <path d="M1.8501 12.0001C1.8501 6.39441 6.39441 1.8501 12.0001 1.8501C17.6058 1.8501 22.1501 6.39441 22.1501 12.0001C22.1501 17.6058 17.6058 22.1501 12.0001 22.1501C6.39441 22.1501 1.8501 17.6058 1.8501 12.0001ZM8.8999 9C8.34762 9 7.8999 9.44772 7.8999 10C7.8999 10.5523 8.34762 11 8.8999 11H15.0999C15.6522 11 16.0999 10.5523 16.0999 10C16.0999 9.44772 15.6522 9 15.0999 9H8.8999ZM8.8999 13C8.34762 13 7.8999 13.4477 7.8999 14C7.8999 14.5523 8.34762 15 8.8999 15H15.0999C15.6522 15 16.0999 14.5523 16.0999 14C16.0999 13.4477 15.6522 13 15.0999 13H8.8999Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" stroke="none"/>
    </svg>
  );
}
