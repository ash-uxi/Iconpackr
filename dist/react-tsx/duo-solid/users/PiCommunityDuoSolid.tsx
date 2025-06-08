import React from 'react';

/**
 * PiCommunityDuoSolid icon from the duo-solid style in users category.
 */
interface PiCommunityDuoSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiCommunityDuoSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'community icon',
  ...props
}: PiCommunityDuoSolidProps): JSX.Element {
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
      <path fill={color || "currentColor"} d="M16.672 12.383a3.596 3.596 0 1 0 0 7.19 3.596 3.596 0 0 0 0-7.19M16.672 2a3.596 3.596 0 1 0 0 7.191 3.596 3.596 0 0 0 0-7.191" /> <path d="M2.656 10.618A5.7 5.7 0 0 1 7.328 8.19c1.932 0 3.639.959 4.673 2.426a5.7 5.7 0 0 1 4.672-2.426c1.93 0 3.638.959 4.672 2.426M2.656 21a5.7 5.7 0 0 1 4.672-2.426c1.932 0 3.639.958 4.673 2.426a5.7 5.7 0 0 1 4.672-2.426c1.93 0 3.638.958 4.672 2.426" opacity=".28" /> <path fill={color || "currentColor"} d="M7.328 12.383a3.596 3.596 0 1 0 0 7.19 3.596 3.596 0 0 0 0-7.19M7.328 2a3.596 3.596 0 1 0 0 7.191 3.596 3.596 0 0 0 0-7.191" />
    </svg>
  );
}
