import React from 'react';

/**
 * PiLogInRightDuoStroke icon from the duo-stroke style in general category.
 */
interface PiLogInRightDuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiLogInRightDuoStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'log-in-right icon',
  ...props
}: PiLogInRightDuoStrokeProps): JSX.Element {
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
      <path d="M10.8115 9C9.82454 9.74024 8.93322 10.599 8.15739 11.5564C8.05246 11.6859 8 11.843 8 12M10.8115 15C9.82454 14.2598 8.93322 13.401 8.15739 12.4436C8.05246 12.3141 8 12.157 8 12M8 12H21" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M13 4.52779C11.9385 3.57771 10.5367 3 9 3C5.68629 3 3 5.68629 3 9V15C3 18.3137 5.68629 21 9 21C10.5367 21 11.9385 20.4223 13 19.4722" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
    </svg>
  );
}
