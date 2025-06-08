import React from 'react';

/**
 * PiSwapHalfarrowHorizontalStroke icon from the stroke style in arrows-&-chevrons category.
 */
interface PiSwapHalfarrowHorizontalStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiSwapHalfarrowHorizontalStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'swap-halfarrow-horizontal icon',
  ...props
}: PiSwapHalfarrowHorizontalStrokeProps): JSX.Element {
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
      <path d="M6.88693 18C5.48467 16.963 4.22522 15.7515 3.13968 14.3962C3.04656 14.28 3 14.14 3 14H18M17.1131 6C18.5153 7.03704 19.7748 8.24852 20.8603 9.60379C20.9534 9.72005 21 9.86002 21 10H6" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
