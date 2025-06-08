import React from 'react';

/**
 * PiThreeDotsMenuVerticalCircleDuoStroke icon from the duo-stroke style in general category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiThreeDotsMenuVerticalCircleDuoStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'three-dots-menu-vertical-circle icon',
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
      <path d="M12.0006 21.1496C17.054 21.1496 21.1506 17.053 21.1506 11.9996C21.1506 6.9462 17.054 2.84961 12.0006 2.84961C6.94718 2.84961 2.85059 6.9462 2.85059 11.9996C2.85059 17.053 6.94718 21.1496 12.0006 21.1496Z" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
  <path d="M12.0049 7.99414V8.00414M12.0049 11.9941V12.0041M12.0049 15.9941V16.0041" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
    </svg>
  );
}
