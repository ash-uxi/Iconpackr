import React from 'react';

/**
 * PiTableChairDuoStroke icon from the duo-stroke style in building category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiTableChairDuoStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'table-chair icon',
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
      <path d="M12 19V9M12 9H7M12 9H17" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
  <path d="M21 19V12.9573M21 12.9573V5M21 12.9573H18C16.8954 12.9573 16 13.8527 16 14.9573V19" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M3 19V12.9573M3 12.9573V5M3 12.9573H6C7.10457 12.9573 8 13.8527 8 14.9573V19" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
    </svg>
  );
}
