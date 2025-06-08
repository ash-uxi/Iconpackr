import React from 'react';

/**
 * PiCyberTruckSolid icon from the solid style in automotive category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiCyberTruckSolid({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'cyber-truck icon',
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
      <path d="M10.2334 6.02761C9.98986 5.96917 9.73327 6.00422 9.51436 6.12584L0.514357 11.1258C0.196892 11.3022 0 11.6368 0 12V15C0 15.5523 0.447715 16 1 16H3.17071C3.58254 17.1652 4.69378 18 6 18C7.30622 18 8.41746 17.1652 8.82929 16H15.1707C15.5825 17.1652 16.6938 18 18 18C19.3062 18 20.4175 17.1652 20.8293 16H22C22.5138 16 22.9439 15.6107 22.995 15.0995L23.495 10.0995C23.5448 9.60205 23.2195 9.14429 22.7334 9.02761L10.2334 6.02761ZM5 15C5 14.4477 5.44772 14 6 14C6.55228 14 7 14.4477 7 15C7 15.5523 6.55228 16 6 16C5.44772 16 5 15.5523 5 15ZM17 15C17 14.4477 17.4477 14 18 14C18.5523 14 19 14.4477 19 15C19 15.5523 18.5523 16 18 16C17.4477 16 17 15.5523 17 15Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" stroke="none"/>
    </svg>
  );
}
