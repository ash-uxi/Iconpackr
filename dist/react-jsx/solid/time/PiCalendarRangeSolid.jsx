import React from 'react';

/**
 * PiCalendarRangeSolid icon from the solid style in time category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiCalendarRangeSolid({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'calendar-range icon',
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
      <path d="M2.00919 11C2 11.581 2 12.2345 2 12.9735V13.0368C2 14.4035 1.99999 15.4801 2.05941 16.351C2.11997 17.2387 2.2456 17.9853 2.53284 18.6788C3.2433 20.394 4.60602 21.7567 6.32122 22.4672C7.01469 22.7544 7.76134 22.88 8.649 22.9406C9.51986 23 10.5965 23 11.9631 23H12.0369C13.4035 23 14.4801 23 15.351 22.9406C16.2387 22.88 16.9853 22.7544 17.6788 22.4672C19.394 21.7567 20.7567 20.394 21.4672 18.6788C21.7544 17.9853 21.88 17.2387 21.9406 16.351C22 15.4801 22 14.4035 22 13.0369V12.9741C22 12.235 22 11.581 21.9908 11L2.00919 11ZM6 14C6 13.4477 6.44772 13 7 13H7.01C7.56228 13 8.01 13.4477 8.01 14C8.01 14.5523 7.56228 15 7.01 15H7C6.44772 15 6 14.5523 6 14ZM16 17C15.4477 17 15 17.4477 15 18C15 18.5523 15.4477 19 16 19H16.01C16.5623 19 17.01 18.5523 17.01 18C17.01 17.4477 16.5623 17 16.01 17H16ZM10 14C10 13.4477 10.4477 13 11 13H17C17.5523 13 18 13.4477 18 14C18 14.5523 17.5523 15 17 15H11C10.4477 15 10 14.5523 10 14ZM8 17C7.44772 17 7 17.4477 7 18C7 18.5523 7.44772 19 8 19H12C12.5523 19 13 18.5523 13 18C13 17.4477 12.5523 17 12 17H8Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" stroke="none"/>
  <path d="M8 1C8.55228 1 9 1.44772 9 2V3.03923C9.8048 2.99996 10.7588 2.99998 11.916 3H12.084C13.2412 2.99998 14.1952 2.99996 15 3.03923V2C15 1.44772 15.4477 1 16 1C16.5523 1 17 1.44772 17 2V3.30517C17.2333 3.3668 17.4586 3.44164 17.6788 3.53284C19.394 4.2433 20.7567 5.60602 21.4672 7.32122C21.6812 7.8379 21.8059 8.38545 21.8805 9L2.11952 9C2.19414 8.38545 2.31883 7.8379 2.53284 7.32122C3.2433 5.60602 4.60602 4.2433 6.32122 3.53284C6.5414 3.44164 6.76667 3.3668 7 3.30517V2C7 1.44772 7.44772 1 8 1Z" fill="currentColor" stroke="none"/>
    </svg>
  );
}
