import React from 'react';

/**
 * PiPeopleFemaleStroke icon from the stroke style in users category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiPeopleFemaleStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'people-female icon',
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
      <path d="M14.5 4.53467C14.5 5.91538 13.3807 7.03467 12 7.03467C10.6193 7.03467 9.5 5.91538 9.5 4.53467C9.5 3.15396 10.6193 2.03467 12 2.03467C13.3807 2.03467 14.5 3.15396 14.5 4.53467Z" stroke="currentColor" strokeWidth="2" fill="none"/>
  <path d="M8.34971 12.9263C8.72967 11.2165 10.2462 10 11.9976 10C13.7513 10 15.269 11.2194 15.6468 12.9318L16.9856 19H14.8852L14.1289 20.638C13.7455 21.4683 12.9144 21.9999 11.9999 21.9998C11.0855 21.9997 10.2546 21.4681 9.87133 20.6379L9.11517 19L7 18.9999L8.34971 12.9263Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
