import React from 'react';

/**
 * PiVideoCallPlusContrast icon from the contrast style in devices category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiVideoCallPlusContrast({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'video-call-plus icon',
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
      <path fill="currentColor" d="M13 19a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4z" opacity=".28"/>
  <path d="M6.5 12h3m0 0h3m-3 0V9m0 3v3m7.501-1.066a2 2 0 0 0 .713 1.465l1 .84c1.3 1.093 3.286.168 3.286-1.531V9.292c0-1.7-1.985-2.624-3.286-1.531l-1 .84A2 2 0 0 0 17 10.059m0 3.875L17 15a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V9a4 4 0 0 1 4-4h7a4 4 0 0 1 4 4l.001 1.059m0 3.875v-3.875"/>
    </svg>
  );
}
