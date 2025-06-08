import React from 'react';

/**
 * PiSpatialScreenSolid icon from the solid style in ar-&-vr category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiSpatialScreenSolid({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'spatial-screen icon',
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
      <path d="M11 20C10.4477 20 10 20.4477 10 21C10 21.5523 10.4477 22 11 22H16C16.5523 22 17 21.5523 17 21C17 20.4477 16.5523 20 16 20H11Z" fill="currentColor" stroke="none"/>
  <path d="M3 7.00001C3 6.44772 2.55228 6.00001 2 6.00001C1.44772 6.00001 1 6.44772 1 7.00001V14C1 14.5523 1.44772 15 2 15C2.55229 15 3 14.5523 3 14L3 7.00001Z" fill="currentColor" stroke="none"/>
  <path d="M6.5681 3C6.31572 2.99997 6.06993 2.99994 5.86177 3.01695C5.63318 3.03563 5.36344 3.07969 5.09202 3.21799C4.7157 3.40974 4.40973 3.7157 4.21799 4.09202C4.07969 4.36345 4.03562 4.63318 4.01695 4.86178C3.99994 5.06993 3.99997 5.31571 4 5.56808V15.4319C3.99997 15.6843 3.99994 15.9301 4.01695 16.1382C4.03562 16.3668 4.07969 16.6366 4.21799 16.908C4.40973 17.2843 4.7157 17.5903 5.09202 17.782C5.36344 17.9203 5.63318 17.9644 5.86177 17.9831C6.06993 18.0001 6.31573 18 6.56812 18H19.4319C19.6843 18 19.9301 18.0001 20.1382 17.9831C20.3668 17.9644 20.6366 17.9203 20.908 17.782C21.2843 17.5903 21.5903 17.2843 21.782 16.908C21.9203 16.6366 21.9644 16.3668 21.9831 16.1382C22.0001 15.9301 22 15.6844 22 15.432V5.56809C22 5.31575 22.0001 5.0699 21.9831 4.86178C21.9644 4.63318 21.9203 4.36345 21.782 4.09202C21.5903 3.7157 21.2843 3.40974 20.908 3.21799C20.6366 3.07969 20.3668 3.03563 20.1382 3.01695C19.9301 2.99994 19.6843 2.99997 19.4319 3H6.5681Z" fill="currentColor" stroke="none"/>
    </svg>
  );
}
