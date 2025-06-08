import React from 'react';

/**
 * PiCopyDefaultDuoSolid icon from the duo-solid style in general category.
 */
interface PiCopyDefaultDuoSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiCopyDefaultDuoSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'copy-default icon',
  ...props
}: PiCopyDefaultDuoSolidProps): JSX.Element {
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
      <path d="M16.902 16.902a4 4 0 0 0 .643-.147 5 5 0 0 0 3.21-3.21C21 12.792 21 11.861 21 10s0-2.792-.245-3.545a5 5 0 0 0-3.21-3.21C16.792 3 15.861 3 14 3s-2.792 0-3.545.245a5 5 0 0 0-3.21 3.21 4 4 0 0 0-.147.643" opacity=".28" /> <path fill={color || "currentColor"} d="M9.8 6c-1.668 0-2.748 0-3.654.294a6 6 0 0 0-3.852 3.852C1.999 11.052 2 12.132 2 13.8v.4c0 1.669 0 2.748.294 3.654a6 6 0 0 0 3.852 3.852c.906.295 1.985.294 3.654.294h.4c1.669 0 2.748 0 3.654-.294a6 6 0 0 0 3.852-3.852c.295-.906.294-1.985.294-3.654v-.4c0-1.668 0-2.748-.294-3.654a6 6 0 0 0-3.852-3.852C12.948 5.999 11.87 6 10.2 6z" />
    </svg>
  );
}
