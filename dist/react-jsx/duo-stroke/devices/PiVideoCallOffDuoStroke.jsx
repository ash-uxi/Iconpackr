import React from 'react';

/**
 * PiVideoCallOffDuoStroke icon from the duo-stroke style in devices category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiVideoCallOffDuoStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'video-call-off icon',
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
      <path d="M13 5H6C3.79086 5 2 6.79086 2 9V15C2 16.9002 3.32493 18.4909 5.10135 18.8987M17 12V13.868C17 14.4588 17.2612 15.0194 17.7136 15.3994L18.7136 16.2394C20.0148 17.3324 22 16.4074 22 14.708V9.29197C22 7.59262 20.0148 6.66755 18.7136 7.76056L17.7136 8.60056C17.2612 8.98057 17 9.54116 17 10.132V12ZM17 12V9C17 8.41306 16.8736 7.85565 16.6465 7.3535M17 12V15C17 17.2091 15.2091 19 13 19H10" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
  <path d="M2 22L22 2" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
    </svg>
  );
}
