import React from 'react';

/**
 * PiGoogleDuoStroke icon from the duo-stroke style in apps-&-social category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiGoogleDuoStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'google icon',
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
      <path d="M18.0543 4.51753C16.5373 3.46708 14.6867 2.8501 12.6894 2.8501C7.54259 2.8501 3.25 6.78097 3.25 12C3.25 17.0534 7.43253 21.0996 12.6894 21.0996C18.0543 21.0996 21.4965 16.9741 21.2362 12" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
  <path d="M21.2363 12H12.6895" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
    </svg>
  );
}
