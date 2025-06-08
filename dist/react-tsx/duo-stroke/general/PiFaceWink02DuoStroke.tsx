import React from 'react';

/**
 * PiFaceWink02DuoStroke icon from the duo-stroke style in general category.
 */
interface PiFaceWink02DuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiFaceWink02DuoStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'face-wink-02 icon',
  ...props
}: PiFaceWink02DuoStrokeProps): JSX.Element {
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
      <path d="M2.8501 12.0001C2.8501 17.0535 6.94669 21.1501 12.0001 21.1501C17.0535 21.1501 21.1501 17.0535 21.1501 12.0001C21.1501 6.94669 17.0535 2.8501 12.0001 2.8501C6.94669 2.8501 2.8501 6.94669 2.8501 12.0001Z" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
  <path d="M9 10V11M15.5 10.5H14.5M8.4292 14.5C9.33666 15.4257 10.6012 16 11.9999 16C13.3986 16 14.6632 15.4257 15.5706 14.5" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
    </svg>
  );
}
