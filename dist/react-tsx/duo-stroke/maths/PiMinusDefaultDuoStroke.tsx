import React from 'react';

/**
 * PiMinusDefaultDuoStroke icon from the duo-stroke style in maths category.
 */
interface PiMinusDefaultDuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiMinusDefaultDuoStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'minus-default icon',
  ...props
}: PiMinusDefaultDuoStrokeProps): JSX.Element {
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
      <path d="M5 12H19" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
  <path d="M9 12H15" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
    </svg>
  );
}
