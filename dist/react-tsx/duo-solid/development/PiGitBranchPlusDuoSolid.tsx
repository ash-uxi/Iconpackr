import React from 'react';

/**
 * PiGitBranchPlusDuoSolid icon from the duo-solid style in development category.
 */
interface PiGitBranchPlusDuoSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiGitBranchPlusDuoSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'git-branch-plus icon',
  ...props
}: PiGitBranchPlusDuoSolidProps): JSX.Element {
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
      <path fill={color || "currentColor"} d="M14 5.5a4 4 0 1 1 8 0 4 4 0 0 1-8 0M19 15a1 1 0 1 0-2 0v2h-2a1 1 0 1 0 0 2h2v2a1 1 0 1 0 2 0v-2h2a1 1 0 1 0 0-2h-2zM2 18.5a4 4 0 1 1 8 0 4 4 0 0 1-8 0" /> <path d="M6 15.5v-1m0 0V3m0 11.5a9 9 0 0 1 9-9" opacity=".28" />
    </svg>
  );
}
