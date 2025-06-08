import React from 'react';

/**
 * PiTrophySolid icon from the solid style in sports category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiTrophySolid({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'trophy icon',
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
      <path d="M8.49934 1.99994C8.04244 1.9995 7.64857 1.99913 7.29966 2.08289C6.30478 2.32174 5.50771 3.04848 5.17152 4H3.6C2.16406 4 1 5.16406 1 6.6V8C1 11.0494 3.27454 13.5672 6.22008 13.9497C7.30174 15.5297 9.01634 16.6453 11 16.9291V20H8C7.44772 20 7 20.4477 7 21C7 21.5523 7.44772 22 8 22H16C16.5523 22 17 21.5523 17 21C17 20.4477 16.5523 20 16 20H13V16.9291C14.9837 16.6453 16.6983 15.5297 17.7799 13.9497C20.7255 13.5672 23 11.0494 23 8V6.6C23 5.16406 21.8359 4 20.4 4H18.8285C18.4923 3.04848 17.6952 2.32174 16.7003 2.08289C16.3514 1.99913 15.9576 1.9995 15.5007 1.99994H8.49934ZM3.6 6H5V10C5 10.5359 5.06038 11.0582 5.17476 11.5603C3.88357 10.897 3 9.55154 3 8V6.6C3 6.26863 3.26863 6 3.6 6ZM21 8C21 9.55154 20.1164 10.897 18.8252 11.5603C18.9396 11.0582 19 10.5359 19 10V6H20.4C20.7314 6 21 6.26863 21 6.6V8Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" stroke="none"/>
    </svg>
  );
}
