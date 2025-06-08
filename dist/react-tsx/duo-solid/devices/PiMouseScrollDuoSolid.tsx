import React from 'react';

/**
 * PiMouseScrollDuoSolid icon from the duo-solid style in devices category.
 */
interface PiMouseScrollDuoSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiMouseScrollDuoSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'mouse-scroll icon',
  ...props
}: PiMouseScrollDuoSolidProps): JSX.Element {
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
      <path fill={color || "currentColor"} d="M12 2a8 8 0 0 0-8 8v4a8 8 0 1 0 16 0v-4a8 8 0 0 0-8-8" opacity=".28" /> <path d="M14 14.5a10 10 0 0 1-1.704 1.77.47.47 0 0 1-.592 0A10 10 0 0 1 10 14.5m4-5a10 10 0 0 0-1.704-1.77.47.47 0 0 0-.592 0A10 10 0 0 0 10 9.5" />
    </svg>
  );
}
