import React from 'react';

/**
 * PiTimerCheckDuoStroke icon from the duo-stroke style in time category.
 */
interface PiTimerCheckDuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiTimerCheckDuoStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'timer-check icon',
  ...props
}: PiTimerCheckDuoStrokeProps): JSX.Element {
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
      <path d="M12 2V6M12 6C7.58172 6 4 9.58172 4 14C4 18.4183 7.58172 22 12 22C16.4183 22 20 18.4183 20 14C20 9.58172 16.4183 6 12 6ZM10 2H14" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
  <path d="M19.3662 5.32178L20.4269 6.38244M9 14.2852L11.0067 16.2898C11.9908 14.569 13.3656 13.1159 15 11.9999" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
    </svg>
  );
}
