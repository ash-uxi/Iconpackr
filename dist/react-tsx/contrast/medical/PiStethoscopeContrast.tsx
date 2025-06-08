import React from 'react';

/**
 * PiStethoscopeContrast icon from the contrast style in medical category.
 */
interface PiStethoscopeContrastProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiStethoscopeContrast({
  size = 24,
  color,
  className,
  ariaLabel = 'stethoscope icon',
  ...props
}: PiStethoscopeContrastProps): JSX.Element {
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
      <path d="M10.5 3.012a2.5 2.5 0 0 1 2.5 2.5v1.684c0 1.82-.638 3.581-1.803 4.979l-.245.295A3.82 3.82 0 0 1 8 13.852M5.5 3.012a2.5 2.5 0 0 0-2.5 2.5v1.684c0 1.82.638 3.581 1.803 4.979l.245.295A3.82 3.82 0 0 0 8 13.852m11 .16a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5m0 0v1.5a5.5 5.5 0 1 1-11 0v-1.66"/>
  <path fill="currentColor" d="M21.5 11.512a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" opacity=".28"/>
    </svg>
  );
}
