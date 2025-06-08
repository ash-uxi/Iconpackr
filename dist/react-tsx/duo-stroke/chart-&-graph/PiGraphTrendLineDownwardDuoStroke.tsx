import React from 'react';

/**
 * PiGraphTrendLineDownwardDuoStroke icon from the duo-stroke style in chart-&-graph category.
 */
interface PiGraphTrendLineDownwardDuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiGraphTrendLineDownwardDuoStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'graph-trend-line-downward icon',
  ...props
}: PiGraphTrendLineDownwardDuoStrokeProps): JSX.Element {
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
  <path d="M7 9.604L7.61026 11.4348C8.35529 13.6699 11.5295 13.633 12.2224 11.3812C12.8649 9.29297 15.7261 9.05617 16.7032 11.0103L19.166 15.9361M19.166 15.9361C19.2863 15.8757 19.3865 15.7751 19.4454 15.645C19.8807 14.6826 20.196 13.6696 20.3837 12.6289M19.166 15.9361C19.0457 15.9964 18.9052 16.0166 18.7657 15.986C17.734 15.7596 16.7335 15.4068 15.787 14.9352" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
    </svg>
  );
}
