import React from 'react';

/**
 * PiExchange02DuoSolid icon from the duo-solid style in arrows-&-chevrons category.
 */
interface PiExchange02DuoSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiExchange02DuoSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'exchange-02 icon',
  ...props
}: PiExchange02DuoSolidProps): JSX.Element {
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
      <path d="M15.798 9H20M8.202 15H4" opacity=".28" /> <path fill={color || "currentColor"} d="M17.028 5.075a1 1 0 0 0-1.578-.89 21.6 21.6 0 0 0-4.074 3.78 1.62 1.62 0 0 0 0 2.07 21.6 21.6 0 0 0 4.074 3.78 1 1 0 0 0 1.578-.89l-.165-2.2a23 23 0 0 1 0-3.45zM6.972 11.075a1 1 0 0 1 1.578-.89 21.6 21.6 0 0 1 4.074 3.78 1.62 1.62 0 0 1 0 2.07 21.6 21.6 0 0 1-4.074 3.78 1 1 0 0 1-1.578-.89l.165-2.2a23 23 0 0 0 0-3.45z" />
    </svg>
  );
}
