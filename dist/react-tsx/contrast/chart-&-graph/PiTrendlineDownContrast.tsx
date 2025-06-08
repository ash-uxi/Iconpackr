import React from 'react';

/**
 * PiTrendlineDownContrast icon from the contrast style in chart-&-graph category.
 */
interface PiTrendlineDownContrastProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiTrendlineDownContrast({
  size = 24,
  color,
  className,
  ariaLabel = 'trendline-down icon',
  ...props
}: PiTrendlineDownContrastProps): JSX.Element {
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
      <path d="m2 7.148.73.937a21.8 21.8 0 0 0 6.61 5.664c.316.176.715.08.916-.222l3.212-4.818a.64.64 0 0 1 .926-.15 20 20 0 0 1 4.848 5.45m0 0a24 24 0 0 0 1.605-1.029L22 12.174a17.3 17.3 0 0 1-1.123 4.38.476.476 0 0 1-.51.293 17.3 17.3 0 0 1-4.353-1.217l1.274-.595a24 24 0 0 0 1.954-1.025"/>
  <path fill="currentColor" d="M20.877 16.553A17.3 17.3 0 0 0 22 12.174l-1.152.806a23.7 23.7 0 0 1-3.56 2.055l-1.274.595a17.3 17.3 0 0 0 4.354 1.217c.217.031.427-.09.509-.294" opacity=".28"/>
    </svg>
  );
}
