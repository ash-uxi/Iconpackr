import React from 'react';

/**
 * PiTicketTokenSolid icon from the solid style in general category.
 */
interface PiTicketTokenSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiTicketTokenSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'ticket-token icon',
  ...props
}: PiTicketTokenSolidProps): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      
       style={{color: color || "currentColor"}}
      
      role="img"
      aria-label={ariaLabel}
      {...props}
    >
      <path d="M6 3C3.23858 3 1 5.23858 1 8V8.4C1 9.28366 1.71634 10 2.6 10C3.3732 10 4 10.6268 4 11.4V12.6C4 13.3732 3.3732 14 2.6 14C1.71634 14 1 14.7163 1 15.6V16C1 18.7614 3.23858 21 6 21H18C20.7614 21 23 18.7614 23 16V15.6C23 14.7163 22.2837 14 21.4 14C20.6268 14 20 13.3732 20 12.6V11.4C20 10.6268 20.6268 10 21.4 10C22.2837 10 23 9.28366 23 8.4V8C23 5.23858 20.7614 3 18 3H6ZM10 4C10.5523 4 11 4.44772 11 5V6.10205C11 6.65434 10.5523 7.10205 10 7.10205C9.44771 7.10205 9 6.65434 9 6.10205V5C9 4.44772 9.44771 4 10 4ZM11 9.40137V10.4014C11 10.9537 10.5523 11.4014 10 11.4014C9.44771 11.4014 9 10.9537 9 10.4014V9.40137C9 8.84908 9.44771 8.40137 10 8.40137C10.5523 8.40137 11 8.84908 11 9.40137ZM10 12.7007C10.5523 12.7007 11 13.1484 11 13.7007V14.7007C11 15.253 10.5523 15.7007 10 15.7007C9.44771 15.7007 9 15.253 9 14.7007V13.7007C9 13.1484 9.44771 12.7007 10 12.7007ZM11 18V19C11 19.5523 10.5523 20 10 20C9.44771 20 9 19.5523 9 19V18C9 17.4477 9.44771 17 10 17C10.5523 17 11 17.4477 11 18Z" fill="currentColor" stroke="none"/>
    </svg>
  );
}
