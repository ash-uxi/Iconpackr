import React from 'react';

/**
 * PiPauseBigStroke icon from the stroke style in media category.
 */
interface PiPauseBigStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiPauseBigStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'pause-big icon',
  ...props
}: PiPauseBigStrokeProps): JSX.Element {
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
      <path d="M9 6V18M15 6V18" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
