import React from 'react';

/**
 * PiGitPullRequestCancelStroke icon from the stroke style in development category.
 */
interface PiGitPullRequestCancelStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiGitPullRequestCancelStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'git-pull-request-cancel icon',
  ...props
}: PiGitPullRequestCancelStrokeProps): JSX.Element {
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
      <path d="M6 9V21M6 9C4.34315 9 3 7.65685 3 6C3 4.34315 4.34315 3 6 3C7.65685 3 9 4.34315 9 6C9 7.65685 7.65685 9 6 9ZM18 15C19.6569 15 21 16.3431 21 18C21 19.6569 19.6569 21 18 21C16.3431 21 15 19.6569 15 18C15 16.3431 16.3431 15 18 15ZM18 15V13M15.5 8.3L17.9 5.9M17.9 5.9L20.3 3.5M17.9 5.9L15.5 3.5M17.9 5.9L20.3 8.3" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
