import React from 'react';

/**
 * PiBubbleChartContrast icon from the contrast style in chart-&-graph category.
 */
interface PiBubbleChartContrastProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
}

export default function PiBubbleChartContrast({
  size = 24,
  color,
  className,
  ...props
}: PiBubbleChartContrastProps): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style={{color: color || "currentColor"}}
      
      {...props}
    >
      
    </svg>
  );
}
