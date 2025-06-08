import React from 'react';

/**
 * PiCalendarOffDuoSolid icon from the duo-solid style in time category.
 */
interface PiCalendarOffDuoSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiCalendarOffDuoSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'calendar-off icon',
  ...props
}: PiCalendarOffDuoSolidProps): JSX.Element {
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
      <g fill={color || "currentColor"} opacity=".28"> <path d="M8 1a1 1 0 0 1 1 1v1.04C9.805 3 10.759 3 11.916 3h.168c1.157 0 2.111 0 2.916.04V2a1 1 0 1 1 2 0v1.305q.35.092.679.228a7 7 0 0 1 1.653.968 1 1 0 0 1 .088 1.493l-3.537 3.537A1 1 0 0 0 15 9H2.12c.074-.615.199-1.162.413-1.679A7 7 0 0 1 6.32 3.533 5 5 0 0 1 7 3.305V2a1 1 0 0 1 1-1M2.01 11C2 11.581 2 12.235 2 12.974v.063c0 1.366 0 2.443.06 3.314.06.888.186 1.634.473 2.328a7 7 0 0 0 .968 1.653 1 1 0 0 0 1.493.088l9.42-9.42zM21.151 7.857a1 1 0 0 1 .68.792c.064.398.103.828.127 1.3.042.813.042 1.802.042 3.025v.063c0 1.366 0 2.443-.06 3.314-.06.888-.186 1.634-.473 2.328a7 7 0 0 1-3.788 3.788c-.694.287-1.44.413-2.328.474-.87.059-1.948.059-3.314.059h-.14c-1.863 0-3.203 0-4.248-.17a1 1 0 0 1-.548-1.693L20.137 8.1a1 1 0 0 1 1.014-.244" /> </g> <path d="M2 22 22 2" />
    </svg>
  );
}
