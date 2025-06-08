import React from 'react';

/**
 * PiPollDuoStroke icon from the duo-stroke style in general category.
 */
interface PiPollDuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiPollDuoStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'poll icon',
  ...props
}: PiPollDuoStrokeProps): JSX.Element {
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
      <path d="M13 17H21M9 17C9 18.6569 7.65685 20 6 20C4.34315 20 3 18.6569 3 17C3 15.3431 4.34315 14 6 14C7.65685 14 9 15.3431 9 17Z" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
  <path d="M13 7H21M6 7H6.01M9 7C9 8.65685 7.65685 10 6 10C4.34315 10 3 8.65685 3 7C3 5.34315 4.34315 4 6 4C7.65685 4 9 5.34315 9 7Z" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
    </svg>
  );
}
