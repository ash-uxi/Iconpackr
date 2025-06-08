import React from 'react';

/**
 * PiCloudCheckDuoStroke icon from the duo-stroke style in development category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiCloudCheckDuoStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'cloud-check icon',
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
      <path d="M22 14.5C22 17.5376 19.5376 20 16.5 20H6.5C4.01472 20 2 17.9853 2 15.5C2 13.1779 3.75887 11.2666 6.01705 11.0256C6.26 7.65724 9.06969 5 12.5 5C15.3713 5 17.8077 6.86169 18.6681 9.44382C20.6276 10.2852 22 12.2323 22 14.5Z" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
  <path d="M9 13.597L11.3412 15.9357C12.4672 13.9667 14.0256 12.2791 15.8987 11" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
    </svg>
  );
}
