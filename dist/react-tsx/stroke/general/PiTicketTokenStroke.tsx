import React from 'react';

/**
 * PiTicketTokenStroke icon from the stroke style in general category.
 */
interface PiTicketTokenStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiTicketTokenStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'ticket-token icon',
  ...props
}: PiTicketTokenStrokeProps): JSX.Element {
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
      <path d="M10 6.10205V4M10 9.40137V10.4014M10 13.7007V14.7007M10 18V20M10 4H6C3.79086 4 2 5.79086 2 8V8.4C2 8.73137 2.26863 9 2.6 9C3.92548 9 5 10.0745 5 11.4V12.6C5 13.9255 3.92548 15 2.6 15C2.26863 15 2 15.2686 2 15.6V16C2 18.2091 3.79086 20 6 20H10M10 4H18C20.2091 4 22 5.79086 22 8V8.4C22 8.73137 21.7314 9 21.4 9C20.0745 9 19 10.0745 19 11.4V12.6C19 13.9255 20.0745 15 21.4 15C21.7314 15 22 15.2686 22 15.6V16C22 18.2091 20.2091 20 18 20H10" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
