import React from 'react';

/**
 * PiBanLeftStroke icon from the stroke style in security category.
 */
interface PiBanLeftStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiBanLeftStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'ban-left icon',
  ...props
}: PiBanLeftStrokeProps): JSX.Element {
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
      <path d="M5.53056 5.53007C7.18638 3.87425 9.47388 2.8501 12.0006 2.8501C17.054 2.8501 21.1506 6.94669 21.1506 12.0001C21.1506 14.5268 20.1264 16.8143 18.4706 18.4701M5.53056 5.53007C3.87473 7.18589 2.85059 9.47339 2.85059 12.0001C2.85059 17.0535 6.94718 21.1501 12.0006 21.1501C14.5273 21.1501 16.8148 20.1259 18.4706 18.4701M5.53056 5.53007L18.4706 18.4701" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
