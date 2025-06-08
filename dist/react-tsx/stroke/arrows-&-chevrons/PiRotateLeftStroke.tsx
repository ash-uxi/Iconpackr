import React from 'react';

/**
 * PiRotateLeftStroke icon from the stroke style in arrows-&-chevrons category.
 */
interface PiRotateLeftStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiRotateLeftStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'rotate-left icon',
  ...props
}: PiRotateLeftStrokeProps): JSX.Element {
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
      <path d="M6.21458 2.66992C5.70537 3.86202 5.35304 5.11461 5.16601 6.39629C5.11717 6.73098 5.38094 6.88085 5.64457 6.9818C5.67589 6.9938 5.70724 7.00568 5.73864 7.01746M5.73864 7.01746C7.20439 5.17853 9.46355 4 11.998 4C16.4162 4 19.998 7.58172 19.998 12C19.998 16.4183 16.4162 20 11.998 20C8.27029 20 5.13809 17.4505 4.25 14M5.73864 7.01746C6.85852 7.43772 8.02543 7.72281 9.21458 7.86607" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
