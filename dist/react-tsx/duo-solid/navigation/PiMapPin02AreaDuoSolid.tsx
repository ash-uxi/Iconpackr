import React from 'react';

/**
 * PiMapPin02AreaDuoSolid icon from the duo-solid style in navigation category.
 */
interface PiMapPin02AreaDuoSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiMapPin02AreaDuoSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'map-pin-02-area icon',
  ...props
}: PiMapPin02AreaDuoSolidProps): JSX.Element {
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
      <path fill={color || "currentColor"} d="M12 2a5 5 0 0 0-1 9.9V17a1 1 0 1 0 2 0v-5.1A5.002 5.002 0 0 0 12 2" /> <path d="M7 15.164c-2.989.562-5 1.613-5 2.816 0 1.794 4.477 3.25 10 3.25s10-1.456 10-3.25c0-1.203-2.011-2.254-5-2.816" opacity=".28" />
    </svg>
  );
}
