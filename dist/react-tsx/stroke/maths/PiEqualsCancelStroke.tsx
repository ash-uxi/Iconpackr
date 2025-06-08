import React from 'react';

/**
 * PiEqualsCancelStroke icon from the stroke style in maths category.
 */
interface PiEqualsCancelStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiEqualsCancelStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'equals-cancel icon',
  ...props
}: PiEqualsCancelStrokeProps): JSX.Element {
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
      <path d="M14.3333 9L19 3M14.3333 9H5M14.3333 9L9.66667 15M15 15L19 15M18.9805 9H19M5 21L9.66667 15M9.66667 15H5" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
