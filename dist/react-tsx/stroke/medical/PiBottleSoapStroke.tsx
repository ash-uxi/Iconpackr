import React from 'react';

/**
 * PiBottleSoapStroke icon from the stroke style in medical category.
 */
interface PiBottleSoapStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiBottleSoapStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'bottle-soap icon',
  ...props
}: PiBottleSoapStrokeProps): JSX.Element {
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
      <path d="M12 5V2" stroke="currentColor" strokeWidth="2" fill="none"/>
  <path d="M15 8V6C15 5.44772 14.5523 5 14 5H10C9.44772 5 9 5.44772 9 6V8" stroke="currentColor" strokeWidth="2" fill="none"/>
  <path d="M6 11C6 9.34315 7.34315 8 9 8H15C16.6569 8 18 9.34315 18 11V20.5C18 21.3284 17.3284 22 16.5 22H7.5C6.67157 22 6 21.3284 6 20.5V11Z" stroke="currentColor" strokeWidth="2" fill="none"/>
  <path d="M6 14.4923C11.7518 12.4367 12 17.5862 18 15.9783" stroke="currentColor" strokeWidth="2" fill="none"/>
  <path d="M9.5 2H16.4189C17.3631 2 18.2014 2.60421 18.5 3.5" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
