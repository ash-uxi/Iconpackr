import React from 'react';

/**
 * PiArrowRightStroke icon from the stroke style in arrows-&-chevrons category.
 */
interface PiArrowRightStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiArrowRightStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'arrow-right icon',
  ...props
}: PiArrowRightStrokeProps): JSX.Element {
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
      <path d="M15.1696 6C17.273 7.55556 19.1622 9.37278 20.7905 11.4057C20.9302 11.5801 21 11.79 21 12M15.1696 18C17.273 16.4444 19.1622 14.6272 20.7905 12.5943C20.9302 12.4199 21 12.21 21 12M21 12H3" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
