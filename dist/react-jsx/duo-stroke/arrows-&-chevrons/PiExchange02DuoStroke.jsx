import React from 'react';

/**
 * PiExchange02DuoStroke icon from the duo-stroke style in arrows-&-chevrons category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiExchange02DuoStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'exchange-02 icon',
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
      <path d="M12 9H20M12 15H4" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
  <path d="M16.031 5C14.5768 6.03704 13.2707 7.24852 12.145 8.60379C12.0484 8.72005 12.0001 8.86002 12.0001 9C12.0001 9.13998 12.0484 9.27995 12.145 9.39621C13.2707 10.7515 14.5768 11.963 16.031 13M7.96924 11C9.42344 12.037 10.7295 13.2485 11.8553 14.6038C11.9518 14.72 12.0001 14.86 12.0001 15C12.0001 15.14 11.9518 15.28 11.8553 15.3962C10.7295 16.7515 9.42344 17.963 7.96924 19" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
    </svg>
  );
}
