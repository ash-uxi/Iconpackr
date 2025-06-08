import React from 'react';

/**
 * PiKpiDefaultContrast icon from the contrast style in chart-&-graph category.
 */
interface PiKpiDefaultContrastProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiKpiDefaultContrast({
  size = 24,
  color,
  className,
  ariaLabel = 'kpi-default icon',
  ...props
}: PiKpiDefaultContrastProps): JSX.Element {
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
      <path d="M12 13.393V8.75h1a2 2 0 0 1 2 2v.643a2 2 0 0 1-2 2zm0 0v1.857m6-6.5v6.5m-12-3.5v-3m0 3v3.5m0-3.5 3-3m-3 3 3 3.5"/>
  <path fill="currentColor" d="M14.6 4.47H9.4c-2.24 0-3.36 0-4.216.437a4 4 0 0 0-1.748 1.748C3 7.51 3 8.63 3 10.87v3.2c0 2.24 0 3.36.436 4.216a4 4 0 0 0 1.748 1.748c.856.436 1.976.436 4.216.436h5.2c2.24 0 3.36 0 4.216-.436a4 4 0 0 0 1.748-1.748C21 17.43 21 16.31 21 14.07v-3.2c0-2.24 0-3.36-.436-4.216a4 4 0 0 0-1.748-1.748C17.96 4.47 16.84 4.47 14.6 4.47" opacity=".28"/>
  <path d="M14.6 4H9.4c-2.24 0-3.36 0-4.216.436a4 4 0 0 0-1.748 1.748C3 7.04 3 8.16 3 10.4v3.2c0 2.24 0 3.36.436 4.216a4 4 0 0 0 1.748 1.748C6.04 20 7.16 20 9.4 20h5.2c2.24 0 3.36 0 4.216-.436a4 4 0 0 0 1.748-1.748C21 16.96 21 15.84 21 13.6v-3.2c0-2.24 0-3.36-.436-4.216a4 4 0 0 0-1.748-1.748C17.96 4 16.84 4 14.6 4"/>
    </svg>
  );
}
