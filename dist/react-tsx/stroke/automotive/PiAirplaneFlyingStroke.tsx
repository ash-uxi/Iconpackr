import React from 'react';

/**
 * PiAirplaneFlyingStroke icon from the stroke style in automotive category.
 */
interface PiAirplaneFlyingStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiAirplaneFlyingStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'airplane-flying icon',
  ...props
}: PiAirplaneFlyingStrokeProps): JSX.Element {
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
      <path d="M3 20H21M6.162 16H20C20.2652 16 20.5196 15.8946 20.7071 15.7071C20.8946 15.5196 21 15.2652 21 15C21 14.2044 20.6839 13.4413 20.1213 12.8787C19.5587 12.3161 18.7956 12 18 12H15L8.896 5.025C8.61466 4.70332 8.26785 4.44547 7.87877 4.26869C7.4897 4.09192 7.06735 4.00031 6.64 4H6L9 12H6L3.252 10.168C3.08765 10.0584 2.89453 9.99996 2.697 10H2L3.316 13.949C3.51516 14.5463 3.89719 15.0657 4.40797 15.4338C4.91875 15.8019 5.5324 16 6.162 16Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
