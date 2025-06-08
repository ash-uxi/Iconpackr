import React from 'react';

/**
 * PiGitBranchPlusStroke icon from the stroke style in development category.
 */
interface PiGitBranchPlusStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiGitBranchPlusStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'git-branch-plus icon',
  ...props
}: PiGitBranchPlusStrokeProps): JSX.Element {
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
      <path d="M6 15.5V3M6 15.5C4.34315 15.5 3 16.8431 3 18.5C3 20.1569 4.34315 21.5 6 21.5C7.65685 21.5 9 20.1569 9 18.5C9 16.8431 7.65685 15.5 6 15.5ZM15 5.5C15 7.15685 16.3431 8.5 18 8.5C19.6569 8.5 21 7.15685 21 5.5C21 3.84315 19.6569 2.5 18 2.5C16.3431 2.5 15 3.84315 15 5.5ZM15 5.5C10.0294 5.5 6 9.52944 6 14.5M18 21V18M18 18V15M18 18H15M18 18H21" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
