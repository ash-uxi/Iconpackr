import React from 'react';

/**
 * PiGraphBarLineHorizontalDuoStroke icon from the duo-stroke style in chart-&-graph category.
 */
interface PiGraphBarLineHorizontalDuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiGraphBarLineHorizontalDuoStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'graph-bar-line-horizontal icon',
  ...props
}: PiGraphBarLineHorizontalDuoStrokeProps): JSX.Element {
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
      <path d="M21 21H7C4.79086 21 3 19.2091 3 17V3" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
  <path d="M7 7L11 7M7 12L18 12M7 17L15 17" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
    </svg>
  );
}
