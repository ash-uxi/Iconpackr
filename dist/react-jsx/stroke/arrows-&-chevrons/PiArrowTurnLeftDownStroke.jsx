import React from 'react';

/**
 * PiArrowTurnLeftDownStroke icon from the stroke style in arrows-&-chevrons category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiArrowTurnLeftDownStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'arrow-turn-left-down icon',
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
      <path d="M4 15.1413C5.2963 16.8942 6.81065 18.4685 8.50473 19.8254C8.65006 19.9418 8.82503 20 9 20M14 15.1413C12.7037 16.8942 11.1893 18.4685 9.49527 19.8254C9.34994 19.9418 9.17497 20 9 20M9 20V12C9 9.19974 9 7.79961 9.54497 6.73005C10.0243 5.78924 10.7892 5.02433 11.73 4.54497C12.7996 4 14.1997 4 17 4H20" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
