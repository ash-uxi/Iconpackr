import React from 'react';

/**
 * PiThermometerDownSolid icon from the solid style in general category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiThermometerDownSolid({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'thermometer-down icon',
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
      <path d="M15.0001 1C17.2092 1 19.0001 2.79086 19.0001 5V15C19.6274 15.8355 20.0001 16.8751 20.0001 18C20.0001 20.7614 17.7615 23 15.0001 23C12.2387 22.9999 10.0001 20.7614 10.0001 18C10.0001 16.8751 10.3728 15.8355 11.0001 15V5C11.0001 2.7909 12.791 1.00006 15.0001 1ZM15.0001 9C14.4479 9.00006 14.0001 9.44776 14.0001 10V16.2695C13.4028 16.6155 13.0001 17.2601 13.0001 18C13.0001 19.1045 13.8956 19.9999 15.0001 20C16.1047 20 17.0001 19.1046 17.0001 18C17.0001 17.2601 16.5974 16.6155 16.0001 16.2695V10C16.0001 9.44772 15.5524 9 15.0001 9ZM5.0011 5C5.55332 5.00007 6.0011 5.44776 6.0011 6V10.3428C6.19053 10.1374 6.37427 9.92654 6.54895 9.70801L6.77258 9.41895C7.10396 8.97717 7.73116 8.88739 8.17297 9.21875C8.58704 9.52949 8.69146 10.1001 8.42981 10.5342L8.37219 10.6191C7.68847 11.5307 6.89513 12.3537 6.01086 13.0703L5.89758 13.1543C5.66585 13.3107 5.40249 13.4004 5.13489 13.4229L5.0011 13.4287C4.68823 13.4287 4.37488 13.3367 4.10461 13.1543L3.99133 13.0703C3.21769 12.4434 2.5136 11.735 1.89172 10.957L1.63 10.6191L1.57239 10.5342C1.31073 10.1 1.41596 9.52943 1.8302 9.21875C2.2443 8.90846 2.82074 8.96748 3.16418 9.33984L3.22961 9.41895L3.45324 9.70801C3.62792 9.92653 3.81167 10.1374 4.0011 10.3428V6C4.0011 5.44776 4.44888 5.00008 5.0011 5Z" fill="currentColor" stroke="none"/>
    </svg>
  );
}
