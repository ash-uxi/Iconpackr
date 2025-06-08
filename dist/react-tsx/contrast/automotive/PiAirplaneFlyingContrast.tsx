import React from 'react';

/**
 * PiAirplaneFlyingContrast icon from the contrast style in automotive category.
 */
interface PiAirplaneFlyingContrastProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiAirplaneFlyingContrast({
  size = 24,
  color,
  className,
  ariaLabel = 'airplane-flying icon',
  ...props
}: PiAirplaneFlyingContrastProps): JSX.Element {
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
      <path d="M3 20h18M6.162 16H20a1 1 0 0 0 1-1 3 3 0 0 0-3-3h-3L8.896 5.025A3 3 0 0 0 6.64 4H6l3 8H6l-2.748-1.832A1 1 0 0 0 2.697 10H2l1.316 3.949A3 3 0 0 0 6.162 16"/>
  <path fill="currentColor" d="M6.162 16H20a1 1 0 0 0 1-1 3 3 0 0 0-3-3h-3L8.896 5.025A3 3 0 0 0 6.64 4H6l3 8H6l-2.748-1.832A1 1 0 0 0 2.697 10H2l1.316 3.949A3 3 0 0 0 6.162 16" opacity=".28"/>
    </svg>
  );
}
