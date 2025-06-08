import React from 'react';

/**
 * PiPauseCircleDuoSolid icon from the duo-solid style in media category.
 */
interface PiPauseCircleDuoSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiPauseCircleDuoSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'pause-circle icon',
  ...props
}: PiPauseCircleDuoSolidProps): JSX.Element {
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
      <path fill={color || "currentColor"} d="M12 1.85C6.394 1.85 1.85 6.394 1.85 12S6.394 22.15 12 22.15 22.15 17.606 22.15 12 17.606 1.85 12 1.85" opacity=".28" /> <path d="M9.501 9v6M14.5 9v6" />
    </svg>
  );
}
