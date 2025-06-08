import React from 'react';

/**
 * PiGitPullRequestDuoStroke icon from the duo-stroke style in development category.
 */
interface PiGitPullRequestDuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiGitPullRequestDuoStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'git-pull-request icon',
  ...props
}: PiGitPullRequestDuoStrokeProps): JSX.Element {
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
      <path d="M21 18C21 16.3431 19.6569 15 18 15C16.3431 15 15 16.3431 15 18C15 19.6569 16.3431 21 18 21C19.6569 21 21 19.6569 21 18Z" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M6 9V21M18 15V11C18 8.23858 15.7614 6 13 6" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
  <path d="M9 6C9 4.34315 7.65685 3 6 3C4.34315 3 3 4.34315 3 6C3 7.65685 4.34315 9 6 9C7.65685 9 9 7.65685 9 6Z" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
    </svg>
  );
}
