import React from 'react';

/**
 * PiAlignLeftDuoStroke icon from the duo-stroke style in arrows-&-chevrons category.
 */
interface PiAlignLeftDuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiAlignLeftDuoStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'align-left icon',
  ...props
}: PiAlignLeftDuoStrokeProps): JSX.Element {
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
      <path d="M12.0309 7.91669C10.5767 8.97533 9.2706 10.2121 8.14485 11.5956C8.04828 11.7142 8 11.8571 8 12M12.0309 16.0834C10.5767 15.0247 9.2706 13.788 8.14485 12.4045C8.04828 12.2858 8 12.1429 8 12M8 12L20 12" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M4 5V19" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
    </svg>
  );
}
