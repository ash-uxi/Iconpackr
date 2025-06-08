import React from 'react';

/**
 * PiUserCircleDottedStroke icon from the stroke style in users category.
 */
interface PiUserCircleDottedStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiUserCircleDottedStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'user-circle-dotted icon',
  ...props
}: PiUserCircleDottedStrokeProps): JSX.Element {
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
      <path d="M12 2H12.01" stroke="currentColor" strokeWidth="2" fill="none"/>
  <path d="M15 10C15 11.6569 13.6569 13 12 13C10.3431 13 9 11.6569 9 10C9 8.34315 10.3431 7 12 7C13.6569 7 15 8.34315 15 10Z" stroke="currentColor" strokeWidth="2" fill="none"/>
  <path d="M15.5 16H8.49998C6.63274 16 5.10701 17.3926 5.00537 19.1467C6.80865 20.9119 9.27724 22 12 22C14.7227 22 17.1913 20.9119 18.9946 19.1467C18.8929 17.3926 17.3672 16 15.5 16Z" stroke="currentColor" strokeWidth="2" fill="none"/>
  <path d="M15.8257 2.76123H15.8357" stroke="currentColor" strokeWidth="2" fill="none"/>
  <path d="M19.0645 4.92383H19.0745" stroke="currentColor" strokeWidth="2" fill="none"/>
  <path d="M2 12H2.01" stroke="currentColor" strokeWidth="2" fill="none"/>
  <path d="M2.75684 8.1543H2.76684" stroke="currentColor" strokeWidth="2" fill="none"/>
  <path d="M2.7666 15.8721H2.7766" stroke="currentColor" strokeWidth="2" fill="none"/>
  <path d="M21.2197 15.8721H21.2297" stroke="currentColor" strokeWidth="2" fill="none"/>
  <path d="M21.2256 8.1543H21.2356" stroke="currentColor" strokeWidth="2" fill="none"/>
  <path d="M22 12H22.01" stroke="currentColor" strokeWidth="2" fill="none"/>
  <path d="M4.92871 4.92383H4.93871" stroke="currentColor" strokeWidth="2" fill="none"/>
  <path d="M8.17041 2.76123H8.18041" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
