import React from 'react';

/**
 * PiGaugeRightDownContrast icon from the contrast style in chart-&-graph category.
 */
interface PiGaugeRightDownContrastProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiGaugeRightDownContrast({
  size = 24,
  color,
  className,
  ariaLabel = 'gauge-right-down icon',
  ...props
}: PiGaugeRightDownContrastProps): JSX.Element {
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
      <path fill="currentColor" d="M12 21.15a9.15 9.15 0 1 0 0-18.3 9.15 9.15 0 0 0 0 18.3" opacity=".28"/>
  <path d="M12 21.15a9.15 9.15 0 1 0 0-18.3 9.15 9.15 0 0 0 0 18.3"/>
  <path d="m15.535 15.536-4.108-2.803a.939.939 0 1 1 1.305-1.305z"/>
    </svg>
  );
}
