import React from 'react';

/**
 * PiBatteryChargingContrast icon from the contrast style in devices category.
 */
interface PiBatteryChargingContrastProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiBatteryChargingContrast({
  size = 24,
  color,
  className,
  ariaLabel = 'battery-charging icon',
  ...props
}: PiBatteryChargingContrastProps): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{color: color || "currentColor"}}
      
      role="img"
      aria-label={ariaLabel}
      {...props}
    >
      <path d="M20 14c.465 0 .698 0 .888-.051a1.5 1.5 0 0 0 1.06-1.06C22 12.697 22 12.464 22 12s0-.697-.051-.888a1.5 1.5 0 0 0-1.06-1.06C20.697 10 20.464 10 20 10m-4-3.973c.654.033 1.123.109 1.53.277a4 4 0 0 1 2.165 2.165C20 9.204 20 10.136 20 12s0 2.796-.305 3.53a4 4 0 0 1-2.164 2.165c-.59.245-1.307.293-2.531.303M7 6.002c-1.224.01-1.94.058-2.53.302A4 4 0 0 0 2.303 8.47C2 9.204 2 10.136 2 12s0 2.796.304 3.53a4 4 0 0 0 2.165 2.165c.408.17.876.245 1.531.278M12 6l-3.831 4.98c-.367.478-.55.716-.542.9a.5.5 0 0 0 .225.393c.154.101.453.064 1.05-.01l4.196-.525c.597-.075.896-.112 1.05-.011a.5.5 0 0 1 .225.393c.009.184-.175.422-.542.9L10 18"/>
  <path fill="currentColor" d="M7.964 5c-.901 0-1.629 0-2.22.04-.61.042-1.148.13-1.657.34A5 5 0 0 0 1.38 8.088c-.212.51-.3 1.048-.34 1.656C1 10.335 1 11.063 1 11.964v.072c0 .901 0 1.629.04 2.22.042.61.13 1.148.34 1.657a5 5 0 0 0 2.707 2.706c.51.212 1.048.3 1.656.34.592.041 1.32.041 2.221.041h6.072c.901 0 1.629 0 2.22-.04.61-.042 1.148-.13 1.657-.34a5 5 0 0 0 2.706-2.707c.212-.51.3-1.048.34-1.656.041-.592.041-1.32.041-2.221v-.072c0-.901 0-1.629-.04-2.22-.042-.61-.13-1.148-.34-1.657a5 5 0 0 0-2.707-2.706c-.51-.212-1.048-.3-1.656-.34C15.665 5 14.937 5 14.035 5z" opacity=".28"/>
    </svg>
  );
}
