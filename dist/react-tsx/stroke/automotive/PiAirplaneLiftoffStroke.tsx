import React from 'react';

/**
 * PiAirplaneLiftoffStroke icon from the stroke style in automotive category.
 */
interface PiAirplaneLiftoffStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiAirplaneLiftoffStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'airplane-liftoff icon',
  ...props
}: PiAirplaneLiftoffStrokeProps): JSX.Element {
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
      <path d="M3 20H21" stroke="currentColor" strokeWidth="2" fill="none"/>
  <path d="M7.57237 15.5164L20.9388 11.9349C21.195 11.8663 21.4134 11.6987 21.5461 11.469C21.6787 11.2393 21.7146 10.9663 21.646 10.7102C21.44 9.94161 20.9372 9.28636 20.2482 8.88853C19.5591 8.49071 18.7403 8.3829 17.9717 8.58883L15.0739 9.36529L7.37267 4.20779C7.01766 3.96989 6.61592 3.81058 6.19435 3.74053C5.77279 3.67048 5.34112 3.6913 4.92825 3.80161L4.31006 3.96725L9.27839 10.9182L6.38061 11.6947L3.25209 10.6363C3.06498 10.573 2.86331 10.5665 2.67252 10.6177L1.99927 10.7981L4.2925 14.2719C4.63946 14.7973 5.14292 15.2002 5.73157 15.4235C6.32022 15.6469 6.96422 15.6794 7.57237 15.5164Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
