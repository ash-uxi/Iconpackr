import React from 'react';

/**
 * PiRotateLeftDuoSolid icon from the duo-solid style in arrows-&-chevrons category.
 */
interface PiRotateLeftDuoSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiRotateLeftDuoSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'rotate-left icon',
  ...props
}: PiRotateLeftDuoSolidProps): JSX.Element {
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
      <path d="M5.739 7.017A8 8 0 1 1 4.25 14" opacity=".28" /> <path fill={color || "currentColor"} d="M6.205 1.67a1 1 0 0 1 .922.59l.242.539a23 23 0 0 0 2.312 4.003l.345.48a1 1 0 0 1-.93 1.577 16 16 0 0 1-3.809-.943 2 2 0 0 1-.703-.429 1.42 1.42 0 0 1-.407-1.235 16 16 0 0 1 1.118-3.975 1 1 0 0 1 .91-.607" />
    </svg>
  );
}
