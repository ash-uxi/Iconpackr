import React from 'react';

/**
 * PiAirplaneTouchdownDuoSolid icon from the duo-solid style in automotive category.
 */
interface PiAirplaneTouchdownDuoSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiAirplaneTouchdownDuoSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'airplane-touchdown icon',
  ...props
}: PiAirplaneTouchdownDuoSolidProps): JSX.Element {
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
      <path d="M3 20h18" opacity=".28" /> <path fill={color || "currentColor"} fillRule="evenodd" d="M8.675 1.034a1 1 0 0 0-1.254 1.063l.688 7.068-1.212-.325-1.98-2.253a2 2 0 0 0-.985-.612l-.673-.18A1 1 0 0 0 2.002 6.82l.25 4.155a4 4 0 0 0 2.957 3.624l13.366 3.581a2 2 0 0 0 2.45-1.414 4 4 0 0 0-2.829-4.898l-2.46-.66-3.89-7.91a4 4 0 0 0-2.554-2.099z" clipRule="evenodd" />
    </svg>
  );
}
