import React from 'react';

/**
 * PiGridDashboardCircleContrast icon from the contrast style in general category.
 */
interface PiGridDashboardCircleContrastProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiGridDashboardCircleContrast({
  size = 24,
  color,
  className,
  ariaLabel = 'grid-dashboard-circle icon',
  ...props
}: PiGridDashboardCircleContrastProps): JSX.Element {
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
      <g fill="currentColor" opacity=".28">
    <path d="M3 6.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0M3 17.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0M14 6.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0M14 17.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"/>
  </g>
  <path d="M14 17.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0M14 6.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0M3 17.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0M3 6.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"/>
    </svg>
  );
}
