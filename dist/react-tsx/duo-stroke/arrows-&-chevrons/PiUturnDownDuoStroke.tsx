import React from 'react';

/**
 * PiUturnDownDuoStroke icon from the duo-stroke style in arrows-&-chevrons category.
 */
interface PiUturnDownDuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiUturnDownDuoStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'uturn-down icon',
  ...props
}: PiUturnDownDuoStrokeProps): JSX.Element {
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
      <path d="M3.91675 15.9688C4.9754 17.423 6.21211 18.729 7.59561 19.8548C7.7143 19.9514 7.85719 19.9996 8.00008 19.9996C8.14297 19.9996 8.28587 19.9514 8.40455 19.8548C9.78805 18.729 11.0248 17.423 12.0834 15.9688" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M8 20V9C8 6.23858 10.2386 4 13 4C15.7614 4 18 6.23858 18 9V12" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
    </svg>
  );
}
