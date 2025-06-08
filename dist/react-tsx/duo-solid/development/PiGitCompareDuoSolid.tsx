import React from 'react';

/**
 * PiGitCompareDuoSolid icon from the duo-solid style in development category.
 */
interface PiGitCompareDuoSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiGitCompareDuoSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'git-compare icon',
  ...props
}: PiGitCompareDuoSolidProps): JSX.Element {
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
      <path fill={color || "currentColor"} d="M18 14a4 4 0 1 0 0 8 4 4 0 0 0 0-8" /> <path d="M18 15v-4a5 5 0 0 0-5-5M6 9v4a5 5 0 0 0 5 5" opacity=".28" /> <path fill={color || "currentColor"} d="M6 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8" />
    </svg>
  );
}
