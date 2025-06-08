import React from 'react';

/**
 * PiArrowTurnLeftUpStroke icon from the stroke style in arrows-&-chevrons category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiArrowTurnLeftUpStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'arrow-turn-left-up icon',
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
      <path d="M4 8.85867C5.2963 7.10583 6.81065 5.53153 8.50473 4.1746C8.65006 4.0582 8.82503 4 9 4M14 8.85867C12.7037 7.10583 11.1893 5.53153 9.49527 4.1746C9.34994 4.0582 9.17497 4 9 4M9 4V12C9 14.8003 9 16.2004 9.54497 17.27C10.0243 18.2108 10.7892 18.9757 11.73 19.455C12.7996 20 14.1997 20 17 20H20" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
