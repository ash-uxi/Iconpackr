import React from 'react';

/**
 * PiMartiniGlassDuoStroke icon from the duo-stroke style in food category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiMartiniGlassDuoStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'martini-glass icon',
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
      <path d="M12 13V21M12 21H17.5M12 21H7" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
  <path d="M6 7L12 13L18 7M6 7L3 4H21L18 7M6 7C9.99308 7.33276 14.0069 7.33276 18 7" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
    </svg>
  );
}
