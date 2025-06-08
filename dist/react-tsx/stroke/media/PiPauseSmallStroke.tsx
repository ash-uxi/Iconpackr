import React from 'react';

/**
 * PiPauseSmallStroke icon from the stroke style in media category.
 */
interface PiPauseSmallStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiPauseSmallStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'pause-small icon',
  ...props
}: PiPauseSmallStrokeProps): JSX.Element {
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
      <path d="M9.50098 9V15M14.4998 9V15" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
