import React from 'react';

/**
 * PiGitCommitSolid icon from the solid style in development category.
 */
interface PiGitCommitSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiGitCommitSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'git-commit icon',
  ...props
}: PiGitCommitSolidProps): JSX.Element {
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
      <path d="M12 8C10.1362 8 8.57006 9.27477 8.12602 11H3C2.44772 11 2 11.4477 2 12C2 12.5523 2.44772 13 3 13H8.12602C8.57006 14.7252 10.1362 16 12 16C13.8638 16 15.4299 14.7252 15.874 13H21C21.5523 13 22 12.5523 22 12C22 11.4477 21.5523 11 21 11H15.874C15.4299 9.27477 13.8638 8 12 8Z" fill="currentColor" stroke="none"/>
    </svg>
  );
}
