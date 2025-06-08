import React from 'react';

/**
 * PiVideoCallIncomingStroke icon from the stroke style in devices category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiVideoCallIncomingStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'video-call-incoming icon',
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
      <path d="M17.0011 13.9337C17.0197 14.5002 17.278 15.0335 17.7136 15.3994L18.7136 16.2394C20.0148 17.3324 22 16.4074 22 14.708V9.29197C22 7.59262 20.0148 6.66755 18.7136 7.76056L17.7136 8.60056C17.28 8.96481 17.022 9.49498 17.0013 10.0586M17.0011 13.9337L17 15C17 17.2091 15.2091 19 13 19H6C3.79086 19 2 17.2091 2 15V9C2 6.79086 3.79086 5 6 5H13C15.2091 5 17 6.79086 17 9L17.0013 10.0586M17.0011 13.9337L17.0013 10.0586" stroke="currentColor" strokeWidth="2" fill="none"/>
  <path d="M6.15076 10.6033C5.97628 11.8247 5.95325 13.0622 6.08166 14.2878C6.09903 14.4535 6.17298 14.6017 6.28402 14.7127M10.3934 14.846C9.17206 15.0204 7.93457 15.0435 6.70897 14.9151C6.54321 14.8977 6.39507 14.8238 6.28402 14.7127M6.28402 14.7127L12 9" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
