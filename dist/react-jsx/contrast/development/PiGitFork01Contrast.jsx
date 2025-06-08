import React from 'react';

/**
 * PiGitFork01Contrast icon from the contrast style in development category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiGitFork01Contrast({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'git-fork-01 icon',
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
      <g fill="currentColor" opacity=".28">
    <path d="M9 5.5a3 3 0 0 1-2.991 3H6a3 3 0 1 1 3-3M15 18.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0M15 5.5a3 3 0 0 0 2.991 3H18a3 3 0 1 0-3-3"/>
  </g>
  <path d="M12 15.5a3 3 0 1 0 0 6 3 3 0 0 0 0-6m0 0V12m0 0h-1.2c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311c-.23-.45-.298-.997-.318-1.862M12 12h1.2c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311c.23-.45.298-.997.318-1.862M6.01 8.5A3 3 0 1 0 6 8.5zm11.982 0a3 3 0 1 1 .009 0z"/>
    </svg>
  );
}
