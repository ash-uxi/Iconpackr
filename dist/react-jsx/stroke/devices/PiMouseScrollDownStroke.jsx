import React from 'react';

/**
 * PiMouseScrollDownStroke icon from the stroke style in devices category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiMouseScrollDownStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'mouse-scroll-down icon',
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
      <path d="M14 9.5C13.5065 10.158 12.934 10.7522 12.2957 11.2694C12.2094 11.3394 12.1047 11.3744 12 11.3744C11.8953 11.3744 11.7906 11.3394 11.7043 11.2694C11.066 10.7522 10.4935 10.158 10 9.5M19 10V14C19 17.866 15.866 21 12 21C8.13401 21 5 17.866 5 14V10C5 6.13401 8.13401 3 12 3C15.866 3 19 6.13401 19 10Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
