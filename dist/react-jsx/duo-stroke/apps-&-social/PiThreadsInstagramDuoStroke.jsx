import React from 'react';

/**
 * PiThreadsInstagramDuoStroke icon from the duo-stroke style in apps-&-social category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiThreadsInstagramDuoStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'threads-instagram icon',
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
      <path d="M15.5 11.8465C16.5871 12.3074 17.5147 13.0192 18.0066 13.9173C19.1081 15.9287 18.2428 18.8471 16.3166 20.032C15.0608 20.8045 13.5825 21.25 12 21.25C7.44365 21.25 3.75 17.5563 3.75 13V11C3.75 6.44365 7.44365 2.75 12 2.75C15.3051 2.75 18.1562 4.6935 19.4729 7.5" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
  <path d="M15.5001 11.8465V11C15.5001 9.067 13.9331 7.5 12.0001 7.5C11.0464 7.5 10.1819 7.88141 9.55058 8.5M15.5001 11.8465V13C15.5001 14.933 13.9331 16.5 12.0001 16.5C9.54121 16.5 7.48572 13.7186 9.90862 12.0021C11.3185 11.0033 13.6422 11.0587 15.5001 11.8465Z" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
    </svg>
  );
}
