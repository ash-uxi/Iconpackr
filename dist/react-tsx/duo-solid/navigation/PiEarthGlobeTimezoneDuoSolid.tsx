import React from 'react';

/**
 * PiEarthGlobeTimezoneDuoSolid icon from the duo-solid style in navigation category.
 */
interface PiEarthGlobeTimezoneDuoSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiEarthGlobeTimezoneDuoSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'earth-globe-timezone icon',
  ...props
}: PiEarthGlobeTimezoneDuoSolidProps): JSX.Element {
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
      <path d="M13.919 3.052c4.132.882 7.23 4.553 7.23 8.948 0 .861-.118 1.694-.34 2.484M3.461 8.702a9.15 9.15 0 0 0 11.022 12.106" opacity=".28" /> <path fill={color || "currentColor"} fillRule="evenodd" d="M18 12.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11m1 3.9a1 1 0 1 0-2 0v2.1a1 1 0 0 0 1 1h1.6a1 1 0 1 0 0-2H19z" clipRule="evenodd" /> <path fill={color || "currentColor"} d="M2.53 8.342a10.15 10.15 0 0 1 11.598-6.268 1 1 0 0 1 .777.808Q14.999 3.43 15 4c0 2.589-1.496 4.81-3.666 6.018a4.15 4.15 0 0 1-.335 2.166 2.742 2.742 0 1 1-4.908 2.262 4.12 4.12 0 0 1-2.893-4.71 8 8 0 0 1-.327-.227 1 1 0 0 1-.342-1.167" />
    </svg>
  );
}
