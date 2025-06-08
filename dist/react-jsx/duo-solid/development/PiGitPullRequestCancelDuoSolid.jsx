import React from 'react';

/**
 * PiGitPullRequestCancelDuoSolid icon from the duo-solid style in development category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiGitPullRequestCancelDuoSolid({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'git-pull-request-cancel icon',
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
      <path fill={color || "currentColor"} d="M16.207 2.793a1 1 0 1 0-1.414 1.414L16.486 5.9l-1.693 1.693a1 1 0 0 0 1.414 1.414L17.9 7.314l1.693 1.693a1 1 0 1 0 1.414-1.414L19.314 5.9l1.693-1.693a1 1 0 0 0-1.414-1.414L17.9 4.486zM18 14a4 4 0 1 0 0 8 4 4 0 0 0 0-8M6 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8" /> <path d="M6 9v12m12-6v-2" opacity=".28" />
    </svg>
  );
}
