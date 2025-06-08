import React from 'react';

/**
 * PiGraphBubblechartStroke icon from the stroke style in chart-&-graph category.
 */
interface PiGraphBubblechartStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiGraphBubblechartStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'graph-bubblechart icon',
  ...props
}: PiGraphBubblechartStrokeProps): JSX.Element {
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
      <path d="M21 21H7C4.79086 21 3 19.2091 3 17V3M19 5.01V5M11 10.01V10M10 16C10 16.5523 9.55228 17 9 17C8.44772 17 8 16.5523 8 16C8 15.4477 8.44772 15 9 15C9.55228 15 10 15.4477 10 16ZM19 11C19 11.5523 18.5523 12 18 12C17.4477 12 17 11.5523 17 11C17 10.4477 17.4477 10 18 10C18.5523 10 19 10.4477 19 11Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
