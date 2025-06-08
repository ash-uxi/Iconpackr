import React from 'react';

/**
 * PiFitnessWeightLiftingDuoStroke icon from the duo-stroke style in sports category.
 */
interface PiFitnessWeightLiftingDuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiFitnessWeightLiftingDuoStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'fitness-weight-lifting icon',
  ...props
}: PiFitnessWeightLiftingDuoStrokeProps): JSX.Element {
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
      <path d="M11 3C11 2.44772 11.4477 2 12 2C12.5523 2 13 2.44772 13 3C13 3.55228 12.5523 4 12 4C11.4477 4 11 3.55228 11 3Z" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M12 7V11M12 7H11.3188C10.5187 7 9.79566 7.47679 9.4805 8.21216L7 14M12 7H12.6812C13.4813 7 14.2043 7.47679 14.5195 8.21216L17 14" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
  <path d="M15 17L16 19L17 22" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
  <path d="M3 14H4M4 14H20M4 14V12M4 14V16M20 14H21M20 14V12M20 14V16" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M9 17L8 19L7 22" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
    </svg>
  );
}
