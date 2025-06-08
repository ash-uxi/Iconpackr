import React from 'react';

/**
 * PiTimerCheckStroke icon from the stroke style in time category.
 */
interface PiTimerCheckStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiTimerCheckStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'timer-check icon',
  ...props
}: PiTimerCheckStrokeProps): JSX.Element {
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
      <path d="M12 2V6M12 6C7.58172 6 4 9.58172 4 14C4 18.4183 7.58172 22 12 22C16.4183 22 20 18.4183 20 14C20 9.58172 16.4183 6 12 6ZM10 2H14M19.3662 5.32178L20.4269 6.38244M9 14.2853L11.0067 16.2899C11.9908 14.5691 13.3656 13.116 15 12" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
