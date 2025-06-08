import React from 'react';

/**
 * PiGraphChartMinimumStroke icon from the stroke style in chart-&-graph category.
 */
interface PiGraphChartMinimumStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiGraphChartMinimumStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'graph-chart-minimum icon',
  ...props
}: PiGraphChartMinimumStrokeProps): JSX.Element {
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
      <path d="M21 21H7C4.79086 21 3 19.2091 3 17V3M8 17H8.01M11 17H11.01M17 17H17.01M20 17H20.01M13.99 17H14M7 5C7.82746 10.1832 10.6479 14 14 14C17.3521 14 20.1725 10.1832 21 5" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
