import React from 'react';

/**
 * PiIdCardDuoStroke icon from the duo-stroke style in users category.
 */
interface PiIdCardDuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiIdCardDuoStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'id-card icon',
  ...props
}: PiIdCardDuoStrokeProps): JSX.Element {
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
      <path d="M14 10H18M15 14H18" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M21 17V7C21 5.34315 19.6569 4 18 4L6 4C4.34315 4 3 5.34315 3 7V17C3 18.6569 4.34315 20 6 20H18C19.6569 20 21 18.6569 21 17Z" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
  <path d="M7 15H10C10.5523 15 11 14.5523 11 14V10C11 9.44772 10.5523 9 10 9H7C6.44772 9 6 9.44772 6 10L6 14C6 14.5523 6.44772 15 7 15Z" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
    </svg>
  );
}
