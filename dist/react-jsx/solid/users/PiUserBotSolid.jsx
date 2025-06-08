import React from 'react';

/**
 * PiUserBotSolid icon from the solid style in users category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiUserBotSolid({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'user-bot icon',
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
      <path d="M13 3C13 2.44772 12.5523 2 12 2C11.4477 2 11 2.44772 11 3V4H10C8.34315 4 7 5.34315 7 7V9C7 10.6569 8.34315 12 10 12H14C15.6569 12 17 10.6569 17 9V7C17 5.34315 15.6569 4 14 4H13V3Z" fill="currentColor" stroke="none"/>
  <path d="M8 14C5.23858 14 3 16.2386 3 19C3 20.6569 4.34315 22 6 22H18C19.6569 22 21 20.6569 21 19C21 16.2386 18.7614 14 16 14H8Z" fill="currentColor" stroke="none"/>
    </svg>
  );
}
