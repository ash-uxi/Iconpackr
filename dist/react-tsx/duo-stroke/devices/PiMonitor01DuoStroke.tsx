import React from 'react';

/**
 * PiMonitor01DuoStroke icon from the duo-stroke style in devices category.
 */
interface PiMonitor01DuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiMonitor01DuoStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'monitor-01 icon',
  ...props
}: PiMonitor01DuoStrokeProps): JSX.Element {
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
      <path d="M17 22H12M12 22H7M12 22V17" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
  <path d="M2 4.4C2 3.55992 2 3.13988 2.16349 2.81901C2.3073 2.53677 2.53677 2.3073 2.81901 2.16349C3.13988 2 3.55992 2 4.4 2H19.6C20.4401 2 20.8601 2 21.181 2.16349C21.4632 2.3073 21.6927 2.53677 21.8365 2.81901C22 3.13988 22 3.55992 22 4.4V14.6C22 15.4401 22 15.8601 21.8365 16.181C21.6927 16.4632 21.4632 16.6927 21.181 16.8365C20.8601 17 20.4401 17 19.6 17H4.4C3.55992 17 3.13988 17 2.81901 16.8365C2.53677 16.6927 2.3073 16.4632 2.16349 16.181C2 15.8601 2 15.4401 2 14.6V4.4Z" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
    </svg>
  );
}
