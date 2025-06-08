import React from 'react';

/**
 * PiThreeDotsMenuVerticalDuoStroke icon from the duo-stroke style in general category.
 */
interface PiThreeDotsMenuVerticalDuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiThreeDotsMenuVerticalDuoStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'three-dots-menu-vertical icon',
  ...props
}: PiThreeDotsMenuVerticalDuoStrokeProps): JSX.Element {
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
      <g opacity="0.28"  fill="none"><path d="M12 6C11.4477 6 11 5.55228 11 5C11 4.44772 11.4477 4 12 4C12.5523 4 13 4.44772 13 5C13 5.55228 12.5523 6 12 6Z" stroke={color || "currentColor"} strokeWidth="2" fill="none"/><path d="M12 20C11.4477 20 11 19.5523 11 19C11 18.4477 11.4477 18 12 18C12.5523 18 13 18.4477 13 19C13 19.5523 12.5523 20 12 20Z" stroke={color || "currentColor"} strokeWidth="2" fill="none"/></g>
  <path d="M12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12C13 12.5523 12.5523 13 12 13Z" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
    </svg>
  );
}
