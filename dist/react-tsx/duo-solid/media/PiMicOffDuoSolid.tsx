import React from 'react';

/**
 * PiMicOffDuoSolid icon from the duo-solid style in media category.
 */
interface PiMicOffDuoSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiMicOffDuoSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'mic-off icon',
  ...props
}: PiMicOffDuoSolidProps): JSX.Element {
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
      <g fill={color || "currentColor"} opacity=".28"> <path d="M12 2a5 5 0 0 0-5 5v5c0 1.38.56 2.632 1.464 3.536a1 1 0 0 0 1.415 0l6.828-6.829A1 1 0 0 0 17 8V7a5 5 0 0 0-5-5M5 12a1 1 0 1 0-2 0 8.98 8.98 0 0 0 2.636 6.364A1 1 0 0 0 7.05 16.95 6.98 6.98 0 0 1 5 12M21 12a1 1 0 1 0-2 0 7 7 0 0 1-8.83 6.759 1 1 0 0 0-.522 1.93q.659.179 1.352.256V22a1 1 0 1 0 2 0v-1.055c4.5-.497 8-4.312 8-8.945" /> <path d="M16.636 13.875a1 1 0 0 0-1.854-.75 3.01 3.01 0 0 1-1.657 1.657 1 1 0 1 0 .75 1.854 5.01 5.01 0 0 0 2.761-2.76" /> </g> <path d="M22 2 2 22" />
    </svg>
  );
}
