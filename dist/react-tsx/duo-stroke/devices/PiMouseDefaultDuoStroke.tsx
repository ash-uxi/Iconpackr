import React from 'react';

/**
 * PiMouseDefaultDuoStroke icon from the duo-stroke style in devices category.
 */
interface PiMouseDefaultDuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiMouseDefaultDuoStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'mouse-default icon',
  ...props
}: PiMouseDefaultDuoStrokeProps): JSX.Element {
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
      <path d="M12 10V8" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M19 14V10C19 6.13401 15.866 3 12 3C8.13401 3 5 6.13401 5 10V14C5 17.866 8.13401 21 12 21C15.866 21 19 17.866 19 14Z" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
    </svg>
  );
}
