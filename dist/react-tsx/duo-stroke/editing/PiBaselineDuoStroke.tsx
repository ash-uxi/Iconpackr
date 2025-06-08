import React from 'react';

/**
 * PiBaselineDuoStroke icon from the duo-stroke style in editing category.
 */
interface PiBaselineDuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiBaselineDuoStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'baseline icon',
  ...props
}: PiBaselineDuoStrokeProps): JSX.Element {
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
      <path d="M17 20L7 20" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
  <path d="M6 16L8.98243 7.54967C9.90866 4.92532 10.3718 3.61315 11.0542 3.24688C11.6449 2.92983 12.3551 2.92983 12.9458 3.24688C13.6282 3.61315 14.0913 4.92532 15.0176 7.54967L18 16M8 11H16" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
    </svg>
  );
}
