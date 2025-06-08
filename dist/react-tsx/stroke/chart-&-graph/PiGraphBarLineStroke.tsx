import React from 'react';

/**
 * PiGraphBarLineStroke icon from the stroke style in chart-&-graph category.
 */
interface PiGraphBarLineStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiGraphBarLineStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'graph-bar-line icon',
  ...props
}: PiGraphBarLineStrokeProps): JSX.Element {
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
      <path d="M21 21H7C4.79086 21 3 19.2091 3 17V3M8 17V13M13 17V6M18 17V9" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
