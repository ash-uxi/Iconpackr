import React from 'react';

/**
 * PiShieldOffDuoSolid icon from the duo-solid style in security category.
 */
interface PiShieldOffDuoSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiShieldOffDuoSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'shield-off icon',
  ...props
}: PiShieldOffDuoSolidProps): JSX.Element {
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
      <g fill={color || "currentColor"} opacity=".28"> <path d="M13.26 1.427a4 4 0 0 0-2.717 0L5.155 3.373a4 4 0 0 0-2.638 3.608l-.127 3.31a12 12 0 0 0 2.91 8.305 1 1 0 0 0 1.464.054L19.914 5.5a1 1 0 0 0-.094-1.497 4 4 0 0 0-1.094-.602zM21.525 9.06a1 1 0 0 0-1.705-.631L8.495 19.754a1 1 0 0 0 .212 1.576l1.25.713a4 4 0 0 0 3.887.042l1.489-.806a12 12 0 0 0 6.25-11.472z" /> </g> <path d="M22 2 2 22" />
    </svg>
  );
}
