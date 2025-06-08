import React from 'react';

/**
 * PiPowerDefaultDuoStroke icon from the duo-stroke style in general category.
 */
interface PiPowerDefaultDuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiPowerDefaultDuoStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'power-default icon',
  ...props
}: PiPowerDefaultDuoStrokeProps): JSX.Element {
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
      <path d="M12 8V2" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M7.55567 4C4.74888 5.56266 2.8501 8.55959 2.8501 12C2.8501 17.0534 6.94669 21.15 12.0001 21.15C17.0535 21.15 21.1501 17.0534 21.1501 12C21.1501 8.55959 19.2513 5.56266 16.4445 4" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
    </svg>
  );
}
