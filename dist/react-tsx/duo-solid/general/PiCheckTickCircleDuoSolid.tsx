import React from 'react';

/**
 * PiCheckTickCircleDuoSolid icon from the duo-solid style in general category.
 */
interface PiCheckTickCircleDuoSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiCheckTickCircleDuoSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'check-tick-circle icon',
  ...props
}: PiCheckTickCircleDuoSolidProps): JSX.Element {
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
      <path fill={color || "currentColor"} d="M12 1.85C6.394 1.85 1.85 6.394 1.85 12S6.394 22.15 12 22.15 22.15 17.606 22.15 12 17.606 1.85 12 1.85" opacity=".28" /> <path d="m8.5 12.512 2.341 2.339A15 15 0 0 1 15.4 9.915l.101-.069" />
    </svg>
  );
}
