import React from 'react';

/**
 * PiBanLeftDuoStroke icon from the duo-stroke style in security category.
 */
interface PiBanLeftDuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiBanLeftDuoStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'ban-left icon',
  ...props
}: PiBanLeftDuoStrokeProps): JSX.Element {
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
      <path d="M18.4694 18.4701L5.5293 5.53003" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M2.85059 12.0001C2.85059 17.0535 6.94718 21.1501 12.0006 21.1501C17.054 21.1501 21.1506 17.0535 21.1506 12.0001C21.1506 6.94669 17.054 2.8501 12.0006 2.8501C6.94718 2.8501 2.85059 6.94669 2.85059 12.0001Z" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
    </svg>
  );
}
