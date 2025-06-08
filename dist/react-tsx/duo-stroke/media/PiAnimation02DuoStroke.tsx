import React from 'react';

/**
 * PiAnimation02DuoStroke icon from the duo-stroke style in media category.
 */
interface PiAnimation02DuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiAnimation02DuoStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'animation-02 icon',
  ...props
}: PiAnimation02DuoStrokeProps): JSX.Element {
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
      <path d="M16 8C16 9.65685 17.3431 11 19 11C20.6569 11 22 9.65685 22 8C22 6.34315 20.6569 5 19 5C17.3431 5 16 6.34315 16 8Z" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M2 14.0001C4.76142 14.0001 7 16.2387 7 19.0001V18.0001C7 14.373 9.14554 11.2471 12.2367 9.82227" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
    </svg>
  );
}
