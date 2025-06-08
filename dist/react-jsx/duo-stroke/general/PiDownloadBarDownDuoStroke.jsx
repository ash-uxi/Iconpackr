import React from 'react';

/**
 * PiDownloadBarDownDuoStroke icon from the duo-stroke style in general category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiDownloadBarDownDuoStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'download-bar-down icon',
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
      <path d="M19 20H5" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
  <path d="M6 10.1696C7.55556 12.273 9.37278 14.1622 11.4057 15.7905C11.5801 15.9302 11.79 16 12 16M18 10.1696C16.4444 12.273 14.6272 14.1622 12.5943 15.7905C12.4199 15.9302 12.21 16 12 16M12 16V4" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
    </svg>
  );
}
