import React from 'react';

/**
 * PiArrowTurnLeftDownDuoStroke icon from the duo-stroke style in arrows-&-chevrons category.
 */
interface PiArrowTurnLeftDownDuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiArrowTurnLeftDownDuoStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'arrow-turn-left-down icon',
  ...props
}: PiArrowTurnLeftDownDuoStrokeProps): JSX.Element {
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
      <path d="M4 15.1416C5.2963 16.8944 6.81065 18.4687 8.50473 19.8257C8.65006 19.9421 8.82503 20.0003 9 20.0003C9.17497 20.0003 9.34994 19.9421 9.49526 19.8257C11.1893 18.4687 12.7037 16.8944 14 15.1416" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M9 20V12C9 9.19974 9 7.79961 9.54497 6.73005C10.0243 5.78924 10.7892 5.02433 11.73 4.54497C12.7996 4 14.1997 4 17 4H20" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
    </svg>
  );
}
