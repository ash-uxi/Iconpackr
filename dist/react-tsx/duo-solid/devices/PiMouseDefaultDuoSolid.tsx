import React from 'react';

/**
 * PiMouseDefaultDuoSolid icon from the duo-solid style in devices category.
 */
interface PiMouseDefaultDuoSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiMouseDefaultDuoSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'mouse-default icon',
  ...props
}: PiMouseDefaultDuoSolidProps): JSX.Element {
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
      <path d="M12 10.05v-2.1" /> <path fill={color || "currentColor"} d="M12 2a8 8 0 0 0-8 8v4a8 8 0 1 0 16 0v-4a8 8 0 0 0-8-8" opacity=".28" />
    </svg>
  );
}
