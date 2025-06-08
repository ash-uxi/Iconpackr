import React from 'react';

/**
 * PiArrowRightDuoStroke icon from the duo-stroke style in arrows-&-chevrons category.
 */
interface PiArrowRightDuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiArrowRightDuoStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'arrow-right icon',
  ...props
}: PiArrowRightDuoStrokeProps): JSX.Element {
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
      <path d="M15.1697 6C17.2731 7.55556 19.1622 9.37278 20.7906 11.4057C20.9302 11.5801 21.0001 11.79 21.0001 12C21.0001 12.21 20.9302 12.4199 20.7906 12.5943C19.1622 14.6272 17.2731 16.4444 15.1697 18" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M21 12H3" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
    </svg>
  );
}
