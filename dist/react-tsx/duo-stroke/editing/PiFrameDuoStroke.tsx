import React from 'react';

/**
 * PiFrameDuoStroke icon from the duo-stroke style in editing category.
 */
interface PiFrameDuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiFrameDuoStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'frame icon',
  ...props
}: PiFrameDuoStrokeProps): JSX.Element {
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
      <path d="M17 17V7H7V17L17 17Z" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M21 17H17V21M17 3V7H21M3 7L7 7V3M7 21V17H3" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
    </svg>
  );
}
