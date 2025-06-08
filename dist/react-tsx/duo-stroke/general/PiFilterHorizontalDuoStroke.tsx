import React from 'react';

/**
 * PiFilterHorizontalDuoStroke icon from the duo-stroke style in general category.
 */
interface PiFilterHorizontalDuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiFilterHorizontalDuoStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'filter-horizontal icon',
  ...props
}: PiFilterHorizontalDuoStrokeProps): JSX.Element {
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
      <path d="M10 7C10 5.34315 11.3431 4 13 4H14C15.6569 4 17 5.34315 17 7C17 8.65685 15.6569 10 14 10H13C11.3431 10 10 8.65685 10 7Z" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M3 7H10M16 17H21M20 7H21M3 17H6" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
  <path d="M6 17C6 15.3431 7.34315 14 9 14H10C11.6569 14 13 15.3431 13 17C13 18.6569 11.6569 20 10 20H9C7.34315 20 6 18.6569 6 17Z" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
    </svg>
  );
}
