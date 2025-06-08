import React from 'react';

/**
 * PiTabletStroke icon from the stroke style in devices category.
 */
interface PiTabletStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiTabletStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'tablet icon',
  ...props
}: PiTabletStrokeProps): JSX.Element {
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
      <path d="M10 19H14M9.4 22H14.6C16.8402 22 17.9603 22 18.816 21.564C19.5686 21.1805 20.1805 20.5686 20.564 19.816C21 18.9603 21 17.8402 21 15.6V8.4C21 6.15979 21 5.03968 20.564 4.18404C20.1805 3.43139 19.5686 2.81947 18.816 2.43597C17.9603 2 16.8402 2 14.6 2H9.4C7.15979 2 6.03968 2 5.18404 2.43597C4.43139 2.81947 3.81947 3.43139 3.43597 4.18404C3 5.03968 3 6.15979 3 8.4V15.6C3 17.8402 3 18.9603 3.43597 19.816C3.81947 20.5686 4.43139 21.1805 5.18404 21.564C6.03968 22 7.15979 22 9.4 22Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
