import React from 'react';

/**
 * PiQueueSolid icon from the solid style in general category.
 */
interface PiQueueSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiQueueSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'queue icon',
  ...props
}: PiQueueSolidProps): JSX.Element {
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
      <path d="M3 14C2.44772 14 2 14.4477 2 15C2 15.5523 2.44772 16 3 16H21C21.5523 16 22 15.5523 22 15C22 14.4477 21.5523 14 21 14H3Z" fill="currentColor" stroke="none"/>
  <path d="M3 19C2.44772 19 2 19.4477 2 20C2 20.5523 2.44772 21 3 21H21C21.5523 21 22 20.5523 22 20C22 19.4477 21.5523 19 21 19H3Z" fill="currentColor" stroke="none"/>
  <path d="M6 3C3.79086 3 2 4.79086 2 7C2 9.20914 3.79086 11 6 11H18C20.2091 11 22 9.20914 22 7C22 4.79086 20.2091 3 18 3H6Z" fill="currentColor" stroke="none"/>
    </svg>
  );
}
