import React from 'react';

/**
 * PiMapPin02Solid icon from the solid style in navigation category.
 */
interface PiMapPin02SolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiMapPin02Solid({
  size = 24,
  color,
  className,
  ariaLabel = 'map-pin-02 icon',
  ...props
}: PiMapPin02SolidProps): JSX.Element {
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
      <path d="M12 2C8.68629 2 6 4.68629 6 8C6 10.973 8.16229 13.441 11 13.917V21C11 21.5523 11.4477 22 12 22C12.5523 22 13 21.5523 13 21V13.917C15.8377 13.441 18 10.973 18 8C18 4.68629 15.3137 2 12 2Z" fill="currentColor" stroke="none"/>
    </svg>
  );
}
