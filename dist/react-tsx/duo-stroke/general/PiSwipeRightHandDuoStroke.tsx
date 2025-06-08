import React from 'react';

/**
 * PiSwipeRightHandDuoStroke icon from the duo-stroke style in general category.
 */
interface PiSwipeRightHandDuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiSwipeRightHandDuoStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'swipe-right-hand icon',
  ...props
}: PiSwipeRightHandDuoStrokeProps): JSX.Element {
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
      <path d="M7.41547 2C8.20521 2.36981 8.94217 2.83923 9.6081 3.3963C9.66523 3.44409 9.70187 3.5081 9.7157 3.57671L9.7164 3.58032M8.20558 5.92119C8.79047 5.27439 9.28814 4.5562 9.68637 3.78471C9.71993 3.71969 9.7292 3.64788 9.7164 3.58032M9.7164 3.58032L9.7402 3.57671M9.7164 3.58032C6.77654 4.02937 4.11748 5.33188 2 7.22707" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
  <path d="M7.71577 17.5737L5.58374 10.0857C5.45453 9.63195 5.74903 9.16676 6.21448 9.08943C7.64592 8.85151 9.05551 9.61844 9.63343 10.9494L10.4861 12.9131L13.4316 3.35673C13.757 2.30117 14.8764 1.70922 15.932 2.03458C16.9876 2.35994 17.5795 3.47939 17.2541 4.53496L15.4868 10.2688L19.8457 12.4509C23.0417 14.051 22.0077 17.9093 20.228 20.2132C17.0933 24.2709 9.10063 22.4377 7.71577 17.5737Z" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
    </svg>
  );
}
