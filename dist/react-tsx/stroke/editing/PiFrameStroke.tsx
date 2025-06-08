import React from 'react';

/**
 * PiFrameStroke icon from the stroke style in editing category.
 */
interface PiFrameStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiFrameStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'frame icon',
  ...props
}: PiFrameStrokeProps): JSX.Element {
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
      <path d="M7 3V7M7 7V17M7 7L17 7M7 7L3 7M7 17V21M7 17L17 17M7 17H3M21 7L17 7M17 7V3M17 7V17M17 17V21M17 17H21" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
