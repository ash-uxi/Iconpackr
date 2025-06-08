import React from 'react';

/**
 * PiMapPin02AreaDuoStroke icon from the duo-stroke style in navigation category.
 */
interface PiMapPin02AreaDuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiMapPin02AreaDuoStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'map-pin-02-area icon',
  ...props
}: PiMapPin02AreaDuoStrokeProps): JSX.Element {
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
      <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11ZM12 11V17" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M7 15.1643C4.01099 15.7262 2 16.7766 2 17.9795C2 19.7744 6.47715 21.2295 12 21.2295C17.5228 21.2295 22 19.7744 22 17.9795C22 16.7766 19.989 15.7262 17 15.1643" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
    </svg>
  );
}
