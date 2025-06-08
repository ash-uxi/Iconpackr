import React from 'react';

/**
 * PiFontTtDuoStroke icon from the duo-stroke style in editing category.
 */
interface PiFontTtDuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiFontTtDuoStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'font-tt icon',
  ...props
}: PiFontTtDuoStrokeProps): JSX.Element {
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
      <path d="M10 19V5M4 5H16" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
  <path d="M17 19V13M14 13H20" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
    </svg>
  );
}
