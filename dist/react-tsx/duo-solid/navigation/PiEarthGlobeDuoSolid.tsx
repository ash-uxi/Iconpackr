import React from 'react';

/**
 * PiEarthGlobeDuoSolid icon from the duo-solid style in navigation category.
 */
interface PiEarthGlobeDuoSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiEarthGlobeDuoSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'earth-globe icon',
  ...props
}: PiEarthGlobeDuoSolidProps): JSX.Element {
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
      <path fill={color || "currentColor"} d="M12 1.85a10.15 10.15 0 0 0-8.916 5.294 1 1 0 0 0 .149 1.164 7.7 7.7 0 0 0 2.016 1.528 4.12 4.12 0 0 0 2.268 4.746 2.742 2.742 0 1 0 5.143-1.445 4.1 4.1 0 0 0 .607-3.156c2.375-1.148 4.08-3.36 4.08-6.013v-.026a1 1 0 0 0-.525-.875 10.1 10.1 0 0 0-4.823-1.217M17.485 13.233c1.14 0 2.117.696 2.531 1.686q.344.119.657.292a1 1 0 0 1 .41 1.322 10.2 10.2 0 0 1-4.73 4.638 1 1 0 0 1-1.314-.436 4.1 4.1 0 0 1-.475-1.92c0-.631.143-1.23.397-1.766a2.742 2.742 0 0 1 2.524-3.816" /> <path d="M2.85 12A9.15 9.15 0 0 0 12 21.15c4.974 0 9.15-4.174 9.15-9.15a9.15 9.15 0 0 0-18.3 0" opacity=".28" />
    </svg>
  );
}
