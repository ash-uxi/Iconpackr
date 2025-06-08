import React from 'react';

/**
 * PiEnvelopeFastStroke icon from the stroke style in communication category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiEnvelopeFastStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'envelope-fast icon',
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
      <path d="M4 20H14C16.8003 20 18.2004 20 19.27 19.455C20.2108 18.9757 20.9757 18.2108 21.455 17.27C22 16.2004 22 14.8003 22 12C22 10.006 22 8.72189 21.8032 7.76159M21.8032 7.76159L16.295 11.2668C14.7385 12.2573 13.9602 12.7526 13.1238 12.9455C12.3843 13.1161 11.6157 13.1161 10.8762 12.9455C10.0398 12.7526 9.26153 12.2573 7.70499 11.2668L3.11812 8.34789C2.56331 7.99484 2.24641 7.31599 2.54497 6.73005C3.02433 5.78924 3.78924 5.02433 4.73005 4.54497C5.79961 4 7.19974 4 10 4H14C16.8003 4 18.2004 4 19.27 4.54497C20.2108 5.02433 20.9757 5.78924 21.455 6.73005C21.6119 7.03798 21.7237 7.37332 21.8032 7.76159ZM1 12H2M2 16H7" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
