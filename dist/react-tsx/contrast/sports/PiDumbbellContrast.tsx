import React from 'react';

/**
 * PiDumbbellContrast icon from the contrast style in sports category.
 */
interface PiDumbbellContrastProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiDumbbellContrast({
  size = 24,
  color,
  className,
  ariaLabel = 'dumbbell icon',
  ...props
}: PiDumbbellContrastProps): JSX.Element {
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
      <g fill="currentColor" opacity=".28">
    <path d="M7 5a2 2 0 0 1 2 2v8a2 2 0 1 1-4 0V7a2 2 0 0 1 2-2M17 5a2 2 0 0 1 2 2v8a2 2 0 1 1-4 0V7a2 2 0 0 1 2-2"/>
  </g>
  <path d="M9 11h6M5 9H4a2 2 0 1 0 0 4h1m14 0h1a2 2 0 1 0 0-4h-1m0 4V7a2 2 0 1 0-4 0v8a2 2 0 1 0 4 0zM7 17a2 2 0 0 0 2-2V7a2 2 0 1 0-4 0v8a2 2 0 0 0 2 2"/>
    </svg>
  );
}
