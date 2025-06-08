import React from 'react';

/**
 * PiChevronLeftContrast icon from the contrast style in arrows-&-chevrons category.
 */
interface PiChevronLeftContrastProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiChevronLeftContrast({
  size = 24,
  color,
  className,
  ariaLabel = 'chevron-left icon',
  ...props
}: PiChevronLeftContrastProps): JSX.Element {
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
      <path d="M10.106 11.702A20.4 20.4 0 0 1 14 8a53 53 0 0 0 0 8 20.4 20.4 0 0 1-3.894-3.702.47.47 0 0 1 0-.596"/>
  <path fill="currentColor" d="M10.106 11.702A20.4 20.4 0 0 1 14 8l-.304 4L14 16a20.4 20.4 0 0 1-3.894-3.702.47.47 0 0 1 0-.596" opacity=".28"/>
    </svg>
  );
}
