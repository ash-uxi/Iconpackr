import React from 'react';

/**
 * PiGraphChartCombinationChartDuoStroke icon from the duo-stroke style in chart-&-graph category.
 */
interface PiGraphChartCombinationChartDuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiGraphChartCombinationChartDuoStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'graph-chart-combination-chart icon',
  ...props
}: PiGraphChartCombinationChartDuoStrokeProps): JSX.Element {
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
      <path d="M3.5 10L8.83337 4.5L14.1667 10L19.5 4.5" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M3.5 20V15M8.83333 20V11M14.1667 20V15M19.5 20V11" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
    </svg>
  );
}
