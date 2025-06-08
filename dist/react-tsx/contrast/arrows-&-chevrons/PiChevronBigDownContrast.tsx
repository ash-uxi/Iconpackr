import React from 'react';

/**
 * PiChevronBigDownContrast icon from the contrast style in arrows-&-chevrons category.
 */
interface PiChevronBigDownContrastProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiChevronBigDownContrast({
  size = 24,
  color,
  className,
  ariaLabel = 'chevron-big-down icon',
  ...props
}: PiChevronBigDownContrastProps): JSX.Element {
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
      <path fill="currentColor" d="M11.49 14.817A30.6 30.6 0 0 1 6 9c3.993.333 8.007.333 12 0a30.6 30.6 0 0 1-5.49 5.817.8.8 0 0 1-1.02 0" opacity=".28"/>
  <path d="M11.49 14.817A30.6 30.6 0 0 1 6 9c3.993.333 8.007.333 12 0a30.6 30.6 0 0 1-5.49 5.817.8.8 0 0 1-1.02 0"/>
    </svg>
  );
}
