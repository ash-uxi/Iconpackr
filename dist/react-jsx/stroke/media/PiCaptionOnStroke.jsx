import React from 'react';

/**
 * PiCaptionOnStroke icon from the stroke style in media category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiCaptionOnStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'caption-on icon',
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
      <path d="M10.25 15.5C8.59315 15.5 7.25 14.1569 7.25 12.5V12C7.25 10.3431 8.59315 9 10.25 9M16.75 15.5C15.0931 15.5 13.75 14.1569 13.75 12.5V12C13.75 10.3431 15.0931 9 16.75 9M9.4 4H14.6C16.8402 4 17.9603 4 18.816 4.43597C19.5686 4.81947 20.1805 5.43139 20.564 6.18404C21 7.03968 21 8.15979 21 10.4V13.6C21 15.8402 21 16.9603 20.564 17.816C20.1805 18.5686 19.5686 19.1805 18.816 19.564C17.9603 20 16.8402 20 14.6 20H9.4C7.15979 20 6.03968 20 5.18404 19.564C4.43139 19.1805 3.81947 18.5686 3.43597 17.816C3 16.9603 3 15.8402 3 13.6V10.4C3 8.15979 3 7.03968 3.43597 6.18404C3.81947 5.43139 4.43139 4.81947 5.18404 4.43597C6.03968 4 7.15979 4 9.4 4Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
