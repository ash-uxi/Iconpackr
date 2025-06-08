import React from 'react';

/**
 * PiGaugeLeftUpDuoSolid icon from the duo-solid style in chart-&-graph category.
 */
interface PiGaugeLeftUpDuoSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiGaugeLeftUpDuoSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'gauge-left-up icon',
  ...props
}: PiGaugeLeftUpDuoSolidProps): JSX.Element {
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
      <path fill={color || "currentColor"} fillRule="evenodd" d="M12 1.85C6.394 1.85 1.85 6.394 1.85 12c0 5.605 4.544 10.15 10.15 10.15S22.15 17.605 22.15 12 17.606 1.85 12 1.85" clipRule="evenodd" opacity=".28" /> <path d="m7.996 7.997 4.623 3.468a.833.833 0 0 1 .088 1.243.833.833 0 0 1-1.242-.088z" />
    </svg>
  );
}
