import React from 'react';

/**
 * PiAwardMedalContrast icon from the contrast style in general category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiAwardMedalContrast({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'award-medal icon',
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
      <path d="M16.365 14.472 18 22c-4.286-2.664-7.714-2.664-12 0l1.635-7.528m8.73 0a7 7 0 1 0-8.73 0m8.73 0A6.97 6.97 0 0 1 12 16a6.97 6.97 0 0 1-4.365-1.528"/>
  <path fill="currentColor" d="M19 9a6.99 6.99 0 0 1-2.635 5.472A6.97 6.97 0 0 1 12 16a6.97 6.97 0 0 1-4.365-1.528A7 7 0 1 1 19 9" opacity=".28"/>
    </svg>
  );
}
