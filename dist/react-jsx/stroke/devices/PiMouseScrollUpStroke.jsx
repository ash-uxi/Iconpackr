import React from 'react';

/**
 * PiMouseScrollUpStroke icon from the stroke style in devices category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiMouseScrollUpStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'mouse-scroll-up icon',
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
      <path d="M14 10.5C13.5065 9.842 12.934 9.24779 12.2957 8.73057C12.2094 8.66062 12.1047 8.62564 12 8.62564C11.8953 8.62564 11.7906 8.66062 11.7043 8.73057C11.066 9.24779 10.4935 9.842 10 10.5M19 10V14C19 17.866 15.866 21 12 21C8.13401 21 5 17.866 5 14V10C5 6.13401 8.13401 3 12 3C15.866 3 19 6.13401 19 10Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
