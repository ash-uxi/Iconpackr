import React from 'react';

/**
 * PiKeyRightContrast icon from the contrast style in security category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiKeyRightContrast({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'key-right icon',
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
      <path d="M10 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0m0 0h12v3m-4-3v2"/>
  <path fill="currentColor" d="M2 12a4 4 0 1 0 8 0 4 4 0 0 0-8 0" opacity=".28"/>
    </svg>
  );
}
