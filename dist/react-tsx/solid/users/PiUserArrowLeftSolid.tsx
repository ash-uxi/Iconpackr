import React from 'react';

/**
 * PiUserArrowLeftSolid icon from the solid style in users category.
 */
interface PiUserArrowLeftSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiUserArrowLeftSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'user-arrow-left icon',
  ...props
}: PiUserArrowLeftSolidProps): JSX.Element {
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
      <path d="M14.4382 14H8C5.23858 14 3 16.2386 3 19C3 20.6569 4.34315 22 6 22H14.435C13.8491 21.4654 13.3039 20.8873 12.8041 20.2704C12.2696 19.6109 12 18.8051 12 18.0015C12 17.1978 12.2697 16.3921 12.8041 15.7326C13.3049 15.1146 13.8512 14.5354 14.4382 14Z" fill="currentColor" stroke="none"/>
  <path d="M18.2099 14.83C18.5413 15.2718 18.4517 15.8986 18.0099 16.23C17.6878 16.4715 17.3786 16.7291 17.0835 17.0014H21C21.5523 17.0014 22 17.4491 22 18.0014C22 18.5537 21.5523 19.0014 21 19.0014H17.0835C17.3786 19.2738 17.6878 19.5313 18.0099 19.7729C18.4517 20.1042 18.5413 20.731 18.2099 21.1729C17.8785 21.6147 17.2517 21.7042 16.8099 21.3729C15.8981 20.689 15.0747 19.8957 14.358 19.0112C14.1199 18.7174 14 18.3591 14 18.0014C14 17.6438 14.1199 17.2855 14.358 16.9917C15.0747 16.1072 15.8981 15.3138 16.8099 14.63C17.2517 14.2986 17.8785 14.3882 18.2099 14.83Z" fill="currentColor" stroke="none"/>
  <path d="M7 7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7C17 9.76142 14.7614 12 12 12C9.23858 12 7 9.76142 7 7Z" fill="currentColor" stroke="none"/>
    </svg>
  );
}
