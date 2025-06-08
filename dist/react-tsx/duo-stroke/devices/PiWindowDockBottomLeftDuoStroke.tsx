import React from 'react';

/**
 * PiWindowDockBottomLeftDuoStroke icon from the duo-stroke style in devices category.
 */
interface PiWindowDockBottomLeftDuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiWindowDockBottomLeftDuoStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'window-dock-bottom-left icon',
  ...props
}: PiWindowDockBottomLeftDuoStrokeProps): JSX.Element {
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
      <path  d="M11 16H7v-4h4z" fill="none"/>
  <path d="M11 16H7v-4h4z" fill="none"/>
  <path d="M3 7v10a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3" opacity=".28" fill="none"/>
    </svg>
  );
}
