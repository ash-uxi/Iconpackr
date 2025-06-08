import React from 'react';

/**
 * PiTimerOffDuoStroke icon from the duo-stroke style in time category.
 */
interface PiTimerOffDuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiTimerOffDuoStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'timer-off icon',
  ...props
}: PiTimerOffDuoStrokeProps): JSX.Element {
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
      <path d="M12 2V6M12 2H10M12 2H14M12 6C7.58172 6 4 9.58172 4 14C4 15.6983 4.52921 17.2731 5.43173 18.5683M12 6C13.6983 6 15.2731 6.52921 16.5683 7.43173M19.1819 10.4717C19.7058 11.536 20 12.7336 20 14C20 18.4183 16.4183 22 12 22C10.7336 22 9.53596 21.7057 8.47167 21.1819" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
  <path d="M22 2L2 22" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
    </svg>
  );
}
