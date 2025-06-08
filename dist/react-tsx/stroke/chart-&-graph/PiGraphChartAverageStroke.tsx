import React from 'react';

/**
 * PiGraphChartAverageStroke icon from the stroke style in chart-&-graph category.
 */
interface PiGraphChartAverageStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiGraphChartAverageStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'graph-chart-average icon',
  ...props
}: PiGraphChartAverageStrokeProps): JSX.Element {
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
      <path d="M21 21H7C4.79086 21 3 19.2091 3 17V3M7 7L7.22319 6.72367C8.61414 5.00154 11.3274 5.32747 12.2709 7.33003L15.7291 14.67C16.6726 16.6725 19.3859 16.9985 20.7768 15.2763L21 15M6 11H6.01M10 11H10.01M18 11H18.01M22 11H22.01" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
