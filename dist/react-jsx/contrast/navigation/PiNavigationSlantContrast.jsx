import React from 'react';

/**
 * PiNavigationSlantContrast icon from the contrast style in navigation category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiNavigationSlantContrast({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'navigation-slant icon',
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
      <path fill="currentColor" d="m9.308 12.486-5.84-1.348a.591.591 0 0 1-.183-1.077l.485-.305a51.2 51.2 0 0 1 16.548-6.734.556.556 0 0 1 .66.66 51.2 51.2 0 0 1-6.734 16.548l-.305.485a.592.592 0 0 1-1.077-.183l-1.348-5.84a2.94 2.94 0 0 0-2.206-2.206" opacity=".28"/>
  <path d="m9.308 12.486-5.84-1.348a.591.591 0 0 1-.183-1.077l.485-.305a51.2 51.2 0 0 1 16.548-6.734.556.556 0 0 1 .66.66 51.2 51.2 0 0 1-6.734 16.548l-.305.485a.592.592 0 0 1-1.077-.183l-1.348-5.84a2.94 2.94 0 0 0-2.206-2.206"/>
    </svg>
  );
}
