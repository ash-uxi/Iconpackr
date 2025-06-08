import React from 'react';

/**
 * PiRotateRightDuoSolid icon from the duo-solid style in arrows-&-chevrons category.
 */
interface PiRotateRightDuoSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiRotateRightDuoSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'rotate-right icon',
  ...props
}: PiRotateRightDuoSolidProps): JSX.Element {
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
      <path fill={color || "currentColor"} d="M17.793 1.67a1 1 0 0 0-.921.59l-.243.539a23 23 0 0 1-2.311 4.003l-.346.48a1 1 0 0 0 .931 1.577 16 16 0 0 0 3.808-.943c.155-.06.454-.182.703-.429.302-.3.48-.732.407-1.235a16 16 0 0 0-1.118-3.975 1 1 0 0 0-.91-.607" /> <path d="M18.26 7.017A8 8 0 1 0 19.748 14" opacity=".28" />
    </svg>
  );
}
