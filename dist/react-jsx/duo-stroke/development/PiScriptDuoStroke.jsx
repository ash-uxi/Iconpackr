import React from 'react';

/**
 * PiScriptDuoStroke icon from the duo-stroke style in development category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiScriptDuoStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'script icon',
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
      <path d="M15.6428 20.979C14.1543 20.8024 13 19.536 13 18C13 16.3431 14.3431 15 16 15H6C5.64936 15 5.31278 15.0602 5 15.1707M15.6428 20.979C16.6208 20.9422 17.2719 20.8413 17.816 20.564C18.5686 20.1805 19.1805 19.5686 19.564 18.816C20 17.9603 20 16.8402 20 14.6V9.4C20 7.15979 20 6.03969 19.564 5.18404C19.1805 4.43139 18.5686 3.81947 17.816 3.43597C16.9603 3 15.8402 3 13.6 3H11.4C9.15979 3 8.03968 3 7.18404 3.43597C6.43139 3.81947 5.81947 4.43139 5.43597 5.18404C5 6.03969 5 7.15979 5 9.4V15.1707M15.6428 20.979C15.0828 21 14.4156 21 13.6 21H6C4.34315 21 3 19.6569 3 18C3 16.6937 3.83481 15.5825 5 15.1707" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
  <path d="M9 11L11 9L9 7M14 11H16" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
    </svg>
  );
}
