import React from 'react';

/**
 * PiVideoCallRemoveStroke icon from the stroke style in devices category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiVideoCallRemoveStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'video-call-remove icon',
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
      <path d="M6.5 12H12.5M17.0011 13.9337C17.0197 14.5002 17.278 15.0335 17.7136 15.3994L18.7136 16.2394C20.0148 17.3324 22 16.4074 22 14.708V9.292C22 7.5926 20.0148 6.6676 18.7136 7.7606L17.7136 8.6006C17.28 8.9648 17.022 9.495 17.0013 10.0586M17.0011 13.9337L17 15C17 17.2091 15.2091 19 13 19H6C3.79086 19 2 17.2091 2 15V9C2 6.7909 3.79086 5 6 5H13C15.2091 5 17 6.7909 17 9L17.0013 10.0586M17.0011 13.9337L17.0013 10.0586" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
