import React from 'react';

/**
 * PiMinimizeLineArrowDuoStroke icon from the duo-stroke style in arrows-&-chevrons category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiMinimizeLineArrowDuoStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'minimize-line-arrow icon',
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
      <path d="M12.7072 11.2928L20 4M11.293 12.707L4 20" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
  <path d="M12.7444 5.59863C12.4439 7.36581 12.3719 9.15103 12.5299 10.9097C12.5434 11.0606 12.6081 11.1939 12.7071 11.2929C12.806 11.3918 12.9394 11.4565 13.0902 11.47C14.8489 11.628 16.6341 11.5561 18.4013 11.2555M11.2555 18.4013C11.5561 16.6341 11.628 14.8489 11.47 13.0902C11.4565 12.9394 11.3918 12.806 11.2929 12.7071C11.1939 12.6081 11.0606 12.5434 10.9097 12.5299C9.15104 12.3719 7.36581 12.4439 5.59863 12.7444" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
    </svg>
  );
}
