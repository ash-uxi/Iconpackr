import React from 'react';

/**
 * PiAirplaneFlyingSolid icon from the solid style in automotive category.
 */
interface PiAirplaneFlyingSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiAirplaneFlyingSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'airplane-flying icon',
  ...props
}: PiAirplaneFlyingSolidProps): JSX.Element {
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
      <path d="M5.17802 3.43C5.27011 3.29726 5.39299 3.1888 5.53614 3.11392C5.6793 3.03903 5.83846 2.99994 6.00002 3H6.63902C7.2091 3.00005 7.77259 3.12195 8.29172 3.35754C8.81085 3.59313 9.27362 3.93697 9.64902 4.366L15.454 11H18C19.0609 11 20.0783 11.4214 20.8284 12.1716C21.5786 12.9217 22 13.9391 22 15C22 15.5304 21.7893 16.0391 21.4142 16.4142C21.0392 16.7893 20.5305 17 20 17H6.16202C5.32263 16.9999 4.50455 16.7356 3.82364 16.2448C3.14272 15.7539 2.63348 15.0613 2.36802 14.265L1.05002 10.316C0.999923 10.1656 0.986305 10.0054 1.01029 9.84871C1.03428 9.69199 1.09518 9.54323 1.18797 9.41469C1.28076 9.28615 1.40279 9.18151 1.54398 9.1094C1.68517 9.0373 1.84148 8.9998 2.00002 9H2.69702C3.09209 8.99991 3.47833 9.11683 3.80702 9.336L6.30302 11H7.55702L5.06402 4.351C5.00735 4.19984 4.98812 4.0372 5.00797 3.87699C5.02782 3.71678 5.08617 3.56276 5.17802 3.43ZM3.00002 19C2.7348 19 2.48045 19.1054 2.29291 19.2929C2.10538 19.4804 2.00002 19.7348 2.00002 20C2.00002 20.2652 2.10538 20.5196 2.29291 20.7071C2.48045 20.8946 2.7348 21 3.00002 21H21C21.2652 21 21.5196 20.8946 21.7071 20.7071C21.8947 20.5196 22 20.2652 22 20C22 19.7348 21.8947 19.4804 21.7071 19.2929C21.5196 19.1054 21.2652 19 21 19H3.00002Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" stroke="none"/>
    </svg>
  );
}
