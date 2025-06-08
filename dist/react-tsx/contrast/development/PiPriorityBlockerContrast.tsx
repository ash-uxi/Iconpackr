import React from 'react';

/**
 * PiPriorityBlockerContrast icon from the contrast style in development category.
 */
interface PiPriorityBlockerContrastProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiPriorityBlockerContrast({
  size = 24,
  color,
  className,
  ariaLabel = 'priority-blocker icon',
  ...props
}: PiPriorityBlockerContrastProps): JSX.Element {
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
      <path fill="currentColor" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0" opacity=".28"/>
  <path d="m8.5 15.5 7-7M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0"/>
    </svg>
  );
}
