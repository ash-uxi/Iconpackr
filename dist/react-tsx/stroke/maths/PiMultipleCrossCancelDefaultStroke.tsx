import React from 'react';

/**
 * PiMultipleCrossCancelDefaultStroke icon from the stroke style in maths category.
 */
interface PiMultipleCrossCancelDefaultStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiMultipleCrossCancelDefaultStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'multiple-cross-cancel-default icon',
  ...props
}: PiMultipleCrossCancelDefaultStrokeProps): JSX.Element {
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
      <path d="M6 18L12 12M12 12L18 6M12 12L6 6M12 12L18 18" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
