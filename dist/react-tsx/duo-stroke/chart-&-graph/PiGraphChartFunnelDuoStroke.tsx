import React from 'react';

/**
 * PiGraphChartFunnelDuoStroke icon from the duo-stroke style in chart-&-graph category.
 */
interface PiGraphChartFunnelDuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiGraphChartFunnelDuoStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'graph-chart-funnel icon',
  ...props
}: PiGraphChartFunnelDuoStrokeProps): JSX.Element {
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
      <rect x="1.5" y="4" width="20" height="1" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <rect x="10.5" y="19" width="2" height="1" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
  <rect x="4.5" y="9" width="14" height="1" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
  <rect x="7.5" y="14" width="8" height="1" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
    </svg>
  );
}
