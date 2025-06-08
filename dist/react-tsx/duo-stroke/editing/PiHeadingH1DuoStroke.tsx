import React from 'react';

/**
 * PiHeadingH1DuoStroke icon from the duo-stroke style in editing category.
 */
interface PiHeadingH1DuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiHeadingH1DuoStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'heading-h1 icon',
  ...props
}: PiHeadingH1DuoStrokeProps): JSX.Element {
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
      <path d="M19 18V10C18.0376 10.2357 17.3021 10.8984 16.8657 11.7713M19 18H16.5M19 18H21.5" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M4 12H12M4 18V6M12 18V6" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
    </svg>
  );
}
