import React from 'react';

/**
 * PiWindowDockBottomRightDuoStroke icon from the duo-stroke style in devices category.
 */
interface PiWindowDockBottomRightDuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiWindowDockBottomRightDuoStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'window-dock-bottom-right icon',
  ...props
}: PiWindowDockBottomRightDuoStrokeProps): JSX.Element {
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
      <path  d="M13 16h4v-4h-4z" fill="none"/>
  <path d="M13 16h4v-4h-4z" fill="none"/>
  <path d="M21 7v10a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3" opacity=".28" fill="none"/>
    </svg>
  );
}
