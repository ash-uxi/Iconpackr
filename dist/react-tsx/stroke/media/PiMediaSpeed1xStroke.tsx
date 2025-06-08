import React from 'react';

/**
 * PiMediaSpeed1xStroke icon from the stroke style in media category.
 */
interface PiMediaSpeed1xStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiMediaSpeed1xStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'media-speed-1x icon',
  ...props
}: PiMediaSpeed1xStrokeProps): JSX.Element {
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
      <path d="M13 19L16.5 14.5M16.5 14.5L20 10M16.5 14.5L20 19M16.5 14.5L13 10" stroke="currentColor" strokeWidth="2" fill="none"/>
  <path d="M8.02245 19V5C6.21696 5.44211 4.83732 6.68537 4.01855 8.32289" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
