import React from 'react';

/**
 * PiMouseDefaultStroke icon from the stroke style in devices category.
 */
interface PiMouseDefaultStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiMouseDefaultStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'mouse-default icon',
  ...props
}: PiMouseDefaultStrokeProps): JSX.Element {
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
      <path d="M12 10V8M12 21C8.13401 21 5 17.866 5 14V10C5 6.13401 8.13401 3 12 3C15.866 3 19 6.13401 19 10V14C19 17.866 15.866 21 12 21Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
