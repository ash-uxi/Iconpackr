import React from 'react';

/**
 * PiQueueStroke icon from the stroke style in general category.
 */
interface PiQueueStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiQueueStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'queue icon',
  ...props
}: PiQueueStrokeProps): JSX.Element {
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
      <path d="M3 15H21M3 20H21M6 10H18C19.6569 10 21 8.65685 21 7C21 5.34315 19.6569 4 18 4H6C4.34315 4 3 5.34315 3 7C3 8.65685 4.34315 10 6 10Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
