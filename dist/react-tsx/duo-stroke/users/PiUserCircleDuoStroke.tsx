import React from 'react';

/**
 * PiUserCircleDuoStroke icon from the duo-stroke style in users category.
 */
interface PiUserCircleDuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiUserCircleDuoStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'user-circle icon',
  ...props
}: PiUserCircleDuoStrokeProps): JSX.Element {
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
      <path  fillRule="evenodd" d="M12 6a4 4 0 1 0 0 8 4 4 0 0 0 0-8m-2 4a2 2 0 1 1 4 0 2 2 0 0 1-4 0" clipRule="evenodd" fill="none"/>
  <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2" opacity=".28" fill="none"/>
  <path  d="M19.386 17.144C18.597 15.85 17.134 15 15.5 15h-7c-1.634 0-3.098.85-3.886 2.144.419.6.91 1.148 1.46 1.63C6.337 17.78 7.293 17 8.5 17h7c1.206 0 2.162.782 2.427 1.773a9 9 0 0 0 1.459-1.629M4.645 20.18a11 11 0 0 1-.343-.323l.004.004q.165.163.34.319" fill="none"/>
    </svg>
  );
}
