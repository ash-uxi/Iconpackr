import React from 'react';

/**
 * PiEnvelopeAiDuoStroke icon from the duo-stroke style in ai category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiEnvelopeAiDuoStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'envelope-ai icon',
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
      <path d="M11.7656 20H10C7.19974 20 5.79961 20 4.73005 19.455C3.78924 18.9757 3.02433 18.2108 2.54497 17.27C2 16.2004 2 14.8003 2 12C2 10.006 2 8.72189 2.19678 7.76159M21.8032 7.76159L16.295 11.2668C14.7385 12.2573 13.9602 12.7526 13.1238 12.9455C12.3843 13.1161 11.6157 13.1161 10.8762 12.9455C10.0398 12.7526 9.26153 12.2573 7.70499 11.2668L2.19678 7.76159M21.8032 7.76159C22 8.72189 22 10.006 22 12L22 12.3516M21.8032 7.76159C21.7237 7.37332 21.6119 7.03798 21.455 6.73005C20.9757 5.78924 20.2108 5.02433 19.27 4.54497C18.2004 4 16.8003 4 14 4H10C7.19974 4 5.79961 4 4.73005 4.54497C3.78924 5.02433 3.02433 5.78924 2.54497 6.73005C2.38807 7.03798 2.27634 7.37332 2.19678 7.76159" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
  <path d="M15 22H15.001M19 15C18.3625 16.6165 17.6609 17.345 16 18C17.6609 18.655 18.3625 19.3835 19 21C19.6375 19.3835 20.3391 18.655 22 18C20.3391 17.345 19.6375 16.6165 19 15Z" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
    </svg>
  );
}
