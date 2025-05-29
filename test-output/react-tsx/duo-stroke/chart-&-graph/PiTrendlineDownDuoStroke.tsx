import React from 'react';

/**
 * PiTrendlineDownDuoStroke icon from the duo-stroke style in chart-&-graph category.
 */
interface PiTrendlineDownDuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
}

export default function PiTrendlineDownDuoStroke({
  size = 24,
  color,
  className,
  ...props
}: PiTrendlineDownDuoStrokeProps): JSX.Element {
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
