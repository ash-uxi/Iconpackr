import React from 'react';

/**
 * PiAnimation01DuoSolid icon from the duo-solid style in media category.
 */
interface PiAnimation01DuoSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiAnimation01DuoSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'animation-01 icon',
  ...props
}: PiAnimation01DuoSolidProps): JSX.Element {
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
      <path fill={color || "currentColor"} d="M15.05 1.85a7.1 7.1 0 1 0 0 14.2 7.1 7.1 0 0 0 0-14.2" /> <path d="M15.686 15.018a5.1 5.1 0 0 1-4.771 3.081M8.983 8.314A5.1 5.1 0 0 0 5.9 13.086m0 0a4.102 4.102 0 0 0 1.05 8.064 4.1 4.1 0 0 0 3.964-3.05M5.9 13.084a5.1 5.1 0 0 0 5.014 5.014" opacity=".28" />
    </svg>
  );
}
