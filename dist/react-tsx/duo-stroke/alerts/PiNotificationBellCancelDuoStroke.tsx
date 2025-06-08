import React from 'react';

/**
 * PiNotificationBellCancelDuoStroke icon from the duo-stroke style in alerts category.
 */
interface PiNotificationBellCancelDuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiNotificationBellCancelDuoStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'notification-bell-cancel icon',
  ...props
}: PiNotificationBellCancelDuoStrokeProps): JSX.Element {
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
      <path  d="M10.232 8.293a1 1 0 0 0-1.414 1.414l1.768 1.768-1.768 1.768a1 1 0 0 0 1.414 1.414L12 12.889l1.768 1.768a1 1 0 0 0 1.414-1.414l-1.768-1.768 1.768-1.768a1 1 0 0 0-1.414-1.414L12 10.06z" fill="none"/>
  <path d="M4.818 9.609a7.207 7.207 0 0 1 14.365 0l.355 4.262c.043.515.206.993.367 1.479a1.587 1.587 0 0 1-1.33 2.077 59.5 59.5 0 0 1-13.149 0 1.587 1.587 0 0 1-1.33-2.08c.161-.485.324-.963.367-1.478z" opacity=".28" fill="none"/>
  <path  d="M9.11 18.722a61 61 0 0 1-.917-.05 3.843 3.843 0 0 0 7.616 0 60 60 0 0 1-2.07.094 1.843 1.843 0 0 1-3.478 0 61 61 0 0 1-1.15-.044" fill="none"/>
    </svg>
  );
}
