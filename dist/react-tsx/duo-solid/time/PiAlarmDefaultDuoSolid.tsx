import React from 'react';

/**
 * PiAlarmDefaultDuoSolid icon from the duo-solid style in time category.
 */
interface PiAlarmDefaultDuoSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiAlarmDefaultDuoSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'alarm-default icon',
  ...props
}: PiAlarmDefaultDuoSolidProps): JSX.Element {
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
      <path fill={color || "currentColor"} d="M12 4a9 9 0 1 0 0 18 9 9 0 0 0 0-18" opacity=".28" /> <path d="M5 3 2 6m17-3 3 3m-10 4v3.717a.5.5 0 0 0 .243.429L14.5 15.5" />
    </svg>
  );
}
