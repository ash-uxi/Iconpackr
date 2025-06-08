import React from 'react';

/**
 * PiToggleOffSolid icon from the solid style in general category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiToggleOffSolid({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'toggle-off icon',
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
      <path d="M23 12C23 9.87827 22.1571 7.84344 20.6569 6.34315C19.1566 4.84285 17.1217 4 15 4H9C6.87827 4 4.84344 4.84285 3.34315 6.34315C1.84285 7.84344 1 9.87827 1 12C1 14.1217 1.84285 16.1566 3.34315 17.6569C4.84344 19.1571 6.87827 20 9 20H15C17.1217 20 19.1566 19.1571 20.6569 17.6569C22.1571 16.1566 23 14.1217 23 12ZM14 12C14 10.6739 13.4732 9.40215 12.5355 8.46447C11.5979 7.52678 10.3261 7 9 7C7.67392 7 6.40215 7.52678 5.46447 8.46447C4.52678 9.40215 4 10.6739 4 12C4 13.3261 4.52678 14.5979 5.46447 15.5355C6.40215 16.4732 7.67392 17 9 17C10.3261 17 11.5979 16.4732 12.5355 15.5355C13.4732 14.5979 14 13.3261 14 12Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" stroke="none"/>
    </svg>
  );
}
