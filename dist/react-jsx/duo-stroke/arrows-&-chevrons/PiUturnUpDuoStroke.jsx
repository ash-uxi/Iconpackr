import React from 'react';

/**
 * PiUturnUpDuoStroke icon from the duo-stroke style in arrows-&-chevrons category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiUturnUpDuoStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'uturn-up icon',
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
      <path d="M16 4V15C16 17.7614 13.7614 20 11 20C8.23858 20 6 17.7614 6 15V12" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
  <path d="M20.0832 8.03089C19.0245 6.57669 17.7878 5.2706 16.4043 4.14485C16.2856 4.04828 16.1427 4 15.9998 4C15.8569 4 15.7141 4.04828 15.5954 4.14485C14.2119 5.2706 12.9752 6.57669 11.9165 8.03089" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
    </svg>
  );
}
