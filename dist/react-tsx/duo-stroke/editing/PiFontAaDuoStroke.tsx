import React from 'react';

/**
 * PiFontAaDuoStroke icon from the duo-stroke style in editing category.
 */
interface PiFontAaDuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiFontAaDuoStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'font-aa icon',
  ...props
}: PiFontAaDuoStrokeProps): JSX.Element {
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
      <path d="M2 19L6.35782 6.15727C6.60568 5.46327 7.26306 5 8 5C8.75748 5 9.42832 5.48902 9.66011 6.21016L14 19M4.03593 13H11.9641" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
  <path d="M22 12V18M22 15C22 16.6569 20.6569 18 19 18C17.3431 18 16 16.6569 16 15C16 13.3431 17.3431 12 19 12C20.6569 12 22 13.3431 22 15Z" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
    </svg>
  );
}
