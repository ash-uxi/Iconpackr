import React from 'react';

/**
 * PiFaceWinkDuoStroke icon from the duo-stroke style in general category.
 */
interface PiFaceWinkDuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiFaceWinkDuoStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'face-wink icon',
  ...props
}: PiFaceWinkDuoStrokeProps): JSX.Element {
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
      <path d="M2.8501 12.0001C2.8501 6.94669 6.94669 2.8501 12.0001 2.8501C17.0535 2.8501 21.1501 6.94669 21.1501 12.0001C21.1501 17.0535 17.0535 21.1501 12.0001 21.1501C6.94669 21.1501 2.8501 17.0535 2.8501 12.0001Z" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
  <path d="M9 9.99959L9 10.9996M15.1071 11.2066L14.4 10.4995L15.1071 9.79248M8.4292 14.4996C9.33666 15.4253 10.6012 15.9996 11.9999 15.9996C13.3986 15.9996 14.6632 15.4253 15.5706 14.4996" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
    </svg>
  );
}
