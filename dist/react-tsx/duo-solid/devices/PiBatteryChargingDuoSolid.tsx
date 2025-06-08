import React from 'react';

/**
 * PiBatteryChargingDuoSolid icon from the duo-solid style in devices category.
 */
interface PiBatteryChargingDuoSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiBatteryChargingDuoSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'battery-charging icon',
  ...props
}: PiBatteryChargingDuoSolidProps): JSX.Element {
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
      <path d="m12 6-3.831 4.98c-.367.478-.55.716-.542.9a.5.5 0 0 0 .225.393c.154.101.453.064 1.05-.01l4.196-.525c.597-.075.896-.112 1.05-.011a.5.5 0 0 1 .225.393c.009.184-.175.422-.542.9L10 18" /> <path fill={color || "currentColor"} d="M7.964 5c-.901 0-1.629 0-2.22.04-.61.042-1.148.13-1.657.34A5 5 0 0 0 1.38 8.088c-.212.51-.3 1.048-.34 1.656C1 10.335 1 11.063 1 11.964v.072c0 .901 0 1.629.04 2.22.042.61.13 1.148.34 1.657a5 5 0 0 0 2.707 2.706c.51.212 1.048.3 1.656.34.592.041 1.32.041 2.221.041h6.072c.901 0 1.629 0 2.22-.04.61-.042 1.148-.13 1.657-.34a5 5 0 0 0 2.706-2.707 4.2 4.2 0 0 0 .262-.946q.137-.019.266-.052a2.5 2.5 0 0 0 1.768-1.768c.086-.323.086-.685.085-1.054v-.186c0-.369.001-.731-.085-1.054a2.5 2.5 0 0 0-1.768-1.768 2 2 0 0 0-.266-.052 4.2 4.2 0 0 0-.262-.946 5 5 0 0 0-2.706-2.706c-.51-.212-1.048-.3-1.656-.34C15.665 5 14.937 5 14.035 5z" opacity=".28" />
    </svg>
  );
}
