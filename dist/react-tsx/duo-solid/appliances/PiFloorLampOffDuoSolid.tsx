import React from 'react';

/**
 * PiFloorLampOffDuoSolid icon from the duo-solid style in appliances category.
 */
interface PiFloorLampOffDuoSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiFloorLampOffDuoSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'floor-lamp-off icon',
  ...props
}: PiFloorLampOffDuoSolidProps): JSX.Element {
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
      <path d="M12 21V10M9 21h6" opacity=".28" /> <path fill={color || "currentColor"} d="M9.829 2A3 3 0 0 0 6.99 4.027L5.054 9.676A1 1 0 0 0 6 11h12a1 1 0 0 0 .946-1.324l-1.937-5.649A3 3 0 0 0 14.171 2z" />
    </svg>
  );
}
