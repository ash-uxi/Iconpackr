import React from 'react';

/**
 * PiTextDuoStroke icon from the duo-stroke style in editing category.
 */
interface PiTextDuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiTextDuoStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'text icon',
  ...props
}: PiTextDuoStrokeProps): JSX.Element {
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
      <path d="M12 20V5" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
  <path d="M5 5H19" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
    </svg>
  );
}
