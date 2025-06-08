import React from 'react';

/**
 * PiTrendlineUpContrast icon from the contrast style in chart-&-graph category.
 */
interface PiTrendlineUpContrastProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiTrendlineUpContrast({
  size = 24,
  color,
  className,
  ariaLabel = 'trendline-up icon',
  ...props
}: PiTrendlineUpContrastProps): JSX.Element {
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
      <path d="m2 16.852.73-.938a21.8 21.8 0 0 1 6.61-5.663.696.696 0 0 1 .916.222l3.212 4.818a.64.64 0 0 0 .926.15 20 20 0 0 0 4.848-5.451m0 0q.823.482 1.605 1.03l1.153.806a17.3 17.3 0 0 0-1.123-4.38.476.476 0 0 0-.51-.293 17.3 17.3 0 0 0-4.353 1.217l1.274.595q1.001.467 1.954 1.025"/>
  <path fill="currentColor" d="M20.877 7.446A17.3 17.3 0 0 1 22 11.826l-1.152-.807a23.7 23.7 0 0 0-3.56-2.055l-1.274-.595a17.3 17.3 0 0 1 4.354-1.217c.217-.03.427.09.509.294" opacity=".28"/>
    </svg>
  );
}
