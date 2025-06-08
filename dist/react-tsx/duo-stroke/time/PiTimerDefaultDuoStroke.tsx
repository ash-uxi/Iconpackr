import React from 'react';

/**
 * PiTimerDefaultDuoStroke icon from the duo-stroke style in time category.
 */
interface PiTimerDefaultDuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiTimerDefaultDuoStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'timer-default icon',
  ...props
}: PiTimerDefaultDuoStrokeProps): JSX.Element {
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
  <path d="M19.3662 5.32178L20.4269 6.38244M14.6517 11.0983L11.8232 13.9267" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
    </svg>
  );
}
