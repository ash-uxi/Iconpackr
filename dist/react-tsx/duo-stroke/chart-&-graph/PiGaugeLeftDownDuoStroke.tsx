import React from 'react';

/**
 * PiGaugeLeftDownDuoStroke icon from the duo-stroke style in chart-&-graph category.
 */
interface PiGaugeLeftDownDuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiGaugeLeftDownDuoStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'gauge-left-down icon',
  ...props
}: PiGaugeLeftDownDuoStrokeProps): JSX.Element {
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
      <path d="M12.0001 21.1501C17.0535 21.1501 21.1501 17.0535 21.1501 12.0001C21.1501 6.94669 17.0535 2.8501 12.0001 2.8501C6.94669 2.8501 2.8501 6.94669 2.8501 12.0001C2.8501 17.0535 6.94669 21.1501 12.0001 21.1501Z" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
  <path d="M8.46436 15.5358L11.2675 11.4278C11.5991 10.9418 12.2909 10.8771 12.707 11.2931C13.1231 11.7092 13.0583 12.401 12.5723 12.7326L8.46436 15.5358Z" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
    </svg>
  );
}
