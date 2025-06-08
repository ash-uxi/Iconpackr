import React from 'react';

/**
 * PiEggDefaultStroke icon from the stroke style in food category.
 */
interface PiEggDefaultStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiEggDefaultStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'egg-default icon',
  ...props
}: PiEggDefaultStrokeProps): JSX.Element {
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
      <path d="M19.3891 14.1111C19.3891 18.1919 16.081 21.5 12.0002 21.5C7.91945 21.5 4.61133 18.1919 4.61133 14.1111C4.61133 10.0303 7.91945 2.5 12.0002 2.5C16.081 2.5 19.3891 10.0303 19.3891 14.1111Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
