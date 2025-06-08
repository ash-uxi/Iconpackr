import React from 'react';

/**
 * PiArrowRightUpDuoStroke icon from the duo-stroke style in arrows-&-chevrons category.
 */
interface PiArrowRightUpDuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiArrowRightUpDuoStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'arrow-right-up icon',
  ...props
}: PiArrowRightUpDuoStrokeProps): JSX.Element {
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
      <path d="M18.1369 5.86328L5.40894 18.5912" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
  <path d="M18.2568 14.2283C18.6441 11.6411 18.695 9.02026 18.4089 6.43139C18.3844 6.20931 18.2853 6.01146 18.1368 5.86299C17.9884 5.71452 17.7905 5.61544 17.5684 5.5909C14.9796 5.30481 12.3588 5.35568 9.77148 5.74306" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
    </svg>
  );
}
