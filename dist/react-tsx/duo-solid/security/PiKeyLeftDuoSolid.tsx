import React from 'react';

/**
 * PiKeyLeftDuoSolid icon from the duo-solid style in security category.
 */
interface PiKeyLeftDuoSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiKeyLeftDuoSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'key-left icon',
  ...props
}: PiKeyLeftDuoSolidProps): JSX.Element {
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
      <path fill={color || "currentColor"} d="M18 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10" /> <path d="M6 12H2v3m4-3h8m-8 0v2" opacity=".28" />
    </svg>
  );
}
