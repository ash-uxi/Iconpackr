import React from 'react';

/**
 * PiFilterVerticalStroke icon from the stroke style in general category.
 */
interface PiFilterVerticalStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiFilterVerticalStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'filter-vertical icon',
  ...props
}: PiFilterVerticalStrokeProps): JSX.Element {
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
      <path d="M17 3V10M17 10C15.3431 10 14 11.3431 14 13V14C14 15.6569 15.3431 17 17 17C18.6569 17 20 15.6569 20 14V13C20 11.3431 18.6569 10 17 10ZM7 16L7 21M17 20V21M7 3L7 6M7 6C5.34315 6 4 7.34315 4 9L4 10C4 11.6569 5.34315 13 7 13C8.65685 13 10 11.6569 10 10V9C10 7.34315 8.65685 6 7 6Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
