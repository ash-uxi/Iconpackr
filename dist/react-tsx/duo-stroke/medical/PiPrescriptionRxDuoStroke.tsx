import React from 'react';

/**
 * PiPrescriptionRxDuoStroke icon from the duo-stroke style in medical category.
 */
interface PiPrescriptionRxDuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiPrescriptionRxDuoStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'prescription-rx icon',
  ...props
}: PiPrescriptionRxDuoStrokeProps): JSX.Element {
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
      <path d="M12.0034 21L16.0034 17M16.0034 17L20.0034 13M16.0034 17L20.0034 21M16.0034 17L12.0034 13" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
  <path d="M4.00342 9V3H10.0034C11.6603 3 13.0034 4.34315 13.0034 6C13.0034 7.65685 11.6603 9 10.0034 9H8.00342M4.00342 9V15M4.00342 9H8.00342M8.00342 9L12.0034 13" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
    </svg>
  );
}
