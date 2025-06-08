import React from 'react';

/**
 * PiTvOldDuoStroke icon from the duo-stroke style in appliances category.
 */
interface PiTvOldDuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiTvOldDuoStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'tv-old icon',
  ...props
}: PiTvOldDuoStrokeProps): JSX.Element {
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
      <path d="M15 18H15.01M18 18H18.01M7 8H17C17.5523 8 18 8.44772 18 9V14C18 14.5523 17.5523 15 17 15H7C6.44772 15 6 14.5523 6 14V9C6 8.44772 6.44772 8 7 8Z" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M6.12012 2L12.0001 5L18.0001 2M6 5H18C19.6569 5 21 6.34315 21 8V18C21 19.6569 19.6569 21 18 21H6C4.34315 21 3 19.6569 3 18V8C3 6.34315 4.34315 5 6 5Z" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
    </svg>
  );
}
