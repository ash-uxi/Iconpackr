import React from 'react';

/**
 * PiSolscanDuoSolid icon from the duo-solid style in apps-&-social category.
 */
interface PiSolscanDuoSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiSolscanDuoSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'solscan icon',
  ...props
}: PiSolscanDuoSolidProps): JSX.Element {
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
      <path fill={color || "currentColor"} d="M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10" /> <path d="M19.892 16.636a9.15 9.15 0 1 0-14.856 1.298 9.15 9.15 0 0 0 10.289 2.593" opacity=".28" />
    </svg>
  );
}
