import React from 'react';

/**
 * PiAlarmDefaultDuoStroke icon from the duo-stroke style in time category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiAlarmDefaultDuoStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'alarm-default icon',
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
      <path d="M12 21C16.4183 21 20 17.4183 20 13C20 8.58172 16.4183 5 12 5C7.58172 5 4 8.58172 4 13C4 17.4183 7.58172 21 12 21Z" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
  <path d="M5 3L2 6M19 3L22 6M12 10V13.7169C12 13.8925 12.0921 14.0553 12.2428 14.1457L14.5 15.5" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
    </svg>
  );
}
