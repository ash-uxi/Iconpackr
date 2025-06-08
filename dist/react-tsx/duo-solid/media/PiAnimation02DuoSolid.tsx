import React from 'react';

/**
 * PiAnimation02DuoSolid icon from the duo-solid style in media category.
 */
interface PiAnimation02DuoSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiAnimation02DuoSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'animation-02 icon',
  ...props
}: PiAnimation02DuoSolidProps): JSX.Element {
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
      <path fill={color || "currentColor"} d="M19 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8" /> <path d="M2 14a5 5 0 0 1 5 5v-1a9 9 0 0 1 5.237-8.178" opacity=".28" />
    </svg>
  );
}
