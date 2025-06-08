import React from 'react';

/**
 * PiVideoCallOutgoingDuoStroke icon from the duo-stroke style in devices category.
 */
interface PiVideoCallOutgoingDuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiVideoCallOutgoingDuoStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'video-call-outgoing icon',
  ...props
}: PiVideoCallOutgoingDuoStrokeProps): JSX.Element {
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
      <path d="M12.8492 13.3937C13.0237 12.1724 13.0468 10.9349 12.9183 9.70931C12.901 9.54355 12.827 9.39541 12.716 9.28436M8.6066 9.1511C9.82794 8.97662 11.0654 8.95359 12.291 9.08201C12.4568 9.09937 12.6049 9.17332 12.716 9.28436M12.716 9.28436L7 14.9971" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M13 19C15.2091 19 17 17.2091 17 15V9C17 6.79086 15.2091 5 13 5H6C3.79086 5 2 6.79086 2 9V15C2 17.2091 3.79086 19 6 19H13Z" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M17.7135 15.3994C17.2779 15.0335 17.0196 14.5002 17.001 13.9337L17.0012 10.0586C17.0219 9.49493 17.2799 8.96476 17.7135 8.60051L18.7135 7.76051C20.0147 6.6675 21.9999 7.59257 21.9999 9.29192V14.708C21.9999 16.4074 20.0147 17.3324 18.7135 16.2394L17.7135 15.3994Z" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
    </svg>
  );
}
