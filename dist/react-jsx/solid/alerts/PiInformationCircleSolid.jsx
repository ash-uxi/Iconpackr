import React from 'react';

/**
 * PiInformationCircleSolid icon from the solid style in alerts category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiInformationCircleSolid({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'information-circle icon',
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
      <path d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM13 8.6239C13 8.07162 12.5523 7.6239 12 7.6239C11.4477 7.6239 11 8.07162 11 8.6239V8.62503C11 9.17731 11.4477 9.62503 12 9.62503C12.5523 9.62503 13 9.17731 13 8.62503V8.6239ZM13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12V16C11 16.5523 11.4477 17 12 17C12.5523 17 13 16.5523 13 16V12Z" fill="currentColor" stroke="none"/>
    </svg>
  );
}
