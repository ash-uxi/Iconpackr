import React from 'react';

/**
 * PiGitPullRequestSolid icon from the solid style in development category.
 */
interface PiGitPullRequestSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiGitPullRequestSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'git-pull-request icon',
  ...props
}: PiGitPullRequestSolidProps): JSX.Element {
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
      <path d="M13 5C12.4477 5 12 5.44772 12 6C12 6.55228 12.4477 7 13 7C15.2091 7 17 8.79086 17 11V14.126C15.2748 14.5701 14 16.1362 14 18C14 20.2091 15.7909 22 18 22C20.2091 22 22 20.2091 22 18C22 16.1362 20.7252 14.5701 19 14.126V11C19 7.68629 16.3137 5 13 5Z" fill="currentColor" stroke="none"/>
  <path d="M6 2C3.79086 2 2 3.79086 2 6C2 7.86384 3.27477 9.42994 5 9.87398V21C5 21.5523 5.44772 22 6 22C6.55228 22 7 21.5523 7 21V9.87398C8.72523 9.42994 10 7.86384 10 6C10 3.79086 8.20914 2 6 2Z" fill="currentColor" stroke="none"/>
    </svg>
  );
}
