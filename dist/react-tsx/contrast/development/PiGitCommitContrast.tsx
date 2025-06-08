import React from 'react';

/**
 * PiGitCommitContrast icon from the contrast style in development category.
 */
interface PiGitCommitContrastProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiGitCommitContrast({
  size = 24,
  color,
  className,
  ariaLabel = 'git-commit icon',
  ...props
}: PiGitCommitContrastProps): JSX.Element {
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
      <path fill="currentColor" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0" opacity=".28"/>
  <path d="M15 12a3 3 0 1 1-6 0m6 0a3 3 0 1 0-6 0m6 0h6M9 12H3"/>
    </svg>
  );
}
