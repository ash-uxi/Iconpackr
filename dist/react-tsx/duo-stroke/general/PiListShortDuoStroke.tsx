import React from 'react';

/**
 * PiListShortDuoStroke icon from the duo-stroke style in general category.
 */
interface PiListShortDuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiListShortDuoStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'list-short icon',
  ...props
}: PiListShortDuoStrokeProps): JSX.Element {
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
      <path d="M4 14H12" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M4 9H20" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
    </svg>
  );
}
