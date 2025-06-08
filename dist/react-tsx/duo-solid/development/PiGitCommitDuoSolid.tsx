import React from 'react';

/**
 * PiGitCommitDuoSolid icon from the duo-solid style in development category.
 */
interface PiGitCommitDuoSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiGitCommitDuoSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'git-commit icon',
  ...props
}: PiGitCommitDuoSolidProps): JSX.Element {
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
      <path fill={color || "currentColor"} d="M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8" /> <path d="M3 12h6m6 0h6" opacity=".28" />
    </svg>
  );
}
