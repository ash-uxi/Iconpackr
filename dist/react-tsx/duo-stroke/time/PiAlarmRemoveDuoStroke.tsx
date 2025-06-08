import React from 'react';

/**
 * PiAlarmRemoveDuoStroke icon from the duo-stroke style in time category.
 */
interface PiAlarmRemoveDuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiAlarmRemoveDuoStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'alarm-remove icon',
  ...props
}: PiAlarmRemoveDuoStrokeProps): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{color: color || "currentColor"}}
      
      role="img"
      aria-label={ariaLabel}
      {...props}
    >
      <path d="M12 21C16.4183 21 20 17.4183 20 13C20 8.58172 16.4183 5 12 5C7.58172 5 4 8.58172 4 13C4 17.4183 7.58172 21 12 21Z" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
  <path d="M5 3L2 6M19 3L22 6M9 13H15" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
    </svg>
  );
}
