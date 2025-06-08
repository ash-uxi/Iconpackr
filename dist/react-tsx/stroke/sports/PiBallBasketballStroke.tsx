import React from 'react';

/**
 * PiBallBasketballStroke icon from the stroke style in sports category.
 */
interface PiBallBasketballStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiBallBasketballStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'ball-basketball icon',
  ...props
}: PiBallBasketballStrokeProps): JSX.Element {
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
      <path d="M21.1496 12C21.1496 17.0534 17.053 21.15 11.9996 21.15M21.1496 12C21.1496 6.94657 17.053 2.84998 11.9996 2.84998M21.1496 12H2.84961M11.9996 21.15C6.9462 21.15 2.84961 17.0534 2.84961 12M11.9996 21.15V2.84998M2.84961 12C2.84961 6.94657 6.9462 2.84998 11.9996 2.84998M5.51836 5.5416C6.36587 6.38985 7.03781 7.39689 7.49574 8.50508C7.95367 9.61328 8.18861 10.8009 8.18711 12C8.18861 13.1991 7.95367 14.3867 7.49574 15.4949C7.03781 16.6031 6.36587 17.6101 5.51836 18.4583M18.4809 5.5416C16.772 7.2566 15.8125 9.57895 15.8125 12C15.8125 14.421 16.772 16.7433 18.4809 18.4583" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
