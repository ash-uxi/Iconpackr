import React from 'react';

/**
 * PiMaximizeLineArrowDuoStroke icon from the duo-stroke style in arrows-&-chevrons category.
 */
interface PiMaximizeLineArrowDuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiMaximizeLineArrowDuoStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'maximize-line-arrow icon',
  ...props
}: PiMaximizeLineArrowDuoStrokeProps): JSX.Element {
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
      <path d="M19.7142 9.94268C20.0092 8.1811 20.0761 6.40091 19.9138 4.64657C19.8998 4.49608 19.835 4.36296 19.736 4.26398C19.637 4.165 19.5039 4.10016 19.3534 4.08624C17.5991 3.92395 15.8189 3.99085 14.0573 4.28582M4.28582 14.0573C3.99085 15.8189 3.92395 17.5991 4.08624 19.3534C4.10016 19.5039 4.165 19.637 4.26398 19.736C4.36296 19.835 4.49608 19.8998 4.64657 19.9138C6.40091 20.0761 8.1811 20.0092 9.94268 19.7142" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M19.736 4.26416L4.26392 19.7362" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
    </svg>
  );
}
