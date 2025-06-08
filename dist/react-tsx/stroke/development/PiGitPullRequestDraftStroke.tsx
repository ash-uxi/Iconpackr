import React from 'react';

/**
 * PiGitPullRequestDraftStroke icon from the stroke style in development category.
 */
interface PiGitPullRequestDraftStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiGitPullRequestDraftStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'git-pull-request-draft icon',
  ...props
}: PiGitPullRequestDraftStrokeProps): JSX.Element {
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
      <path d="M6 9V21M6 9C4.34315 9 3 7.65685 3 6C3 4.34315 4.34315 3 6 3C7.65685 3 9 4.34315 9 6C9 7.65685 7.65685 9 6 9ZM18 15C19.6569 15 21 16.3431 21 18C21 19.6569 19.6569 21 18 21C16.3431 21 15 19.6569 15 18C15 16.3431 16.3431 15 18 15ZM18 15V13M13 6C13.3425 6 13.6769 6.03443 14 6.10002M17 7.99951C17.2313 8.30738 17.4279 8.64281 17.584 9" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
