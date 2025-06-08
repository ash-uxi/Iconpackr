import React from 'react';

/**
 * PiGraphChartMedianDuoStroke icon from the duo-stroke style in chart-&-graph category.
 */
interface PiGraphChartMedianDuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiGraphChartMedianDuoStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'graph-chart-median icon',
  ...props
}: PiGraphChartMedianDuoStrokeProps): JSX.Element {
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
  <path d="M7 7.00009L7.22319 6.72376C8.61414 5.00163 11.3274 5.32756 12.2709 7.33012L15.7291 14.6701C16.6726 16.6726 19.3859 16.9986 20.7768 15.2764L21 15.0001M14 14V14.01M14 17V17.01M14 5V5.01M14 8V8.01" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
    </svg>
  );
}
