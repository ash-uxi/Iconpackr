import React from 'react';

/**
 * PiCircleDottedStroke icon from the stroke style in general category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiCircleDottedStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'circle-dotted icon',
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
      <path d="M7.4251 4.07909V4.08925M4.08026 7.42207V7.43223M2.8501 11.9945V12.0047M4.08026 16.567V16.5771M7.4251 19.91V19.9201M12.0001 21.1394V21.1496M16.5751 19.91V19.9201M19.9199 16.567V16.5771M21.1501 11.9945V12.0047M19.9199 7.42207V7.43223M16.5751 4.07909V4.08925M12.0001 2.84961V2.85977" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
