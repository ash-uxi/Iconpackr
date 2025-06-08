import React from 'react';

/**
 * PiPiechart01DuoStroke icon from the duo-stroke style in chart-&-graph category.
 */
interface PiPiechart01DuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiPiechart01DuoStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'piechart-01 icon',
  ...props
}: PiPiechart01DuoStrokeProps): JSX.Element {
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
      <path d="M12.0437 10.5997V4.26916C12.0437 3.51996 12.6546 2.90191 13.3955 3.01296C17.308 3.59937 20.4006 6.692 20.987 10.6045C21.0981 11.3454 20.48 11.9563 19.7308 11.9563H13.4003C12.6511 11.9563 12.0437 11.349 12.0437 10.5997Z" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M20.3349 15.5738C18.9393 18.7679 15.7522 21 12.0437 21C7.049 21 3 16.951 3 11.9563C3 8.24785 5.23216 5.06071 8.42622 3.66516" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
    </svg>
  );
}
