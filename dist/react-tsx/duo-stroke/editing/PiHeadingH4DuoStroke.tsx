import React from 'react';

/**
 * PiHeadingH4DuoStroke icon from the duo-stroke style in editing category.
 */
interface PiHeadingH4DuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiHeadingH4DuoStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'heading-h4 icon',
  ...props
}: PiHeadingH4DuoStrokeProps): JSX.Element {
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
      <path d="M17.0003 10L16.2395 13.8039C16.1157 14.4227 16.589 15 17.2201 15H21.0003M21.0003 15V12M21.0003 15V18" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M4 12H12M4 18V6M12 18V6" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
    </svg>
  );
}
