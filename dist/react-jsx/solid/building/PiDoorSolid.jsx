import React from 'react';

/**
 * PiDoorSolid icon from the solid style in building category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiDoorSolid({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'door icon',
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
      <path d="M15.9434 2.00391C16.2302 2.00849 16.4902 2.01804 16.7236 2.03711C17.2023 2.07623 17.6571 2.16183 18.0889 2.38184L18.3301 2.5166C18.8783 2.85287 19.3246 3.33495 19.6182 3.91114L19.6953 4.07422C19.8594 4.45701 19.9287 4.85766 19.9629 5.27637C20.001 5.74341 20 6.31644 20 7V20H22L22.1025 20.0049C22.6067 20.0562 23 20.4823 23 21C23 21.5177 22.6067 21.9438 22.1025 21.9951L22 22H2C1.44772 22 1 21.5523 1 21C1 20.4477 1.44772 20 2 20H4V7C4 6.31644 3.99895 5.74341 4.03711 5.27637C4.07623 4.79772 4.16182 4.34294 4.38184 3.91114L4.5166 3.66992C4.85287 3.12172 5.33495 2.67544 5.91113 2.38184L6.07422 2.30469C6.45701 2.1406 6.85766 2.07133 7.27637 2.03711C7.74341 1.99895 8.31644 2 9 2H15L15.9434 2.00391ZM8.48438 10.5C7.65595 10.5 6.98438 11.1716 6.98438 12C6.98438 12.8284 7.65595 13.5 8.48438 13.5C8.92791 13.4999 9.32503 13.3061 9.59961 13H10C10.5523 13 11 12.5523 11 12C11 11.4477 10.5523 11 10 11H9.59961C9.32503 10.6939 8.92791 10.5001 8.48438 10.5Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" stroke="none"/>
    </svg>
  );
}
