import React from 'react';

/**
 * PiMultipleCrossCancelDefaultDuoStroke icon from the duo-stroke style in maths category.
 */
interface PiMultipleCrossCancelDefaultDuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiMultipleCrossCancelDefaultDuoStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'multiple-cross-cancel-default icon',
  ...props
}: PiMultipleCrossCancelDefaultDuoStrokeProps): JSX.Element {
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
      <path d="M6 18L18 6" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
  <path d="M6 6L18 18" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
    </svg>
  );
}
