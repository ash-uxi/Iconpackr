import React from 'react';

/**
 * PiEqualsDefaultStroke icon from the stroke style in maths category.
 */
interface PiEqualsDefaultStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiEqualsDefaultStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'equals-default icon',
  ...props
}: PiEqualsDefaultStrokeProps): JSX.Element {
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
      <path d="M5 9H19M5 15H19" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
