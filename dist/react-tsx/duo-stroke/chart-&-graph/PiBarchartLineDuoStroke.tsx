import React from 'react';

/**
 * PiBarchartLineDuoStroke icon from the duo-stroke style in chart-&-graph category.
 */
interface PiBarchartLineDuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiBarchartLineDuoStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'barchart-line icon',
  ...props
}: PiBarchartLineDuoStrokeProps): JSX.Element {
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
      <path d="M12 20V4" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M6 20V14M18 20V10" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
    </svg>
  );
}
