import React from 'react';

/**
 * PiHeadingH6DuoStroke icon from the duo-stroke style in editing category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiHeadingH6DuoStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'heading-h6 icon',
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
      <path d="M16 16C16 17.1046 16.8954 18 18 18H19C20.1046 18 21 17.1046 21 16C21 14.8954 20.1046 14 19 14H18C16.8954 14 16 14.8954 16 16ZM16 16V12C16 10.8954 16.8954 10 18 10H19C19.7403 10 20.3866 10.4022 20.7324 11" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M4 12H12M4 18V6M12 18V6" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
    </svg>
  );
}
