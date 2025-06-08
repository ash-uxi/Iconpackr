import React from 'react';

/**
 * PiDoubleChevronLeftContrast icon from the contrast style in arrows-&-chevrons category.
 */
interface PiDoubleChevronLeftContrastProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiDoubleChevronLeftContrast({
  size = 24,
  color,
  className,
  ariaLabel = 'double-chevron-left icon',
  ...props
}: PiDoubleChevronLeftContrastProps): JSX.Element {
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
      <g fill="currentColor" opacity=".28">
    <path d="M7.106 11.702A20.4 20.4 0 0 1 11 8l-.165 2.205a24 24 0 0 0 0 3.59L11 16a20.4 20.4 0 0 1-3.894-3.702.47.47 0 0 1 0-.596M13.106 11.702A20.4 20.4 0 0 1 17 8l-.165 2.205a24 24 0 0 0 0 3.59L17 16a20.4 20.4 0 0 1-3.894-3.702.47.47 0 0 1 0-.596"/>
  </g>
  <path d="M13.106 11.702A20.4 20.4 0 0 1 17 8l-.165 2.205a24 24 0 0 0 0 3.59L17 16a20.4 20.4 0 0 1-3.894-3.702.47.47 0 0 1 0-.596M7.106 11.702A20.4 20.4 0 0 1 11 8l-.165 2.205a24 24 0 0 0 0 3.59L11 16a20.4 20.4 0 0 1-3.894-3.702.47.47 0 0 1 0-.596"/>
    </svg>
  );
}
