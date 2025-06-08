import React from 'react';

/**
 * PiSolidjsStroke icon from the stroke style in development category.
 */
interface PiSolidjsStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiSolidjsStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'solidjs icon',
  ...props
}: PiSolidjsStrokeProps): JSX.Element {
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
      <path d="M20.7407 8.26146L9.08193 11.3854C2.81973 13.0634 2.25041 4.94227 8.52877 3.25493C13.496 2.06323 17.3764 5.27233 20.7407 8.26146Z" stroke="currentColor" strokeWidth="2" fill="none"/>
  <path d="M4 15.9632L15.6587 12.8393C21.9209 11.1613 22.4903 19.2824 16.2119 20.9698C11.2446 22.1615 7.36426 18.9524 4 15.9632Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
