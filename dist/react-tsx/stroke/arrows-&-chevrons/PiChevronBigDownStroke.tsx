import React from 'react';

/**
 * PiChevronBigDownStroke icon from the stroke style in arrows-&-chevrons category.
 */
interface PiChevronBigDownStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiChevronBigDownStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'chevron-big-down icon',
  ...props
}: PiChevronBigDownStrokeProps): JSX.Element {
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
      <path d="M6 9C7.57701 11.1808 9.42293 13.1364 11.4899 14.8172C11.7897 15.0609 12.2103 15.0609 12.5101 14.8172C14.5771 13.1364 16.423 11.1808 18 9" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
