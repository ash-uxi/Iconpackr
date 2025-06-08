import React from 'react';

/**
 * PiArrowTurnRightDownDuoStroke icon from the duo-stroke style in arrows-&-chevrons category.
 */
interface PiArrowTurnRightDownDuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiArrowTurnRightDownDuoStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'arrow-turn-right-down icon',
  ...props
}: PiArrowTurnRightDownDuoStrokeProps): JSX.Element {
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
      <path d="M15 20L15 12C15 9.19974 15 7.79961 14.455 6.73005C13.9757 5.78924 13.2108 5.02433 12.27 4.54497C11.2004 4 9.80026 4 7 4H4" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
  <path d="M20 15.1416C18.7037 16.8944 17.1893 18.4687 15.4953 19.8257C15.3499 19.9421 15.175 20.0003 15 20.0003C14.825 20.0003 14.6501 19.9421 14.5047 19.8257C12.8107 18.4687 11.2963 16.8944 10 15.1416" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
    </svg>
  );
}
