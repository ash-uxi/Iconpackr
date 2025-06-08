import React from 'react';

/**
 * PiSwapArrowHorizontalStroke icon from the stroke style in arrows-&-chevrons category.
 */
interface PiSwapArrowHorizontalStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiSwapArrowHorizontalStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'swap-arrow-horizontal icon',
  ...props
}: PiSwapArrowHorizontalStrokeProps): JSX.Element {
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
      <path d="M6.88693 12C5.48467 13.037 4.22522 14.2485 3.13968 15.6038C3.04656 15.72 3 15.86 3 16M6.88693 20C5.48467 18.963 4.22522 17.7515 3.13968 16.3962C3.04656 16.28 3 16.14 3 16M3 16H17M17.1131 4C18.5153 5.03704 19.7748 6.24852 20.8603 7.60379C20.9534 7.72005 21 7.86002 21 8M17.1131 12C18.5153 10.963 19.7748 9.75148 20.8603 8.39621C20.9534 8.27995 21 8.13998 21 8M21 8H7" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
