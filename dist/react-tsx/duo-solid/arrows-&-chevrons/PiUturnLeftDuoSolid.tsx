import React from 'react';

/**
 * PiUturnLeftDuoSolid icon from the duo-solid style in arrows-&-chevrons category.
 */
interface PiUturnLeftDuoSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiUturnLeftDuoSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'uturn-left icon',
  ...props
}: PiUturnLeftDuoSolidProps): JSX.Element {
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
      <path d="M4 8h11a5 5 0 0 1 0 10h-3" opacity=".28" /> <path fill={color || "currentColor"} d="M9.028 3.99a1 1 0 0 0-1.586-.882A21.8 21.8 0 0 0 3.37 6.964a1.64 1.64 0 0 0 0 2.071 21.8 21.8 0 0 0 4.073 3.856 1 1 0 0 0 1.586-.882l-.17-2.32a23 23 0 0 1 0-3.38z" />
    </svg>
  );
}
