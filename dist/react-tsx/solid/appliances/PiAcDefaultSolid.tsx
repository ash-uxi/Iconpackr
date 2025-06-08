import React from 'react';

/**
 * PiAcDefaultSolid icon from the solid style in appliances category.
 */
interface PiAcDefaultSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiAcDefaultSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'ac-default icon',
  ...props
}: PiAcDefaultSolidProps): JSX.Element {
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
      <path d="M1 10C1 8.34315 2.34315 7 4 7H20C21.6569 7 23 8.34315 23 10V16C23 16.5523 22.5523 17 22 17H2C1.44772 17 1 16.5523 1 16V10ZM16 11C15.4477 11 15 11.4477 15 12C15 12.5523 15.4477 13 16 13H18C18.5523 13 19 12.5523 19 12C19 11.4477 18.5523 11 18 11H16Z" fill="currentColor" stroke="none"/>
    </svg>
  );
}
