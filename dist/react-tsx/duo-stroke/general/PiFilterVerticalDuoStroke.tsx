import React from 'react';

/**
 * PiFilterVerticalDuoStroke icon from the duo-stroke style in general category.
 */
interface PiFilterVerticalDuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiFilterVerticalDuoStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'filter-vertical icon',
  ...props
}: PiFilterVerticalDuoStrokeProps): JSX.Element {
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
      <path d="M17 10C18.6569 10 20 11.3431 20 13V14C20 15.6569 18.6569 17 17 17C15.3431 17 14 15.6569 14 14V13C14 11.3431 15.3431 10 17 10Z" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M17 3V10M17 20V21M7 3V6M7 16V21" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
  <path d="M7 6C8.65685 6 10 7.34315 10 9V10C10 11.6569 8.65685 13 7 13C5.34315 13 4 11.6569 4 10L4 9C4 7.34315 5.34315 6 7 6Z" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
    </svg>
  );
}
