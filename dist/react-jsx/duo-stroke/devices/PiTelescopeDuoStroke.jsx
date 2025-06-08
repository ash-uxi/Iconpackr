import React from 'react';

/**
 * PiTelescopeDuoStroke icon from the duo-stroke style in devices category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiTelescopeDuoStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'telescope icon',
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
      <path d="M12.9012 14.8027L16 21.0003M8 21.0003L11.0988 14.8027" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
  <path d="M14 13C14 14.1046 13.1046 15 12 15C10.8954 15 10 14.1046 10 13C10 11.8954 10.8954 11 12 11C13.1046 11 14 11.8954 14 13Z" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M16.5249 6.26205C16.2391 5.19512 16.8722 4.09844 17.9392 3.81256L19.871 3.29492L22.3191 12.4314L20.3873 12.949C19.3203 13.2349 18.2237 12.6017 17.9378 11.5348L16.5249 6.26205Z" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M4.51306 10.0503L2.77216 10.6405C2.27301 10.8097 1.99088 11.3372 2.12729 11.8463L2.67755 13.8999C2.81396 14.409 3.32208 14.7248 3.83896 14.6218L9.99324 13.3951M4.51306 10.0503L16.4549 6.00195M4.51306 10.0503L4.0979 8.50057M18.0078 11.7975L14.0005 12.5963" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
    </svg>
  );
}
