import React from 'react';

/**
 * PiKeyBottomLeft02Contrast icon from the contrast style in security category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiKeyBottomLeft02Contrast({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'key-bottom-left-02 icon',
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
      <path d="M17.304 8.11 15.89 6.696a1.25 1.25 0 0 1 1.414 1.414"/>
  <path fill="currentColor" d="M4.93 16.243v2.828h2.827L9.88 16.95v-1.622a.5.5 0 0 1 .5-.5H12l2.452-2.452a4.5 4.5 0 1 0-2.828-2.828z" opacity=".28"/>
  <path d="M4.93 16.243v2.828h2.827L9.88 16.95v-1.622a.5.5 0 0 1 .5-.5H12l2.452-2.452a4.5 4.5 0 1 0-2.828-2.828z"/>
    </svg>
  );
}
