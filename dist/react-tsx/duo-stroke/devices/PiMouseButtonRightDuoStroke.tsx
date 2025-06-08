import React from 'react';

/**
 * PiMouseButtonRightDuoStroke icon from the duo-stroke style in devices category.
 */
interface PiMouseButtonRightDuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiMouseButtonRightDuoStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'mouse-button-right icon',
  ...props
}: PiMouseButtonRightDuoStrokeProps): JSX.Element {
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
      <path d="M19 10C19 6.13401 15.866 3 12 3V7.8C12 8.92011 12 9.48016 12.218 9.90798C12.4097 10.2843 12.7157 10.5903 13.092 10.782C13.5198 11 14.0799 11 15.2 11H19V10Z" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M5 14V10C5 6.13401 8.13401 3 12 3V7.8C12 8.92011 12 9.48016 12.218 9.90798C12.4097 10.2843 12.7157 10.5903 13.092 10.782C13.5198 11 14.0799 11 15.2 11H19V14C19 17.866 15.866 21 12 21C8.13401 21 5 17.866 5 14Z" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
    </svg>
  );
}
