import React from 'react';

/**
 * PiLeafStroke icon from the stroke style in weather category.
 */
interface PiLeafStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiLeafStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'leaf icon',
  ...props
}: PiLeafStrokeProps): JSX.Element {
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
      <path d="M13 10.5C13 10.5 5 14 5 20.5" stroke="currentColor" strokeWidth="2" fill="none"/>
  <path d="M5.33932 18.2119C0.33921 2.71194 15.5002 7 19.0002 3C22.0816 14.5 17.8393 22.7119 5.33932 18.2119Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
