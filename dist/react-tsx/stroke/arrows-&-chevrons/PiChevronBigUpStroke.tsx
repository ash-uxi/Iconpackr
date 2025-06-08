import React from 'react';

/**
 * PiChevronBigUpStroke icon from the stroke style in arrows-&-chevrons category.
 */
interface PiChevronBigUpStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiChevronBigUpStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'chevron-big-up icon',
  ...props
}: PiChevronBigUpStrokeProps): JSX.Element {
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
      <path d="M6 15C7.57701 12.8192 9.42293 10.8636 11.4899 9.18284C11.7897 8.93905 12.2103 8.93905 12.5101 9.18284C14.5771 10.8636 16.423 12.8192 18 15" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
