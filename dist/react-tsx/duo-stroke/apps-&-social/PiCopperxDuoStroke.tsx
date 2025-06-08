import React from 'react';

/**
 * PiCopperxDuoStroke icon from the duo-stroke style in apps-&-social category.
 */
interface PiCopperxDuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiCopperxDuoStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'copperx icon',
  ...props
}: PiCopperxDuoStrokeProps): JSX.Element {
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
      <path d="M13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12Z" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M20.6469 9C19.405 5.42012 16.0027 2.8501 12.0001 2.8501C6.94669 2.8501 2.8501 6.94669 2.8501 12.0001C2.8501 17.0535 6.94669 21.1501 12.0001 21.1501C16.0027 21.1501 19.405 18.5801 20.6469 15.0002" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
    </svg>
  );
}
