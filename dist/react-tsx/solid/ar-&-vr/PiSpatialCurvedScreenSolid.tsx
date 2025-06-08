import React from 'react';

/**
 * PiSpatialCurvedScreenSolid icon from the solid style in ar-&-vr category.
 */
interface PiSpatialCurvedScreenSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiSpatialCurvedScreenSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'spatial-curved-screen icon',
  ...props
}: PiSpatialCurvedScreenSolidProps): JSX.Element {
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
      <path d="M11 19.9964C10.4477 19.9964 10 20.4441 10 20.9964C10 21.5487 10.4477 21.9964 11 21.9964H16C16.5523 21.9964 17 21.5487 17 20.9964C17 20.4441 16.5523 19.9964 16 19.9964H11Z" fill="currentColor" stroke="none"/>
  <path d="M22.9987 4.26697C22.9517 2.9889 21.7337 2.0827 20.4961 2.40496C20.4595 2.41447 20.4189 2.42667 20.3848 2.43693L20.3745 2.44001C20.0467 2.53835 19.8903 2.58527 19.7368 2.62939C14.6813 4.08288 9.31867 4.08288 4.26319 2.62939C4.10974 2.58527 3.95327 2.53835 3.62549 2.44001L3.61524 2.43693C3.58108 2.42667 3.54047 2.41447 3.50396 2.40496C2.26629 2.0827 1.04833 2.9889 1.00136 4.26697C0.99997 4.30468 0.999988 4.34708 1 4.38276V16.61C0.999988 16.6457 0.99997 16.6881 1.00136 16.7258C1.04833 18.0039 2.26629 18.9101 3.50396 18.5878C3.54046 18.5783 3.58106 18.5661 3.61522 18.5559L3.62549 18.5528C3.95328 18.4544 4.10974 18.4075 4.26319 18.3634C9.31867 16.9099 14.6813 16.9099 19.7368 18.3634C19.8903 18.4075 20.0467 18.4544 20.3745 18.5528L20.3848 18.5559C20.419 18.5661 20.4596 18.5783 20.4961 18.5878C21.7337 18.9101 22.9517 18.0039 22.9987 16.7258C23 16.6881 23 16.6457 23 16.61V4.38278C23 4.34709 23 4.30468 22.9987 4.26697Z" fill="currentColor" stroke="none"/>
  <path d="M8.00001 19.9964C7.44772 19.9964 7.00001 20.4441 7.00001 20.9964C7.00001 21.5487 7.44772 21.9964 8.00001 21.9964H8.01001C8.56229 21.9964 9.01001 21.5487 9.01001 20.9964C9.01001 20.4441 8.56229 19.9964 8.01001 19.9964H8.00001Z" fill="currentColor" stroke="none"/>
    </svg>
  );
}
