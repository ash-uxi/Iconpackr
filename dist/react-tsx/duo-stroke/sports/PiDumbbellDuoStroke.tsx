import React from 'react';

/**
 * PiDumbbellDuoStroke icon from the duo-stroke style in sports category.
 */
interface PiDumbbellDuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiDumbbellDuoStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'dumbbell icon',
  ...props
}: PiDumbbellDuoStrokeProps): JSX.Element {
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
      <path d="M9 11H15M17 17C15.8954 17 15 16.1046 15 15V7C15 5.89543 15.8954 5 17 5C18.1046 5 19 5.89543 19 7V15C19 16.1046 18.1046 17 17 17ZM7 17C8.10457 17 9 16.1046 9 15V7C9 5.89543 8.10457 5 7 5C5.89543 5 5 5.89543 5 7V15C5 16.1046 5.89543 17 7 17Z" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M9 11H15M5 9H4C2.89543 9 2 9.89543 2 11C2 12.1046 2.89543 13 4 13H5M19 13H20C21.1046 13 22 12.1046 22 11C22 9.89543 21.1046 9 20 9H19" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
    </svg>
  );
}
