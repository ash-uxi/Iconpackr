import React from 'react';

/**
 * PiFitnessRunFastDuoStroke icon from the duo-stroke style in sports category.
 */
interface PiFitnessRunFastDuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiFitnessRunFastDuoStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'fitness-run-fast icon',
  ...props
}: PiFitnessRunFastDuoStrokeProps): JSX.Element {
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
      <path d="M12 4H5M6 9H2M7 15H3M5 20H2" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
  <path d="M12.5 17L11.5938 18.8124C11.2047 19.5906 10.6192 20.2539 9.89519 20.7365L8 22" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M17 20L19.0783 17.229C19.5121 16.6506 19.2076 15.8171 18.5031 15.6546L15.7435 15.0177C14.5588 14.7443 13.8901 13.4858 14.3265 12.351L16 8H13.4721C11.957 8 10.572 8.85601 9.89443 10.2111L9 12" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M17 4C17 3.44772 17.4477 3 18 3C18.5523 3 19 3.44772 19 4C19 4.55228 18.5523 5 18 5C17.4477 5 17 4.55228 17 4Z" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M19 9.5L19.0206 9.53096C19.5801 10.3702 20.677 10.6615 21.5792 10.2104L22 10" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
    </svg>
  );
}
