import React from 'react';

/**
 * PiGitBranchDuoSolid icon from the duo-solid style in development category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiGitBranchDuoSolid({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'git-branch icon',
  ...props 
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      
       style={{color: color || "currentColor"}}
      
      role="img"
      aria-label={ariaLabel}
      {...props}
    >
      <path fill={color || "currentColor"} d="M18 1.5a4 4 0 1 0 0 8 4 4 0 0 0 0-8M6 14.5a4 4 0 1 0 0 8 4 4 0 0 0 0-8" /> <path d="M6 15.5v-1m0 0V3m0 11.5a9 9 0 0 1 9-9" opacity=".28" />
    </svg>
  );
}
