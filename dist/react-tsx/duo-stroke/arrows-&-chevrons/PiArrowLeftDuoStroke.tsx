import React from 'react';

/**
 * PiArrowLeftDuoStroke icon from the duo-stroke style in arrows-&-chevrons category.
 */
interface PiArrowLeftDuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiArrowLeftDuoStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'arrow-left icon',
  ...props
}: PiArrowLeftDuoStrokeProps): JSX.Element {
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
      <path d="M4 12H20" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
  <path d="M9.8304 6C7.727 7.55556 5.83783 9.37278 4.20952 11.4057C4.06984 11.5801 4 11.79 4 12C4 12.21 4.06984 12.4199 4.20952 12.5943C5.83783 14.6272 7.727 16.4444 9.8304 18" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
    </svg>
  );
}
