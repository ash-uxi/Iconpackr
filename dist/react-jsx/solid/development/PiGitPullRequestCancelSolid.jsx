import React from 'react';

/**
 * PiGitPullRequestCancelSolid icon from the solid style in development category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiGitPullRequestCancelSolid({ 
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
      <path d="M16.2071 2.79289C15.8166 2.40237 15.1834 2.40237 14.7929 2.79289C14.4024 3.18342 14.4024 3.81658 14.7929 4.20711L16.4858 5.9L14.7929 7.59289C14.4024 7.98342 14.4024 8.61658 14.7929 9.00711C15.1834 9.39763 15.8166 9.39763 16.2071 9.00711L17.9 7.31421L19.5929 9.00711C19.9834 9.39763 20.6166 9.39763 21.0071 9.00711C21.3976 8.61658 21.3976 7.98342 21.0071 7.59289L19.3142 5.9L21.0071 4.20711C21.3976 3.81658 21.3976 3.18342 21.0071 2.79289C20.6166 2.40237 19.9834 2.40237 19.5929 2.79289L17.9 4.48579L16.2071 2.79289Z" fill="currentColor" stroke="none"/>
  <path d="M19 13C19 12.4477 18.5523 12 18 12C17.4477 12 17 12.4477 17 13V14.126C15.2748 14.5701 14 16.1362 14 18C14 20.2091 15.7909 22 18 22C20.2091 22 22 20.2091 22 18C22 16.1362 20.7252 14.5701 19 14.126V13Z" fill="currentColor" stroke="none"/>
  <path d="M6 2C3.79086 2 2 3.79086 2 6C2 7.86384 3.27477 9.42994 5 9.87398V21C5 21.5523 5.44772 22 6 22C6.55228 22 7 21.5523 7 21V9.87398C8.72523 9.42994 10 7.86384 10 6C10 3.79086 8.20914 2 6 2Z" fill="currentColor" stroke="none"/>
    </svg>
  );
}
