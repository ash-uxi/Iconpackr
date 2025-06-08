import React from 'react';

/**
 * PiGitPullRequestDraftDuoSolid icon from the duo-solid style in development category.
 */
interface PiGitPullRequestDraftDuoSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiGitPullRequestDraftDuoSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'git-pull-request-draft icon',
  ...props
}: PiGitPullRequestDraftDuoSolidProps): JSX.Element {
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
      <path fill={color || "currentColor"} d="M18 14a4 4 0 1 0 0 8 4 4 0 0 0 0-8M6 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8" /> <path d="M6 9v12m12-8v2m-5-9q.514 0 1 .1M17 8q.348.462.584 1" opacity=".28" />
    </svg>
  );
}
