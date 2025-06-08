import React from 'react';

/**
 * PiListCheckDuoStroke icon from the duo-stroke style in general category.
 */
interface PiListCheckDuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiListCheckDuoStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'list-check icon',
  ...props
}: PiListCheckDuoStrokeProps): JSX.Element {
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
      <path d="M13.5 14.9778L15.8412 17.3165C16.9672 15.3476 18.5256 13.6599 20.3987 12.3809" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M4 12H10M4 18H10M4 6H20" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
    </svg>
  );
}
