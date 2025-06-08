import React from 'react';

/**
 * PiAlarmCheckContrast icon from the contrast style in time category.
 */
interface PiAlarmCheckContrastProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiAlarmCheckContrast({
  size = 24,
  color,
  className,
  ariaLabel = 'alarm-check icon',
  ...props
}: PiAlarmCheckContrastProps): JSX.Element {
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
      <path fill="currentColor" d="M20 13a8 8 0 1 1-16 0 8 8 0 0 1 16 0" opacity=".28"/>
  <path d="M5 3 2 6m17-3 3 3M9 13.285l2.007 2.005A13.06 13.06 0 0 1 15 11m5 2a8 8 0 1 1-16 0 8 8 0 0 1 16 0"/>
    </svg>
  );
}
