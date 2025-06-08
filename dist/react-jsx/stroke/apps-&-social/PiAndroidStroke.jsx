import React from 'react';

/**
 * PiAndroidStroke icon from the stroke style in apps-&-social category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiAndroidStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'android icon',
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
      <path d="M4 5L5.81419 8.14226M20 5L18.1858 8.14226M5.81419 8.14226C7.51616 6.80058 9.66459 6 12 6C14.3354 6 16.4838 6.80058 18.1858 8.14226M5.81419 8.14226C3.49128 9.97343 2 12.8126 2 16V17.982C2 17.9919 2.00805 18 2.01799 18H21.982C21.9919 18 22 17.9919 22 17.982V16C22 12.8126 20.5087 9.97343 18.1858 8.14226M9 13C9 13.5523 8.55228 14 8 14C7.44772 14 7 13.5523 7 13C7 12.4477 7.44772 12 8 12C8.55228 12 9 12.4477 9 13ZM17 13C17 13.5523 16.5523 14 16 14C15.4477 14 15 13.5523 15 13C15 12.4477 15.4477 12 16 12C16.5523 12 17 12.4477 17 13Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
