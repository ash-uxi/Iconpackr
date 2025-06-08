import React from 'react';

/**
 * PiAnimation02Contrast icon from the contrast style in media category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiAnimation02Contrast({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'animation-02 icon',
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
      <path fill="currentColor" d="M16 8a3 3 0 1 0 6 0 3 3 0 0 0-6 0" opacity=".28"/>
  <path d="M2 14a5 5 0 0 1 5 5v-1a9 9 0 0 1 5.237-8.178M19 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
    </svg>
  );
}
