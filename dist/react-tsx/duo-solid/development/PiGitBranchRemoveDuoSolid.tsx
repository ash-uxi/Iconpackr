import React from 'react';

/**
 * PiGitBranchRemoveDuoSolid icon from the duo-solid style in development category.
 */
interface PiGitBranchRemoveDuoSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiGitBranchRemoveDuoSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'git-branch-remove icon',
  ...props
}: PiGitBranchRemoveDuoSolidProps): JSX.Element {
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
      <path fill={color || "currentColor"} d="M14 5.5a4 4 0 1 1 8 0 4 4 0 0 1-8 0M15 17a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2zM2 18.5a4 4 0 1 1 8 0 4 4 0 0 1-8 0" /> <path d="M6 15.5v-1m0 0V3m0 11.5a9 9 0 0 1 9-9" opacity=".28" />
    </svg>
  );
}
