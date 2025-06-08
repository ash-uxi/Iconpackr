import React from 'react';

/**
 * PiPriorityBlockerDuoStroke icon from the duo-stroke style in development category.
 */
interface PiPriorityBlockerDuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiPriorityBlockerDuoStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'priority-blocker icon',
  ...props
}: PiPriorityBlockerDuoStrokeProps): JSX.Element {
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
      <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
  <path d="M8.5 15.5L15.5 8.5" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
    </svg>
  );
}
