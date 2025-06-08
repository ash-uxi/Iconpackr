import React from 'react';

/**
 * PiGitBranchContrast icon from the contrast style in development category.
 */
interface PiGitBranchContrastProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiGitBranchContrast({
  size = 24,
  color,
  className,
  ariaLabel = 'git-branch icon',
  ...props
}: PiGitBranchContrastProps): JSX.Element {
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
    <path d="M21 5.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0M9 18.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
  </g>
  <path d="M6 15.5V3m0 12.5a3 3 0 1 0 0 6 3 3 0 0 0 0-6m9-10a3 3 0 1 0 6 0 3 3 0 0 0-6 0m0 0a9 9 0 0 0-9 9"/>
    </svg>
  );
}
