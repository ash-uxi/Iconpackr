import React from 'react';

/**
 * PiThermometerSolid icon from the solid style in general category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiThermometerSolid({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'thermometer icon',
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
      <path d="M12 1C14.2091 1 16 2.79086 16 5V15C16.6273 15.8355 17 16.8751 17 18C17 20.7614 14.7614 23 12 23C9.23858 23 7 20.7614 7 18C7 16.8751 7.37267 15.8355 8 15V5C8 2.79086 9.79086 1 12 1ZM12 9C11.4477 9 11 9.44772 11 10V16.2695C10.4027 16.6155 10 17.2601 10 18C10 19.1046 10.8954 20 12 20C13.1046 20 14 19.1046 14 18C14 17.2601 13.5973 16.6155 13 16.2695V10C13 9.44772 12.5523 9 12 9Z" fill="currentColor" stroke="none"/>
    </svg>
  );
}
