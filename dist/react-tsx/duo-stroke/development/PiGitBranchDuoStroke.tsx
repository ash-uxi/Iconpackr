import React from 'react';

/**
 * PiGitBranchDuoStroke icon from the duo-stroke style in development category.
 */
interface PiGitBranchDuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiGitBranchDuoStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'git-branch icon',
  ...props
}: PiGitBranchDuoStrokeProps): JSX.Element {
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
      <path d="M21 5.5C21 7.15685 19.6569 8.5 18 8.5C16.3431 8.5 15 7.15685 15 5.5C15 3.84315 16.3431 2.5 18 2.5C19.6569 2.5 21 3.84315 21 5.5Z" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M6 15.5V14.5M6 14.5V3M6 14.5C6 9.52944 10.0294 5.5 15 5.5" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
  <path d="M9 18.5C9 20.1569 7.65685 21.5 6 21.5C4.34315 21.5 3 20.1569 3 18.5C3 16.8431 4.34315 15.5 6 15.5C7.65685 15.5 9 16.8431 9 18.5Z" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
    </svg>
  );
}
