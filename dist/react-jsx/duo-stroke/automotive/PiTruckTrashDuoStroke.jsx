import React from 'react';

/**
 * PiTruckTrashDuoStroke icon from the duo-stroke style in automotive category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiTruckTrashDuoStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'truck-trash icon',
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
      <path d="M15 18.5C15 19.6046 15.8954 20.5 17 20.5C18.1046 20.5 19 19.6046 19 18.5M15 18.5C15 17.3954 15.8954 16.5 17 16.5C18.1046 16.5 19 17.3954 19 18.5M15 18.5H9M15 18.5C15 15.1667 15.0025 11.8333 14.9999 8.5H17.8335C18.6157 8.5 19.0069 8.5 19.345 8.62616C19.6438 8.73764 19.9116 8.91895 20.1261 9.15498C20.3688 9.4221 20.5141 9.78525 20.8046 10.5115L22 13.5V15.3C22 16.4201 22 16.9802 21.782 17.408C21.5903 17.7843 21.2843 18.0903 20.908 18.282C20.3439 18.5694 19.6104 18.4985 19 18.5M9 18.5C9 19.6046 8.10457 20.5 7 20.5C5.89543 20.5 5 19.6046 5 18.5C5 17.3954 5.89543 16.5 7 16.5C8.10457 16.5 9 17.3954 9 18.5Z" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M5 18.5002C4.38965 18.4985 3.65613 18.5696 3.09202 18.2822C2.71569 18.0904 2.40973 17.7845 2.21799 17.4082C2 16.9803 2 16.4203 2 15.3002V10L15 6L14.9999 8.50018" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
    </svg>
  );
}
