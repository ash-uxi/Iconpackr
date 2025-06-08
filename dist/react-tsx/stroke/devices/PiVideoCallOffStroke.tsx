import React from 'react';

/**
 * PiVideoCallOffStroke icon from the stroke style in devices category.
 */
interface PiVideoCallOffStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiVideoCallOffStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'video-call-off icon',
  ...props
}: PiVideoCallOffStrokeProps): JSX.Element {
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
      <path d="M17.0011 13.9339C17.0197 14.5004 17.278 15.0337 17.7136 15.3996L18.7136 16.2396C20.0148 17.3326 22 16.4076 22 14.7082V9.29216C22 7.59281 20.0148 6.66774 18.7136 7.76075L17.7136 8.60075C17.28 8.965 17.022 9.49517 17.0013 10.0588M17.0011 13.9339L17 15.0002C17 17.2093 15.2091 19.0002 13 19.0002H10.6567M17.0011 13.9339L17.0013 10.0588M17.0013 10.0588L17 9.00019C17 8.41321 16.8736 7.85577 16.6465 7.35361M2.00006 22L5.10124 18.8988M22.0001 2L16.6465 7.35361M5.10124 18.8988C3.32488 18.491 2 16.9003 2 15.0002V9.00019C2 6.79105 3.79086 5.00019 6 5.00019H13C13.111 5.00019 13.2209 5.00471 13.3296 5.01357M5.10124 18.8988L16.6465 7.35361" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
