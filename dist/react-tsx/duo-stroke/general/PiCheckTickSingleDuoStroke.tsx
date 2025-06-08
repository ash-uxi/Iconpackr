import React from 'react';

/**
 * PiCheckTickSingleDuoStroke icon from the duo-stroke style in general category.
 */
interface PiCheckTickSingleDuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiCheckTickSingleDuoStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'check-tick-single icon',
  ...props
}: PiCheckTickSingleDuoStrokeProps): JSX.Element {
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
      <path d="M5.5 12.5L10.0168 17.7247" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M5.5 12.5L10.0168 17.7247L10.4177 17.0238C12.5668 13.2658 15.541 10.0448 19.1161 7.60354L20 7" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
    </svg>
  );
}
