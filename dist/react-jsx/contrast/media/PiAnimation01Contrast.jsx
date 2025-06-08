import React from 'react';

/**
 * PiAnimation01Contrast icon from the contrast style in media category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiAnimation01Contrast({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'animation-01 icon',
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
      <path d="M15.686 15.017a5.1 5.1 0 0 1-4.771 3.082m4.77-3.082a6.1 6.1 0 1 0-6.702-6.703m6.702 6.703q-.312.033-.635.033a6.1 6.1 0 0 1-6.067-6.736m0 0A5.1 5.1 0 0 0 5.9 13.086m0 0a4.102 4.102 0 0 0 1.05 8.064 4.1 4.1 0 0 0 3.964-3.05M5.9 13.084a5.1 5.1 0 0 0 5.014 5.014"/>
  <path fill="currentColor" d="M8.95 8.95q0-.322.033-.636a6.1 6.1 0 1 1-.033.636" opacity=".28"/>
    </svg>
  );
}
