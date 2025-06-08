import React from 'react';

/**
 * PiAirplaneFlyingDuoSolid icon from the duo-solid style in automotive category.
 */
interface PiAirplaneFlyingDuoSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiAirplaneFlyingDuoSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'airplane-flying icon',
  ...props
}: PiAirplaneFlyingDuoSolidProps): JSX.Element {
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
      <path d="M3 20h18" opacity=".28" /> <path fill={color || "currentColor"} fillRule="evenodd" d="M6 3a1 1 0 0 0-.936 1.351l2.493 6.65L6.303 11 3.807 9.336A2 2 0 0 0 2.697 9H2a1 1 0 0 0-.949 1.316l1.317 3.949A4 4 0 0 0 6.162 17H20a2 2 0 0 0 2-2 4 4 0 0 0-4-4h-2.546L9.649 4.366A4 4 0 0 0 6.639 3z" clipRule="evenodd" />
    </svg>
  );
}
