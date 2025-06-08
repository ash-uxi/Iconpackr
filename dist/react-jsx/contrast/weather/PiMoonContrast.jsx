import React from 'react';

/**
 * PiMoonContrast icon from the contrast style in weather category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiMoonContrast({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'moon icon',
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
      <path fill="currentColor" d="M21 11.966A6.5 6.5 0 1 1 12.035 3H12a9 9 0 1 0 9 9z" opacity=".28"/>
  <path d="M21 11.966A6.5 6.5 0 1 1 12.035 3H12a9 9 0 1 0 9 9z"/>
    </svg>
  );
}
