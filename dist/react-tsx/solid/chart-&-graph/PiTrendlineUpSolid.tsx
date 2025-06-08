import React from 'react';

/**
 * PiTrendlineUpSolid icon from the solid style in chart-&-graph category.
 */
interface PiTrendlineUpSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiTrendlineUpSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'trendline-up icon',
  ...props
}: PiTrendlineUpSolidProps): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      
       style={{color: color || "currentColor"}}
      
      role="img"
      aria-label={ariaLabel}
      {...props}
    >
      <path d="M2.7894 17.4659C2.45033 17.9019 1.82205 17.9804 1.38611 17.6414C0.950158 17.3023 0.871624 16.674 1.21069 16.2381L1.93987 15.3005C3.82206 12.8806 6.17367 10.8657 8.85362 9.37688C9.62581 8.94789 10.598 9.18358 11.088 9.91857L14.0832 14.4114C15.5251 13.2422 16.7843 11.8718 17.8244 10.3465C17.5085 10.1805 17.1887 10.0218 16.8651 9.87075L15.5906 9.27576C15.2332 9.1089 15.0072 8.74751 15.0138 8.3531C15.0203 7.9587 15.258 7.60498 15.6208 7.45003C17.0937 6.82087 18.6424 6.38822 20.2269 6.16277C20.9 6.06701 21.551 6.44288 21.8046 7.07362C22.4016 8.55862 22.8013 10.1161 22.9929 11.7063C23.04 12.0979 22.8526 12.4807 22.5143 12.6835C22.176 12.8864 21.75 12.8714 21.4268 12.6453L20.2743 11.8391C20.0378 11.6736 19.7983 11.5128 19.5558 11.3566C18.3125 13.2064 16.7792 14.8532 15.0083 16.2305C14.2557 16.8159 13.1644 16.6388 12.6356 15.8455L9.58062 11.2631C7.23739 12.6066 5.17798 14.3949 3.51857 16.5284L2.7894 17.4659Z" fill="currentColor" stroke="none"/>
    </svg>
  );
}
